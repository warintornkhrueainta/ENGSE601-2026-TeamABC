# โค้ดทดสอบ · ตัวอย่าง Team00

ไฟล์ในโฟลเดอร์นี้คัดลอกมาจากแอปสาธิต Case X Mini v0.9 ([zip ที่แจกในครั้งที่ 3](https://se-rmutl.github.io/engse601/materials/app/CaseXMini_v0.9_Student_S3.zip)) โดยคงโครงโฟลเดอร์เดิม เพราะไฟล์ทดสอบอ้างถึงกันด้วยตำแหน่งสัมพัทธ์ เช่น `../../src/services/requestService`

| ไฟล์ | ระดับ | กรณีทดสอบในชุดอ้างอิง v1 |
|---|---|---|
| [backend/tests/unit/requestService.test.js](backend/tests/unit/requestService.test.js) | Unit | TC-01 ถึง TC-12 |
| [backend/tests/api/requests.api.test.js](backend/tests/api/requests.api.test.js) | Integration (API) | TC-01 TC-02 TC-11 TC-23 (กลุ่ม `UC-X-01`) · ข้อที่เหลือในไฟล์เป็นของ feature อื่น ไม่ได้รันในรอบนี้ |
| [backend/tests/helpers/testData.js](backend/tests/helpers/testData.js) | ตัวช่วย | สร้างโฟลเดอร์ข้อมูลชั่วคราว และรีเซ็ตข้อมูลจาก `tests/fixtures` ก่อนทุกกรณี |
| [frontend/e2e/requests.spec.js](frontend/e2e/requests.spec.js) | System | SYS-01 (ข้อ SYS-02 SYS-03 เป็นของ feature อื่น) |

ชื่อ test ใช้รหัส TC เดิมจากชุดอ้างอิง และ Assert ตามผลที่คาดหวัง เช่น TC-02 คาดหวัง `true` เพราะ 3 วันเป็นค่าขอบล่างที่ต้องรับ

## รันซ้ำอย่างไร

วางไฟล์กลับในโฟลเดอร์เดิมของแอป แล้วรันในโฟลเดอร์ `backend` หรือ `frontend`

```bash
cd v0.9/backend && npm install
npx jest --runInBand tests/unit/requestService.test.js
npx jest --runInBand tests/api/requests.api.test.js -t UC-X-01

cd ../frontend && npm install
npx playwright test -g SYS-01 --reporter=list
```

ทีมที่ทดสอบโครงงานของตนเอง ถ้าโค้ดทดสอบอยู่ใน repo โครงงานแล้ว ไม่ต้องคัดลอก ให้สร้างไฟล์ `LINKS.md` ที่นี่ ใส่ลิงก์ไปยังไฟล์นั้นพร้อม commit
