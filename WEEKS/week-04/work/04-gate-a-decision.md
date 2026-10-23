# W04-04 — Quality Gate A Decision · ตัวอย่าง Team00

> ตัวอย่างของผู้สอน · CaseX SRS v1.1 · คำตัดสินอ้างจาก Review Log และ RTM ไม่ใช่ความรู้สึกของทีม

## Evidence reviewed

- SRS/Requirement version: CaseX SRS v1.1 (CASEX-SRS-1.1)
- W03-OUT: ไม่มีของ Case X · ใช้ AC-X-01..03 ในบทที่ 9 ของ SRS เป็นฐานการยอมรับ
- Review Log: [02-srs-review-log.md](02-srs-review-log.md) RV-01 ถึง RV-06
- RTM v1: [03-rtm-lite.csv](03-rtm-lite.csv) 5 แถว
- Reviewers/decision owner/date: สมาชิก ข (ผู้ทบทวน) · ทีม Team00 · 20 ต.ค. 2569

## Decision

เลือกเพียงหนึ่งสถานะ

- [ ] `Ready` — ไม่มี unresolved critical issue; critical requirements มี acceptance basis และ trace เพียงพอสำหรับ Phase 2
- [x] `Conditional` — ไปต่อเฉพาะส่วนที่ระบุ พร้อม conditions, owner และ due
- [ ] `Not Ready` — ยังมี blocker ที่ทำให้ test/design basis สำคัญตัดสินไม่ได้

## Evidence-based rationale

- FR-X-01 และ CON-X-01 เป็น Ready (RV-01 · RV-05) ออกแบบการทดสอบต่อได้ทันที
- FR-X-04 เป็น Conditional (RV-04) กรณีหลักคือผู้รับผิดชอบอุปกรณ์ทดสอบได้แล้ว รอยืนยันช่องอื่นของข้อมูลขั้นต่ำ
- FR-X-03 เป็น Conditional (RV-02) ทางปกติทดสอบได้ แต่กรณีหาเจ้าของไม่พบรอ TBD-X-04
- FR-X-02 เป็น Conditional (RV-03) ทดสอบเรื่องแสดงแหล่งที่มาได้ แต่เกณฑ์ “ไม่เป็นปัจจุบัน” รอ TBD-X-06
- ไม่มีข้อค้นพบระดับ Critical · ทุก Major มีผู้ตอบและกำหนดเวลาในบทที่ 11 ของ SRS อยู่แล้ว จึงไม่ใช่ Not Ready
- ไม่เลือก Ready เพราะยังมี Major ที่เปิดอยู่ 2 ข้อ (RV-02 · RV-03) ที่ทำให้ผลที่คาดหวังบางกรณียังเขียนไม่ได้

## Conditions / blockers / actions

| ID | Condition or blocker | Affected requirement / Phase 2 work | Action | Owner | Due | Re-check evidence |
|---|---|---|---|---|---|---|
| GA-01 | TBD-X-04 ยังไม่มีคำตอบ | FR-X-03 · การทบทวนเอกสารออกแบบ (W05) และการออกแบบกรณีทดสอบ | ส่งคำถามถึงผู้กำหนดนโยบาย · ระหว่างรอ ไม่ออกแบบกรณีหาเจ้าของไม่พบ | สมาชิก ก | ก่อนออกแบบกรณีทดสอบ | คำตอบที่มีชื่อผู้ตอบและวันที่ |
| GA-02 | TBD-X-06 เกณฑ์ความสดของข้อมูลความพร้อม | FR-X-02 · NFR-X-02 · System test ของ UC-X-01 A1 | ขอเกณฑ์จากผู้รับผิดชอบการเชื่อมต่อ · ทดสอบเฉพาะกรณีไม่มีเวลาที่ตรวจล่าสุดไปก่อน | สมาชิก ข | ก่อนเริ่มเชื่อมต่อ | สัญญาการเชื่อมต่อที่มีเกณฑ์ |
| GA-03 | รายการข้อมูลขั้นต่ำยังไม่ยืนยัน | FR-X-04 · กรณีทดสอบเชิงลบของ UC-X-01 E1 | ส่งข้อเสนอ RV-04 ให้ผู้เขียน SRS ยืนยัน | สมาชิก ค | ก่อนออกแบบกรณีทดสอบ | SRS รุ่นถัดไป หรือบันทึกการยืนยัน |

## Sign-off

- Requirement owner/representative: `Not Available` · ตัวอย่างนี้ไม่มีผู้มีส่วนได้ส่วนเสียจริงมายืนยัน
- Reviewer: สมาชิก ข · 20 ต.ค. 2569
- Team: Team00 · 20 ต.ค. 2569

Sign-off นี้เป็นบันทึกการทบทวนในรายวิชา ไม่ควรอ้างเป็นการอนุมัติจาก stakeholder หากไม่มีหลักฐานจริง
