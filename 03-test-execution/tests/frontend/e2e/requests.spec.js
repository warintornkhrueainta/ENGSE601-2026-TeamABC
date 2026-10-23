// System test ผ่านหน้าจอ รีเซ็ตข้อมูลตั้งต้นก่อนทุกสถานการณ์
import { test, expect } from '@playwright/test';

const API = 'http://localhost:3001/api';
const ORG = 'u-org-01', ROOM_OWNER = 'u-room-01', EQUIP_OWNER = 'u-equip-01';

test.beforeEach(async ({ request }) => { await request.post(`${API}/_test/reset`); });

async function createViaApi(request) {
  const r = await request.post(`${API}/requests`, {
    headers: { 'x-user': ORG },
    data: { title: 'สัมมนา SE', daysAhead: 10, items: [{ resourceId: 'r-room-a', required: true }] },
  });
  return (await r.json()).id;
}

test('SYS-01 ผู้จัดส่งคำขอผ่านหน้าจอ แล้วเห็นสถานะ Awaiting Decisions', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'สร้างคำขอ' }).click();
  await page.getByTestId('title').fill('สัมมนา SE');
  await page.getByTestId('days').fill('5');
  await page.getByTestId('submit').click();
  await expect(page.getByTestId('overall-status')).toHaveText('Awaiting Decisions');
});

test('SYS-02 เจ้าของห้องอนุมัติผ่านหน้าจอ แล้วสถานะรวมเป็น Ready', async ({ page, request }) => {
  const id = await createViaApi(request);
  await page.goto('/');
  await page.getByTestId('user-select').selectOption(ROOM_OWNER);
  await page.getByTestId(`open-${id}`).click();
  await page.getByTestId('item-r-room-a').getByTestId('approve').click();
  await expect(page.getByTestId('overall-status')).toHaveText('Ready');
});

test('SYS-03 เจ้าของอุปกรณ์เปิดคำขอ ไม่เห็นปุ่มตัดสินรายการห้อง', async ({ page, request }) => {
  const id = await createViaApi(request);
  await page.goto('/');
  await page.getByTestId('user-select').selectOption(EQUIP_OWNER);
  await page.getByTestId(`open-${id}`).click();
  await expect(page.getByTestId('item-r-room-a').getByTestId('approve')).toHaveCount(0);
});
