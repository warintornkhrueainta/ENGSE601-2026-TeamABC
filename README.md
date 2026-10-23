# ENGSE601 — Team V&V Evidence Repository

Template สำหรับเก็บข้อมูลตั้งต้น งานระหว่างทำ และหลักฐานส่งงาน ENGSE601 ที่เชื่อมโยงกับโครงงาน ENGSE212

## สมาชิกในทีม (Team Members)

1. **นาย ณฐภาพ สายหล้า**
2. **[ชื่อ-นามสกุลสมาชิกคนที่ 2]**

รายละเอียดบทบาทและผู้รับผิดชอบของสมาชิกแต่ละคน สามารถดูเพิ่มเติมได้ที่ [TEAM.md](TEAM.md)

---

## อัปเดต 21 ต.ค. 2569 · อ่านก่อน

**กำหนดส่งงานกลุ่มทั้งหมด: วันศุกร์ที่ 23 ต.ค. 2569 เวลา 23:59 น.**

ส่งงานผ่าน Repository นี้ ตามรายการใน [SUBMISSIONS.md](SUBMISSIONS.md) แล้วสร้าง Release ชื่อ `engse601-submit`

| งาน | ตำแหน่งจัดเก็บ |
|---|---|
| W01–W05 | `WEEKS/week-01` ถึง `week-05` ในโฟลเดอร์ `submission/` |
| ใบงานครั้งที่ 1 ส่วน B | [01-plan/](01-plan/) |
| ใบงานครั้งที่ 2 ส่วน B | [02-test-design/](02-test-design/) |
| ใบงานรวม 3–4 ส่วน B1 และ B3 | [03-test-execution/](03-test-execution/) · [TEAM.md](TEAM.md) · [AI-LOG.md](AI-LOG.md) |

