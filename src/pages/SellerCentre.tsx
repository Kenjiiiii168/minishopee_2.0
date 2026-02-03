import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import type { Product } from '../types';
import { Package, Plus, Trash2, Image as ImageIcon, DollarSign, Tag, Layers } from 'lucide-react';

export const SellerCentre: React.FC = () => {
    const { user } = useAuth();
    const { userProducts, addProduct, deleteProduct } = useProducts();
    const [showForm, setShowForm] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        originalPrice: '',
        image: '',
        stock: '',
        description: '',
        category: 'Electronics',
        brand: '',
        shopName: user?.name ? `${user.name}'s Shop` : 'My Shop',
        shopRating: 4.5,
        shopLocation: 'Bangkok',
    });

    const categories = ['Audio', 'Electronics', 'Gaming', 'Accessories', 'Mobile', 'Fashion', 'Home', 'Camera'];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const price = parseFloat(formData.price);
        const originalPrice = formData.originalPrice ? parseFloat(formData.originalPrice) : price * 1.3;
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

        const newProduct: Omit<Product, 'id'> = {
            name: formData.name,
            price: price,
            originalPrice: originalPrice,
            discountPercent: discount > 0 ? discount : undefined,
            image: formData.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
            stock: parseInt(formData.stock) || 10,
            description: formData.description,
            category: formData.category,
            brand: formData.brand || 'Generic',
            shopName: formData.shopName,
            shopRating: formData.shopRating,
            shopLocation: formData.shopLocation,
            rating: 4.5,
            reviewCount: 0,
            soldCount: 0,
            shipping: {
                fee: 0,
                freeShippingMin: 299,
                location: formData.shopLocation,
            },
        };

        addProduct(newProduct);

        // Reset form
        setFormData({
            name: '',
            price: '',
            originalPrice: '',
            image: '',
            stock: '',
            description: '',
            category: 'Electronics',
            brand: '',
            shopName: user?.name ? `${user.name}'s Shop` : 'My Shop',
            shopRating: 4.5,
            shopLocation: 'Bangkok',
        });

        setShowForm(false);
    };

    const handleDelete = (id: number) => {
        if (confirm('ต้องการลบสินค้านี้ใช่หรือไม่?')) {
            deleteProduct(id);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-8 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">🏪 Seller Centre</h1>
                        <p className="text-orange-100 text-lg">จัดการสินค้าของคุณ</p>
                        <p className="text-sm text-orange-100 mt-1">ผู้ใช้: {user?.name || 'Guest'}</p>
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
                    >
                        <Plus size={20} />
                        {showForm ? 'ปิดฟอร์ม' : 'เพิ่มสินค้า'}
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">สินค้าทั้งหมด</p>
                            <p className="text-3xl font-bold text-gray-800">{userProducts.length}</p>
                        </div>
                        <Package className="text-blue-500" size={40} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">มีสต็อก</p>
                            <p className="text-3xl font-bold text-gray-800">
                                {userProducts.filter(p => p.stock > 0).length}
                            </p>
                        </div>
                        <Layers className="text-green-500" size={40} />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">หมดสต็อก</p>
                            <p className="text-3xl font-bold text-gray-800">
                                {userProducts.filter(p => p.stock === 0).length}
                            </p>
                        </div>
                        <Tag className="text-orange-500" size={40} />
                    </div>
                </div>
            </div>

            {/* Add Product Form */}
            {showForm && (
                <div className="bg-white rounded-2xl p-8 shadow-xl mb-8 border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                        <Plus className="text-orange-600" />
                        เพิ่มสินค้าใหม่
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Product Name */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    ชื่อสินค้า *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="เช่น Wireless Headphones"
                                />
                            </div>

                            {/* Brand */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    แบรนด์
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="เช่น Sony"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    ราคา (฿) *
                                </label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                        min="0"
                                        step="0.01"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="990.00"
                                    />
                                </div>
                            </div>

                            {/* Original Price */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    ราคาเดิม (฿) <span className="text-gray-400 font-normal text-xs">(ถ้ามีส่วนลด)</span>
                                </label>
                                <div className="relative">
                                    <Tag className="absolute left-3 top-3 text-gray-400" size={20} />
                                    <input
                                        type="number"
                                        name="originalPrice"
                                        value={formData.originalPrice}
                                        onChange={handleInputChange}
                                        min="0"
                                        step="0.01"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="1290.00"
                                    />
                                </div>
                            </div>

                            {/* Stock */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    จำนวนสต็อก *
                                </label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    required
                                    min="0"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="50"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    หมวดหมู่ *
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Image URL */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    URL รูปภาพ
                                </label>
                                <div className="relative">
                                    <ImageIcon className="absolute left-3 top-3 text-gray-400" size={20} />
                                    <input
                                        type="url"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="https://images.unsplash.com/..."
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">ใส่ URL รูปภาพจาก Unsplash หรือแหล่งอื่น (ถ้าไม่ใส่จะใช้รูปภาพเริ่มต้น)</p>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    คำอธิบายสินค้า *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                    placeholder="อธิบายรายละเอียดสินค้า คุณสมบัติ จุดเด่น..."
                                />
                            </div>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex gap-4 pt-4 border-t">
                            <button
                                type="submit"
                                className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-all hover:scale-105 active:scale-95 shadow-lg"
                            >
                                ✅ เพิ่มสินค้า
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
                            >
                                ยกเลิก
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Product List */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <Package className="text-orange-600" />
                    สินค้าของฉัน ({userProducts.length})
                </h2>

                {userProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <Package className="mx-auto text-gray-300 mb-4" size={80} />
                        <p className="text-gray-500 text-lg mb-2">ยังไม่มีสินค้า</p>
                        <p className="text-gray-400 text-sm">กดปุ่ม "เพิ่มสินค้า" เพื่อเริ่มต้น</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {userProducts.map(product => (
                            <div
                                key={product.id}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all"
                            >
                                {/* Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                {/* Info */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mb-1">{product.category} | {product.brand}</p>
                                    <div className="flex items-center gap-3">
                                        <span className="text-orange-600 font-bold">฿{product.price.toLocaleString()}</span>
                                        {product.originalPrice && (
                                            <span className="text-gray-400 text-sm line-through">
                                                ฿{product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                        <span className={`text-sm px-2 py-1 rounded ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            สต็อก: {product.stock}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                        title="ลบสินค้า"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
