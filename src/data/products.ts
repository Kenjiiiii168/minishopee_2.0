import type { Product } from '../types';

export const products: Product[] = [
    // --- AUDIO ---
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2990,
        originalPrice: 3990,
        discountPercent: 25,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
            "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&q=80"
        ],
        stock: 10,
        description: "Experience premium sound quality with these high-performance wireless headphones. Features active noise cancelling, 30-hour battery life, and premium comfort ear cushions.",
        shopName: "AudioBase Official",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Audio",
        rating: 4.7,
        reviewCount: 2847,
        soldCount: 12300,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        variants: {
            colors: ["Black", "White", "Silver"],
        },
        brand: "AudioBase",
        isFlashSale: true,
        flashSaleStock: 5,
        isPremium: true
    },
    {
        id: 9,
        name: "Bluetooth Earbuds Gold",
        price: 1590,
        originalPrice: 2290,
        discountPercent: 31,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
            "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80"
        ],
        stock: 25,
        description: "Compact wireless earbuds with crystal clear sound and 24-hour battery life. IPX5 water resistant.",
        shopName: "AudioBase Official",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Audio",
        rating: 4.6,
        reviewCount: 1893,
        soldCount: 8700,
        shipping: {
            fee: 35,
            location: "Bangkok"
        },
        variants: {
            colors: ["Gold", "Rose Gold", "Space Gray"],
        },
        brand: "AudioBase",
        isPremium: true
    },
    // --- ELECTRONICS ---
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 4500,
        originalPrice: 5900,
        discountPercent: 24,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
        ],
        stock: 5,
        description: "Professional mechanical keyboard with Cherry MX Blue switches. RGB backlight, aluminum frame, programmable keys.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Electronics",
        rating: 4.8,
        reviewCount: 1567,
        soldCount: 5600,
        shipping: {
            fee: 50,
            freeShippingMin: 1000,
            location: "Chiang Mai"
        },
        variants: {
            colors: ["Black", "White"],
        },
        brand: "GamerGear",
        isPremium: true
    },
    {
        id: 5,
        name: "Laptop Stand",
        price: 590,
        originalPrice: 890,
        discountPercent: 34,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        stock: 15,
        description: "Adjustable aluminum laptop stand. Ergonomic design improves posture and cooling.",
        shopName: "Office Essentials",
        shopRating: 4.5,
        shopLocation: "Nonthaburi",
        category: "Electronics",
        rating: 4.4,
        reviewCount: 892,
        soldCount: 4200,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Nonthaburi"
        },
        brand: "OfficeMax"
    },
    {
        id: 7,
        name: "4K Monitor",
        price: 12500,
        originalPrice: 15900,
        discountPercent: 21,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        stock: 2,
        description: "27-inch 4K UHD IPS monitor with HDR10. Perfect for gaming and creative work.",
        shopName: "Display Pro",
        shopRating: 4.6,
        shopLocation: "Bangkok",
        category: "Electronics",
        rating: 4.7,
        reviewCount: 456,
        soldCount: 1800,
        shipping: {
            fee: 100,
            freeShippingMin: 5000,
            location: "Bangkok"
        },
        brand: "ViewTech",
        isPremium: true
    },
    // --- GAMING ---
    {
        id: 3,
        name: "Gaming Mouse",
        price: 1290,
        originalPrice: 1790,
        discountPercent: 28,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
            "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=500&q=80"
        ],
        stock: 8,
        description: "Precision gaming mouse with 16000 DPI sensor. Programmable buttons and RGB lighting.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Gaming",
        rating: 4.8,
        reviewCount: 2134,
        soldCount: 9800,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Chiang Mai"
        },
        variants: {
            colors: ["Black", "White"],
        },
        brand: "GamerGear",
        isFlashSale: true,
        flashSaleStock: 3,
        isPremium: true
    },
    {
        id: 10,
        name: "Gaming Controller",
        price: 1990,
        originalPrice: 2590,
        discountPercent: 23,
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&q=80",
        stock: 12,
        description: "Responsive gaming controller with haptic feedback and custom triggers. Compatible with PC and consoles.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Gaming",
        rating: 4.7,
        reviewCount: 1678,
        soldCount: 7500,
        shipping: {
            fee: 40,
            location: "Chiang Mai"
        },
        variants: {
            colors: ["Black", "Blue", "Red"],
        },
        brand: "GamerGear"
    },
    // --- ACCESSORIES ---
    {
        id: 4,
        name: "Smart Watch",
        price: 8900,
        originalPrice: 12900,
        discountPercent: 31,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80"
        ],
        stock: 3,
        description: "Stay connected and healthy with this advanced smartwatch. Heart rate monitor, GPS, waterproof.",
        shopName: "TechLife Store",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Accessories",
        rating: 4.6,
        reviewCount: 3421,
        soldCount: 15200,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        variants: {
            colors: ["Black", "Silver", "Gold"],
            sizes: ["40mm", "44mm"]
        },
        brand: "TechLife",
        isPremium: true
    },
    {
        id: 11,
        name: "Leather Wallet",
        price: 850,
        originalPrice: 1290,
        discountPercent: 34,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        stock: 20,
        description: "Premium leather wallet with RFID protection and slim design. Holds up to 8 cards.",
        shopName: "Minimalist Style",
        shopRating: 4.6,
        shopLocation: "Bangkok",
        category: "Accessories",
        rating: 4.5,
        reviewCount: 567,
        soldCount: 3400,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        variants: {
            colors: ["Brown", "Black", "Navy"],
        },
        brand: "Minimalist"
    },
    // --- MOBILE ---
    {
        id: 12,
        name: "Smartphone Pro",
        price: 32900,
        originalPrice: 39900,
        discountPercent: 18,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80"
        ],
        stock: 5,
        description: "Latest flagship smartphone with advanced camera system and high-speed processor. 5G ready.",
        shopName: "MobileHub Official",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Mobile",
        rating: 4.9,
        reviewCount: 5678,
        soldCount: 23400,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        variants: {
            colors: ["Midnight", "Starlight", "Blue"],
            sizes: ["128GB", "256GB", "512GB"]
        },
        brand: "MobileHub",
        isPremium: true
    },
    {
        id: 13,
        name: "Power Bank 20000mAh",
        price: 1200,
        originalPrice: 1690,
        discountPercent: 29,
        image: "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=500&q=80",
        stock: 30,
        description: "High-capacity power bank with fast charging support. 2 USB ports and USB-C.",
        shopName: "MobileHub Official",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Mobile",
        rating: 4.7,
        reviewCount: 4321,
        soldCount: 18900,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "MobileHub",
        isFlashSale: true,
        flashSaleStock: 10
    },
    // --- FASHION ---
    {
        id: 14,
        name: "Premium Sneaker",
        price: 3500,
        originalPrice: 4900,
        discountPercent: 29,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80"
        ],
        stock: 10,
        description: "Limited edition sneakers with premium comfort and stylish design. Breathable material.",
        shopName: "Footwear King",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Fashion",
        rating: 4.6,
        reviewCount: 2134,
        soldCount: 8900,
        shipping: {
            fee: 50,
            freeShippingMin: 1000,
            location: "Bangkok"
        },
        variants: {
            colors: ["White", "Black", "Red"],
            sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
        },
        brand: "Footwear"
    },
    {
        id: 15,
        name: "Classic Denim Jacket",
        price: 2200,
        originalPrice: 3200,
        discountPercent: 31,
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500&q=80",
        stock: 15,
        description: "Heavyweight denim jacket with a classic fit. Perfect for all seasons.",
        shopName: "Streetwear Co.",
        shopRating: 4.5,
        shopLocation: "Bangkok",
        category: "Fashion",
        rating: 4.4,
        reviewCount: 789,
        soldCount: 3200,
        shipping: {
            fee: 40,
            location: "Bangkok"
        },
        variants: {
            colors: ["Blue", "Black"],
            sizes: ["S", "M", "L", "XL"]
        },
        brand: "Streetwear"
    },
    // --- HOME ---
    {
        id: 8,
        name: "Ergonomic Chair",
        price: 8500,
        originalPrice: 12000,
        discountPercent: 29,
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
        stock: 0,
        description: "High-back ergonomic office chair with breathable mesh. Adjustable height and armrests.",
        shopName: "Office Essentials",
        shopRating: 4.5,
        shopLocation: "Nonthaburi",
        category: "Home",
        rating: 4.6,
        reviewCount: 1234,
        soldCount: 5600,
        shipping: {
            fee: 150,
            freeShippingMin: 5000,
            location: "Nonthaburi"
        },
        brand: "OfficeMax"
    },
    {
        id: 16,
        name: "Smart Desk Lamp",
        price: 1490,
        originalPrice: 1990,
        discountPercent: 25,
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&q=80",
        stock: 8,
        description: "Smart desk lamp with adjustable brightness and color temperature. USB charging port included.",
        shopName: "HomeSmart Central",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Home",
        rating: 4.7,
        reviewCount: 1567,
        soldCount: 6700,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "HomeSmart",
        isPremium: true
    },
    // --- CAMERA ---
    {
        id: 17,
        name: "Mirrorless Camera",
        price: 45900,
        originalPrice: 54900,
        discountPercent: 16,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80"
        ],
        stock: 3,
        description: "High-resolution mirrorless camera for professional photography. 24MP sensor, 4K video.",
        shopName: "Camera Pro Shop",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Camera",
        rating: 4.9,
        reviewCount: 892,
        soldCount: 2100,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "CameraPro",
        isPremium: true
    },
    {
        id: 18,
        name: "Compact Vlogging Camera",
        price: 24900,
        originalPrice: 29900,
        discountPercent: 17,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",
        stock: 6,
        description: "Lightweight camera perfect for vlogging with 4K recording capabilities. Flip screen and image stabilization.",
        shopName: "Camera Pro Shop",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Camera",
        rating: 4.8,
        reviewCount: 1456,
        soldCount: 5400,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "CameraPro",
        isPremium: true
    },
    // --- ADDITIONAL PRODUCTS ---
    // AUDIO
    {
        id: 19,
        name: "Studio Monitor Speakers",
        price: 6900,
        originalPrice: 8900,
        discountPercent: 22,
        image: "https://images.unsplash.com/photo-1594437433893-b196f3d4405d?w=500&q=80",
        stock: 8,
        description: "Professional studio monitor speakers with accurate sound reproduction. Perfect for music production.",
        shopName: "AudioBase Official",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Audio",
        rating: 4.7,
        reviewCount: 678,
        soldCount: 2100,
        shipping: {
            fee: 80,
            freeShippingMin: 5000,
            location: "Bangkok"
        },
        brand: "AudioBase",
        isPremium: true
    },
    {
        id: 20,
        name: "USB Microphone",
        price: 2490,
        originalPrice: 3490,
        discountPercent: 29,
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80",
        stock: 18,
        description: "Professional USB microphone for podcasting and streaming. Plug and play with cardioid pattern.",
        shopName: "AudioBase Official",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Audio",
        rating: 4.6,
        reviewCount: 1234,
        soldCount: 4500,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "AudioBase"
    },
    // ELECTRONICS
    {
        id: 21,
        name: "Wireless Mouse",
        price: 450,
        originalPrice: 690,
        discountPercent: 35,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
        stock: 45,
        description: "Compact wireless mouse with silent clicks. Long battery life up to 12 months.",
        shopName: "Office Essentials",
        shopRating: 4.5,
        shopLocation: "Nonthaburi",
        category: "Electronics",
        rating: 4.3,
        reviewCount: 2341,
        soldCount: 11200,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Nonthaburi"
        },
        brand: "OfficeMax",
        isFlashSale: true,
        flashSaleStock: 15
    },
    {
        id: 22,
        name: "USB-C Hub 7-in-1",
        price: 890,
        originalPrice: 1290,
        discountPercent: 31,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
        stock: 22,
        description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader. Perfect for laptops.",
        shopName: "TechLife Store",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Electronics",
        rating: 4.5,
        reviewCount: 567,
        soldCount: 3200,
        shipping: {
            fee: 35,
            location: "Bangkok"
        },
        brand: "TechLife"
    },
    {
        id: 23,
        name: "Webcam Full HD 1080p",
        price: 1690,
        originalPrice: 2290,
        discountPercent: 26,
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&q=80",
        stock: 12,
        description: "Full HD 1080p webcam with auto-focus and built-in microphone. Perfect for video calls.",
        shopName: "TechLife Store",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Electronics",
        rating: 4.6,
        reviewCount: 892,
        soldCount: 5100,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "TechLife"
    },
    // GAMING
    {
        id: 24,
        name: "Gaming Headset RGB",
        price: 1890,
        originalPrice: 2590,
        discountPercent: 27,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&q=80",
        stock: 15,
        description: "Gaming headset with 7.1 surround sound and RGB lighting. Comfortable for long sessions.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Gaming",
        rating: 4.7,
        reviewCount: 1678,
        soldCount: 6800,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Chiang Mai"
        },
        variants: {
            colors: ["Black", "Red", "Blue"]
        },
        brand: "GamerGear",
        isPremium: true
    },
    {
        id: 25,
        name: "Gaming Chair Ergonomic",
        price: 5900,
        originalPrice: 8900,
        discountPercent: 34,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&q=80",
        stock: 6,
        description: "Ergonomic gaming chair with lumbar support and adjustable armrests. Supports up to 150kg.",
        shopName: "GamerGear TH",
        shopRating: 4.9,
        shopLocation: "Chiang Mai",
        category: "Gaming",
        rating: 4.8,
        reviewCount: 934,
        soldCount: 2800,
        shipping: {
            fee: 200,
            freeShippingMin: 5000,
            location: "Chiang Mai"
        },
        variants: {
            colors: ["Black/Red", "Black/Blue", "All Black"]
        },
        brand: "GamerGear"
    },
    // ACCESSORIES
    {
        id: 26,
        name: "Wireless Charger 15W",
        price: 690,
        originalPrice: 990,
        discountPercent: 30,
        image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=500&q=80",
        stock: 35,
        description: "Fast wireless charger 15W compatible with all Qi devices. LED indicator included.",
        shopName: "MobileHub Official",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Accessories",
        rating: 4.5,
        reviewCount: 2145,
        soldCount: 8900,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "MobileHub"
    },
    {
        id: 27,
        name: "Phone Case Silicone",
        price: 290,
        originalPrice: 490,
        discountPercent: 41,
        image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&q=80",
        stock: 100,
        description: "Premium silicone phone case with shock absorption. Soft touch finish.",
        shopName: "Minimalist Style",
        shopRating: 4.6,
        shopLocation: "Bangkok",
        category: "Accessories",
        rating: 4.4,
        reviewCount: 3421,
        soldCount: 15600,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        variants: {
            colors: ["Black", "White", "Blue", "Pink", "Green"]
        },
        brand: "Minimalist",
        isFlashSale: true,
        flashSaleStock: 30
    },
    {
        id: 28,
        name: "Backpack Laptop 15.6\"",
        price: 1290,
        originalPrice: 1890,
        discountPercent: 32,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        stock: 18,
        description: "Water-resistant laptop backpack with multiple compartments. USB charging port included.",
        shopName: "Minimalist Style",
        shopRating: 4.6,
        shopLocation: "Bangkok",
        category: "Accessories",
        rating: 4.6,
        reviewCount: 1234,
        soldCount: 5700,
        shipping: {
            fee: 50,
            location: "Bangkok"
        },
        variants: {
            colors: ["Black", "Gray", "Navy"]
        },
        brand: "Minimalist"
    },
    // MOBILE
    {
        id: 29,
        name: "Phone Screen Protector",
        price: 190,
        originalPrice: 350,
        discountPercent: 46,
        image: "https://images.unsplash.com/photo-1582265074212-0761e24749f1?w=500&q=80",
        stock: 150,
        description: "Tempered glass screen protector 9H hardness. Anti-fingerprint coating.",
        shopName: "MobileHub Official",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Mobile",
        rating: 4.3,
        reviewCount: 5678,
        soldCount: 23400,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "MobileHub"
    },
    {
        id: 30,
        name: "Car Phone Holder",
        price: 350,
        originalPrice: 590,
        discountPercent: 41,
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80",
        stock: 42,
        description: "Magnetic car phone holder for air vent. 360-degree rotation.",
        shopName: "MobileHub Official",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Mobile",
        rating: 4.5,
        reviewCount: 1987,
        soldCount: 9300,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "MobileHub",
        isFlashSale: true,
        flashSaleStock: 20
    },
    // FASHION
    {
        id: 31,
        name: "Baseball Cap",
        price: 490,
        originalPrice: 790,
        discountPercent: 38,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80",
        stock: 55,
        description: "Adjustable baseball cap with embroidered logo. Cotton material, breathable.",
        shopName: "Streetwear Co.",
        shopRating: 4.5,
        shopLocation: "Bangkok",
        category: "Fashion",
        rating: 4.4,
        reviewCount: 876,
        soldCount: 4200,
        shipping: {
            fee: 30,
            location: "Bangkok"
        },
        variants: {
            colors: ["Black", "White", "Navy", "Khaki"]
        },
        brand: "Streetwear"
    },
    {
        id: 32,
        name: "Sports Tank Top",
        price: 390,
        originalPrice: 690,
        discountPercent: 43,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
        stock: 80,
        description: "Breathable sports tank top with moisture-wicking fabric. Perfect for gym and running.",
        shopName: "Footwear King",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Fashion",
        rating: 4.5,
        reviewCount: 1543,
        soldCount: 7800,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        variants: {
            colors: ["Black", "White", "Gray", "Blue"],
            sizes: ["S", "M", "L", "XL"]
        },
        brand: "Footwear"
    },
    {
        id: 33,
        name: "Running Shorts",
        price: 590,
        originalPrice: 890,
        discountPercent: 34,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80",
        stock: 65,
        description: "Lightweight running shorts with inner liner. Quick-dry fabric with zippered pocket.",
        shopName: "Footwear King",
        shopRating: 4.7,
        shopLocation: "Bangkok",
        category: "Fashion",
        rating: 4.6,
        reviewCount: 987,
        soldCount: 5400,
        shipping: {
            fee: 35,
            location: "Bangkok"
        },
        variants: {
            colors: ["Black", "Navy", "Red"],
            sizes: ["S", "M", "L", "XL"]
        },
        brand: "Footwear"
    },
    // HOME
    {
        id: 34,
        name: "LED String Lights",
        price: 490,
        originalPrice: 790,
        discountPercent: 38,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80",
        stock: 40,
        description: "10-meter LED string lights with warm white glow. USB powered, perfect for room decoration.",
        shopName: "HomeSmart Central",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Home",
        rating: 4.7,
        reviewCount: 2134,
        soldCount: 8900,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "HomeSmart"
    },
    {
        id: 35,
        name: "Aroma Diffuser",
        price: 890,
        originalPrice: 1290,
        discountPercent: 31,
        image: "https://images.unsplash.com/photo-1616137158752-df2189d5fdef?w=500&q=80",
        stock: 25,
        description: "Ultrasonic aroma diffuser with LED lights. 300ml capacity, auto shut-off.",
        shopName: "HomeSmart Central",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Home",
        rating: 4.6,
        reviewCount: 1876,
        soldCount: 6700,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "HomeSmart"
    },
    {
        id: 36,
        name: "Decorative Pillow Set",
        price: 690,
        originalPrice: 990,
        discountPercent: 30,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80",
        stock: 30,
        description: "Set of 2 decorative throw pillows with soft covers. 45x45cm, removable and washable.",
        shopName: "HomeSmart Central",
        shopRating: 4.8,
        shopLocation: "Bangkok",
        category: "Home",
        rating: 4.5,
        reviewCount: 756,
        soldCount: 3400,
        shipping: {
            fee: 50,
            location: "Bangkok"
        },
        variants: {
            colors: ["Gray", "Beige", "Navy", "Pink"]
        },
        brand: "HomeSmart"
    },
    // CAMERA
    {
        id: 37,
        name: "Camera Tripod",
        price: 1290,
        originalPrice: 1890,
        discountPercent: 32,
        image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=500&q=80",
        stock: 14,
        description: "Aluminum camera tripod with 3-way head. Extends up to 165cm, supports 5kg.",
        shopName: "Camera Pro Shop",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Camera",
        rating: 4.6,
        reviewCount: 543,
        soldCount: 2800,
        shipping: {
            fee: 60,
            location: "Bangkok"
        },
        brand: "CameraPro"
    },
    {
        id: 38,
        name: "Camera Bag",
        price: 990,
        originalPrice: 1490,
        discountPercent: 34,
        image: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&q=80",
        stock: 20,
        description: "Padded camera bag with adjustable dividers. Fits DSLR + 2 lenses and accessories.",
        shopName: "Camera Pro Shop",
        shopRating: 4.9,
        shopLocation: "Bangkok",
        category: "Camera",
        rating: 4.7,
        reviewCount: 678,
        soldCount: 3200,
        shipping: {
            fee: 0,
            freeShippingMin: 299,
            location: "Bangkok"
        },
        brand: "CameraPro"
    }
];
