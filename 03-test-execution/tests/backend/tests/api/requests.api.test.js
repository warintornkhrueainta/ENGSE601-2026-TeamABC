// API test (Integration): เรียกผ่าน HTTP ไม่ผ่านหน้าจอ ตรวจรหัสตอบกลับและข้อมูลที่ถูกบันทึก
const { resetData, store, USERS } = require('../helpers/testData');
const request = require('supertest');
const app = require('../../src/app');

beforeEach(() => resetData());

const post = (user, body) => request(app).post('/api/requests').set('x-user', user).send(body);
const body = (over = {}) => ({ title: 'สัมมนา', daysAhead: 10, items: [{ resourceId: 'r-room-a', required: true }], ...over });

describe('UC-X-01 ส่งคำขอ ผ่าน API', () => {
  test('TC-02 ระดับ API: ขอล่วงหน้า 3 วัน -> 201 และบันทึกลงไฟล์', async () => {
    const res = await post(USERS.organizer, body({ daysAhead: 3 }));
    expect(res.status).toBe(201);
    expect(res.body.status).toBe('AWAITING_DECISIONS');
    expect(store.read('requests')).toHaveLength(1);
  });
  test('TC-01 ระดับ API: ขอล่วงหน้า 2 วัน -> 400 และไม่บันทึก', async () => {
    const res = await post(USERS.organizer, body({ daysAhead: 2 }));
    expect(res.status).toBe(400);
    expect(store.read('requests')).toHaveLength(0);
  });
  test('TC-11 ระดับ API: อุปกรณ์ไม่มีผู้รับผิดชอบ -> 400', async () => {
    const res = await post(USERS.organizer, body({ items: [{ resourceId: 'r-proj-1', required: true }] }));
    expect(res.status).toBe(400);
  });
  test('TC-23 ไม่ได้เข้าสู่ระบบ -> 401', async () => {
    const res = await request(app).post('/api/requests').send(body());
    expect(res.status).toBe(401);
  });
});

describe('UC-X-02 พิจารณารายการ ผ่าน API', () => {
  let reqId, itemId;
  beforeEach(async () => {
    const res = await post(USERS.organizer, body());
    reqId = res.body.id;
    itemId = res.body.items[0].itemId;
  });
  const decide = (user, payload) =>
    request(app).post(`/api/requests/${reqId}/items/${itemId}/decision`).set('x-user', user).send(payload);

  test('TC-21 เจ้าของห้องอนุมัติ -> สถานะรวมเป็น READY และมีบันทึกผู้กระทำ', async () => {
    const res = await decide(USERS.roomOwner, { decision: 'APPROVED' });
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('READY');
    expect(store.read('audit').some(a => a.actor === USERS.roomOwner && a.action === 'APPROVED')).toBe(true);
  });
  test('TC-18 ระดับ API: เรียกตรงด้วยบัญชีเจ้าของอุปกรณ์ -> 403 และบันทึกเหตุการณ์', async () => {
    const res = await decide(USERS.equipOwner, { decision: 'APPROVED' });
    expect(res.status).toBe(403);
    expect(store.read('audit').some(a => a.action === 'DENIED')).toBe(true);
  });
});

describe('FR-X-06 แจ้งเตือนผู้จัด', () => {
  // BLOCKED: สภาพแวดล้อมทดสอบยังไม่มีบริการอีเมล (MAIL_SERVICE_URL) บันทึกเป็น Blocked ไม่ใช่ Pass
  test.skip('TC-22 ส่งคำขอแล้วผู้จัดได้รับอีเมลแจ้ง', () => {});
});
