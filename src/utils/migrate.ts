import { pb } from '../lib/pocketbase';
import { products } from '../data/products';

export const migrateProducts = async () => {
    console.log('Starting migration...');
    let successCount = 0;
    let errorCount = 0;

    // --- เริ่มการย้ายข้อมูล ---
    for (const product of products) {
        try {
            const existing = await pb.collection('products').getList(1, 1, {
                filter: pb.filter("name = {:name}", { name: product.name })
            }).catch(() => ({ totalItems: 0 }));

            if (existing.totalItems === 0) {
                await pb.collection('products').create({
                    name: product.name,
                    price: product.price || 0,
                    original_price: product.originalPrice || 0,
                    discount_percent: product.discountPercent || 0,
                    image_url: product.image,
                    stock: product.stock ?? 0,
                    description: product.description || "",
                    shop_name: product.shopName || "",
                    shop_rating: product.shopRating || 0,
                    shop_location: product.shopLocation || "",
                    category: product.category || "",
                    brand: product.brand || "",
                    is_flash_sale: !!product.isFlashSale,
                    is_premium: !!product.isPremium,
                    sold_count: product.soldCount || 0,
                    rating: product.rating || 0,
                });
                successCount++;
            }
        } catch (error: any) {
            console.error(`Error migrating ${product.name}:`, error.data || error); // ดูรายละเอียด error ใน console
            errorCount++;
        }
    }

    // Migrate Coupons
    const { availableCoupons } = await import('../data/coupons');
    for (const coupon of availableCoupons) {
        try {
            const existing = await pb.collection('coupons').getList(1, 1, {
                filter: pb.filter("code = {:code}", { code: coupon.code })
            }).catch(() => ({ totalItems: 0 }));

            if (existing.totalItems === 0) {
                await pb.collection('coupons').create({
                    code: coupon.code,
                    discount: coupon.discount,
                    min_spend: coupon.minSpend,
                    description: coupon.description,
                    expiry_date: coupon.expiryDate,
                    is_active: true
                });
            }
        } catch (error: any) {
            console.error(`Error migrating coupon ${coupon.code}:`, error.data || error);
        }
    }

    alert(`ย้ายข้อมูลเสร็จแล้วครับพี่! (สำเร็จ: ${successCount}, ผิดพลาด: ${errorCount}) \nถ้ามีผิดพลาด 1-2 รายการไม่ต้องตกใจครับ เป็นเรื่องปกติของข้อมูลบางตัวครับ`);
};
