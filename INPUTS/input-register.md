# Input Register and Source of Truth · ตัวอย่าง Team00

| Input ID | Artifact | File path / URL | Version / date / commit | Owner | Status | Used by | Notes / change impact |
|---|---|---|---|---|---|---|---|
| IN-01 | Proposal | — | — | — | Not Ready | — | ตัวอย่างใช้ Case X ไม่มี proposal · ใช้บทที่ 1–2 ของ SRS แทน |
| IN-02 | Requirement/SRS | [CaseX SRS v1.1](https://se-rmutl.github.io/engse601/materials/casex/ENGSE_CaseX_SRS_v1_1_Practical_TH.docx) | v1.1 · 8 ก.ย. 2569 | ผู้สอน | Current | W04 · ครั้งที่ 1–3 | รหัสเหมือน v1.0 ทุกตัว |
| IN-03 | HLD/Detail Design | [CaseX HLD v0.9](https://se-rmutl.github.io/engse601/materials/casex/ENGSE601_CaseX_HLD_v0_9_Draft_for_Review_TH.docx) | v0.9 Draft for Review | ผู้สอน | Draft | W05 · ครั้งที่ 1 | ยังไม่เป็น baseline |
| IN-04 | ระบบที่ทดสอบ | [CaseXMini_v0.9_Student_S3.zip](https://se-rmutl.github.io/engse601/materials/app/CaseXMini_v0.9_Student_S3.zip) | 0.9.0 | ผู้สอน | Current | ครั้งที่ 2–3 | แจกเป็น zip ไม่ใช่ git repo |
| IN-05 | ประเด็นที่ยังไม่มีข้อสรุป | SRS v1.1 บทที่ 11 TBD-X-01..08 | v1.1 | ผู้กำหนดนโยบาย | Current | W04 · ครั้งที่ 1–2 | TBD-X-04 และ TBD-X-06 กระทบ slice ที่เลือก |

## Status meaning

- `Current`: version ที่ทีมประกาศเป็น source of truth สำหรับงานปัจจุบัน
- `Draft`: ใช้ทบทวนได้แต่ยังไม่เป็น baseline
- `Superseded`: มี version ใหม่กว่า; เก็บไว้เพื่อ trace
- `Not Ready`: ยังไม่มีหรือยังเปิดตรวจไม่ได้ ต้องมี owner/next action ใน Notes

## Input change log

| Date | Input ID | Old → New | Reason | Week/artifact affected | Action/owner |
|---|---|---|---|---|---|
| 8 ก.ย. 2569 | IN-02 | SRS v1.0 → v1.1 | ผู้เขียนย่อเอกสารให้อ่านง่าย รหัสคงเดิม | W05 อ้าง v1.0 · W04 ตัวอย่างนี้อ้าง v1.1 | ไม่ต้องแก้ trace เพราะรหัสเดิม |
