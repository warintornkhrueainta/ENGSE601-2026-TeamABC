// เตรียมข้อมูลทดสอบ: แยกโฟลเดอร์ข้อมูลของการทดสอบออกจากข้อมูลจริง แล้วรีเซ็ตก่อนทุกกรณี
const path = require('path');
const os = require('os');
const fs = require('fs');

process.env.DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'casex-test-'));
const store = require('../../src/repository/jsonStore');
const FIXTURES = path.join(__dirname, '..', 'fixtures');

function resetData() { store.resetFrom(FIXTURES); }

const USERS = { organizer: 'u-org-01', roomOwner: 'u-room-01', equipOwner: 'u-equip-01' };

module.exports = { resetData, store, USERS };