- Repository ต้องเป็น **Public**
- ห้ามใส่รหัสนักศึกษาและข้อมูลส่วนบุคคลที่ไม่จำเป็น
- ห้ามวางงานเดี่ยวส่วน A
- ไม่ต้องทำใบงานรวม 3–4 ส่วน B2 และสัปดาห์ที่ 6–17
- ทีมที่สร้าง Repository แล้ว อ่านวิธีอัปเดตใน [UPDATE-2569-10.md](UPDATE-2569-10.md)
- ทีมที่ยังไม่มี Repository ให้กด **Use this template**
- ตัวอย่าง: [ENGSE601-Team00-CaseX-Example](https://github.com/se-rmutl/ENGSE601-Team00-CaseX-Example) — ห้ามคัดลอก

## 1. เริ่มต้นตรงนี้

ก่อนเริ่ม Week 01 ให้ทีมทำตามลำดับต่อไปนี้

1. สร้าง Repository ของทีมจาก Template นี้ โดยตั้งชื่อแนะนำเป็น `engse601-<year>-<team-name>`
2. ตั้ง Repository เป็น **Public** เพื่อให้ผู้สอนตรวจสอบและดาวน์โหลดได้
3. เพิ่มสมาชิกทุกคนและอาจารย์ตามสิทธิ์ที่กำหนด
4. กรอก [PROJECT.md](PROJECT.md) และ [TEAM.md](TEAM.md)
5. นำ Proposal, Requirement/SRS และเอกสารออกแบบที่มีอยู่มาวางหรือเชื่อมโยงตาม [INPUTS/README.md](INPUTS/README.md)
6. กรอก [INPUTS/input-register.md](INPUTS/input-register.md) โดยระบุชื่อเอกสาร Version, Owner และ Source of Truth
7. อ่าน [CONTRIBUTING.md](CONTRIBUTING.md) เพื่อกำหนดแนวทาง Branch, Commit, Review และ Tag
8. ตรวจสอบรายการพร้อมเริ่มใน [STATUS.md](STATUS.md) แล้วเปิด `WEEKS/week-01/README.md`

## 2. หลักการใช้ Repository

```text
READ     → อ่านเอกสารสอนและ Worksheet
INPUT    → Proposal + Requirement/SRS + Artifact จริงจาก ENGSE212
WORK     → ทำงานและบันทึกใน WEEKS/week-XX/work/
CHECK    → Peer Review + Definition of Done + ตรวจการใช้ AI
SUBMIT   → Export PDF ไปที่ WEEKS/week-XX/submission/
TRACE    → บันทึก Commit, Tag และ URL ใน STATUS.md
HANDOFF  → นำผลลัพธ์ไปใช้ต่อในสัปดาห์ถัดไป
```

เอกสารใน `INPUTS/` คือข้อมูลต้นทาง ไม่ควรแก้ทับโดยไม่เปลี่ยน Version ส่วนไฟล์ใน `work/` ใช้สำหรับงานระหว่างทำ และไฟล์ใน `submission/` คือฉบับที่ทีมประกาศใช้ส่งงาน

## 3. สถานะหลักฐานที่ต้องใช้ตรงกัน

| Status | ความหมาย | สิ่งที่ต้องอ้างอิง |
|---|---|---|
| `Existing` | มีหลักฐานจริงและเปิดตรวจได้ | Path/URL, Version/Build, วันที่หรือ Commit |
| `Planned` | วางแผนจะทำ แต่ยังไม่เกิดขึ้น | Owner, Next Action และช่วงเวลาที่คาดไว้ |
| `Not Ready` | ยังทำไม่ได้เพราะขาดข้อมูลหรือมี Blocker | Blocker, Decision Owner และ Next Action |
| `Not Executed` | ออกแบบการทดสอบแล้ว แต่ยังไม่ได้รัน | Test/Case ที่วางแผนไว้ โดยห้ามใส่ผลสมมติ |

ห้ามสร้างผลทดสอบ Log, Screenshot, Approval, Stakeholder Decision หรือหลักฐานที่ทีมไม่ได้ดำเนินการจริง หากใช้ AI ต้องเปิดเผยและตรวจสอบข้อเสนอเทียบกับ Artifact ของทีมเสมอ

## 4. แผนหลักฐาน Week 01–04

| Week | งานที่ต้องทำ | ไฟล์ส่งมาตรฐาน |
|---|---|---|
| 01 | สร้าง Quality Risk Cards จำนวน 3–5 รายการ | `W01_<TeamName>_Quality-Risk-Cards_v1.pdf` |
| 02 | สร้าง Project Quality Route Map สำหรับ Critical Slice | `W02_<TeamName>_Project-Quality-Route-Map_v1.pdf` |
| 03 | ตรวจ Testability และปรับ Requirements พร้อม Acceptance Criteria | `W03_<TeamName>_Revised-Critical-Requirements_v1.pdf` |
| 04 | Requirement Review, RTM v1 และ Gate A | `W04_<TeamName>_SRS-Review-and-RTM_v1.pdf` |

รายละเอียดขั้นตอน แบบกรอก และ Definition of Done อยู่ใน README ของแต่ละสัปดาห์

## 5. วิธีส่งงานรายสัปดาห์

1. สร้าง Branch สำหรับงาน เช่น `week-03/requirement-review`
2. กรอก Template ใน `work/` และอ้างอิง Input จริง
3. ให้สมาชิกที่ไม่ได้เป็นผู้เขียนหลักทำ Peer Review
4. ตรวจ Definition of Done ใน README ของสัปดาห์
5. Export PDF ด้วยชื่อมาตรฐานและวางใน `submission/`
6. Commit ด้วยรูปแบบ เช่น `submit(W03): revised critical requirements v1`
7. Merge เข้า `main` เมื่อทีมตรวจสอบครบ
8. สร้าง Tag เช่น `w03-submission-v1`
9. กรอก Tag, Commit Hash และ URL ใน [STATUS.md](STATUS.md)
10. ส่ง URL ของ Repository พร้อม Tag/Commit Hash ตามช่องทางที่อาจารย์กำหนด

หากแก้ไขหลังส่ง ให้เพิ่ม Version และ Tag เช่น `v2` พร้อมบันทึกเหตุผลใน `STATUS.md`

## 6. โครงสร้างสำคัญ

```text
.
├── PROJECT.md
├── TEAM.md
├── STATUS.md
├── CONTRIBUTING.md
├── INPUTS/
├── TEMPLATES/
├── SUBMISSIONS.md
├── 01-plan/
├── 02-test-design/
├── 03-test-execution/
└── WEEKS/
    ├── week-01/ ... week-05/
    └── week-06/ ... week-17/
```

## 7. Source of Truth

- Proposal/SRS/Design: `INPUTS/input-register.md`
- สถานะการส่ง ENGSE601: `STATUS.md`
- Source Code และ Build ของ ENGSE212: ระบุ URL และ Commit/Build Reference ใน `PROJECT.md`
- หากข้อมูลไม่ตรงกัน ให้ยึด Artifact Version ที่ระบุใน Input Register และบันทึกการเปลี่ยนแปลงก่อนใช้งานต่อ
