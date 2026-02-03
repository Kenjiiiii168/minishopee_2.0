import PocketBase from 'pocketbase';

// เราจะดึง URL จาก Environment Variable เพื่อความปลอดภัยและยืดหยุ่นครับ
// ถ้ายังไม่มีการตั้งค่า ระบบจะ default ไปที่ localhost:8090 ก่อน
const PB_URL = import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090';

export const pb = new PocketBase(PB_URL);
pb.autoCancellation(false);

// helper สำหรับดึง URL รูปภาพจาก PocketBase
export const getFileUrl = (collectionIdOrName: string, recordId: string, fileName: string) => {
    return `${PB_URL}/api/files/${collectionIdOrName}/${recordId}/${fileName}`;
};
