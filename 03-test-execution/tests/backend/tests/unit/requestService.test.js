// Unit test ของ C-03 requestService
// กรณีทดสอบเชิงตรรกะมาจากครั้งที่ 2: R-A และ R-B ใช้แบ่งกลุ่มและค่าขอบ, FR-X-04 ใช้ตารางตัดสินใจ
const { validateRequest } = require('../../src/services/requestService');
const resources = require('../fixtures/resources.json');

const room = { resourceId: 'r-room-a', required: true };
const valid = (over = {}) => ({ title: 'สัมมนา', daysAhead: 10, items: [room], ...over });

describe('R-A ขอล่วงหน้าได้ 3 ถึง 30 วัน (กฎสมมติ)', () => {
  test.each([
    ['TC-01', 2, false, 'เลยขอบล่าง'],
    ['TC-02', 3, true, 'ขอบล่าง'],
    ['TC-03', 15, true, 'ตัวแทนกลุ่มที่ถูกต้อง'],
    ['TC-04', 30, true, 'ขอบบน'],
    ['TC-05', 31, false, 'เลยขอบบน'],
  ])('%s ขอล่วงหน้า %i วัน ควรผ่าน=%s (%s)', (id, days, expected) => {
    // Arrange
    const input = valid({ daysAhead: days });
    // Act
    const result = validateRequest(input, resources);
    // Assert
    expect(result.ok).toBe(expected);
  });
});

describe('R-B หนึ่งคำขอมีทรัพยากรได้ 1 ถึง 10 รายการ (กฎสมมติ)', () => {
  const nItems = n => Array.from({ length: n }, () => room);
  test.each([
    ['TC-06', 0, false], ['TC-07', 1, true], ['TC-08', 10, true], ['TC-09', 11, false],
  ])('%s มีทรัพยากร %i รายการ ควรผ่าน=%s', (id, n, expected) => {
    expect(validateRequest(valid({ items: nItems(n) }), resources).ok).toBe(expected);
  });
});

describe('FR-X-04 อุปกรณ์ต้องมีผู้รับผิดชอบ (ตารางตัดสินใจ)', () => {
  test('TC-10 มีอุปกรณ์ และระบุผู้รับผิดชอบ -> ผ่าน', () => {
    const r = validateRequest(valid({ items: [room, { resourceId: 'r-proj-1', responsible: 'สมชาย' }] }), resources);
    expect(r.ok).toBe(true);
  });
  test('TC-11 มีอุปกรณ์ แต่ไม่ระบุผู้รับผิดชอบ -> ไม่ผ่าน และบอกว่าขาดอะไร', () => {
    const r = validateRequest(valid({ items: [room, { resourceId: 'r-proj-1' }] }), resources);
    expect(r.ok).toBe(false);
    expect(r.errors[0].message).toContain('ต้องระบุผู้รับผิดชอบ');
  });
  test('TC-12 ไม่มีอุปกรณ์เลย -> ผ่าน', () => {
    expect(validateRequest(valid(), resources).ok).toBe(true);
  });
});
