import type { Product } from '../types';

export const products: Product[] = [
    // --- AUDIO ---
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2990,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        stock: 10,
        description: "Experience premium sound quality with these high-performance wireless headphones. Features active noise cancelling.",
        shopName: "AudioBase Official",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Audio"
    },
    {
        id: 9,
        name: "Bluetooth Earbuds Gold",
        price: 1590,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
        stock: 25,
        description: "Compact wireless earbuds with crystal clear sound and 24-hour battery life.",
        shopName: "AudioBase Official",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Audio"
    },
    // --- ELECTRONICS ---
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 4500,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
        stock: 5,
        description: "Professional mechanical keyboard with Cherry MX Blue switches.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Electronics"
    },
    {
        id: 5,
        name: "Laptop Stand",
        price: 590,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        stock: 15,
        description: "Adjustable aluminum laptop stand. Ergonomic design improves posture.",
        shopName: "Office Essentials",
        shopRating: 4.5,
        shopLocation: "Nonthaburi",
        category: "Electronics"
    },
    {
        id: 7,
        name: "4K Monitor",
        price: 12500,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        stock: 2,
        description: "27-inch 4K UHD IPS monitor with HDR10.",
        shopName: "Display Pro",
        shopRating: 4.6,
        shopLocation: "Bangkok",
        category: "Electronics"
    },
    // --- GAMING ---
    {
        id: 3,
        name: "Gaming Mouse",
        price: 1290,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
        stock: 8,
        description: "Precision gaming mouse with 16000 DPI sensor.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Gaming"
    },
    {
        id: 10,
        name: "Gaming Controller",
        price: 1990,
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&q=80",
        stock: 12,
        description: "Responsive gaming controller with haptic feedback and custom triggers.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Gaming"
    },
    // --- ACCESSORIES ---
    {
        id: 4,
        name: "Smart Watch",
        price: 8900,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
        stock: 3,
        description: "Stay connected and healthy with this advanced smartwatch.",
        shopName: "TechLife Store",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Accessories"
    },
    {
        id: 11,
        name: "Leather Wallet",
        price: 850,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        stock: 20,
        description: "Premium leather wallet with RFID protection and slim design.",
        shopName: "Minimalist Style",
        shopRating: 4.6,
        shopLocation: "Bangkok",
        category: "Accessories"
    },
    // --- MOBILE ---
    {
        id: 12,
        name: "Smartphone Pro",
        price: 32900,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        stock: 5,
        description: "Latest flagship smartphone with advanced camera system and high-speed processor.",
        shopName: "MobileHub Official",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Mobile"
    },
    {
        id: 13,
        name: "Power Bank 20000mAh",
        price: 1200,
        image: "https://images.unsplash.com/photo-1609592424109-dd0337daacc4?w=500&q=80",
        stock: 30,
        description: "High-capacity power bank with fast charging support.",
        shopName: "MobileHub Official",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Mobile"
    },
    // --- FASHION ---
    {
        id: 14,
        name: "Premium Sneaker",
        price: 3500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        stock: 10,
        description: "Limited edition sneakers with premium comfort and stylish design.",
        shopName: "Footwear King",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Fashion"
    },
    {
        id: 15,
        name: "Classic Denim Jacket",
        price: 2200,
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500&q=80",
        stock: 15,
        description: "Heavyweight denim jacket with a classic fit.",
        shopName: "Streetwear Co.",
        shopRating: 4.5,
        shopLocation: "Bangkok",
        category: "Fashion"
    },
    // --- HOME ---
    {
        id: 8,
        name: "Ergonomic Chair",
        price: 8500,
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
        stock: 0,
        description: "High-back ergonomic office chair with breathable mesh.",
        shopName: "Office Essentials",
        shopRating: 4.5,
        shopLocation: "Nonthaburi",
        category: "Home"
    },
    {
        id: 16,
        name: "Smart Desk Lamp",
        price: 1490,
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&q=80",
        stock: 8,
        description: "Smart desk lamp with adjustable brightness and color temperature.",
        shopName: "HomeSmart Central",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Home"
    },
    // --- CAMERA ---
    {
        id: 17,
        name: "Mirrorless Camera",
        price: 45900,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        stock: 3,
        description: "High-resolution mirrorless camera for professional photography.",
        shopName: "Camera Pro Shop",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Camera"
    },
    {
        id: 18,
        name: "Compact Vlogging Camera",
        price: 24900,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",
        stock: 6,
        description: "Lightweight camera perfect for vlogging with 4K recording capabilities.",
        shopName: "Camera Pro Shop",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Camera"
    }
];
