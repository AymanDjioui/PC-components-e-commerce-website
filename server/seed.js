require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');

connectDB();

const products = [
  {
    name: 'AMD Ryzen 9 7950X',
    description: '16-Core, 32-Thread Unlocked Desktop Processor with AMD 3D V-Cache Technology',
    price: 699.99,
    category: 'CPU',
    brand: 'AMD',
    stock: 25,
    images: ['https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500'],
    specifications: new Map([
      ['Cores', '16'],
      ['Threads', '32'],
      ['Base Clock', '4.5 GHz'],
      ['Boost Clock', '5.7 GHz'],
      ['TDP', '170W'],
      ['Socket', 'AM5']
    ]),
    ratings: { average: 4.8, count: 0 }
  },
  {
    name: 'Intel Core i9-13900K',
    description: '24-Core (8P+16E) Desktop Processor with Integrated Graphics',
    price: 589.99,
    category: 'CPU',
    brand: 'Intel',
    stock: 30,
    images: ['https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500'],
    specifications: new Map([
      ['Cores', '24'],
      ['Threads', '32'],
      ['Base Clock', '3.0 GHz'],
      ['Boost Clock', '5.8 GHz'],
      ['TDP', '125W'],
      ['Socket', 'LGA1700']
    ]),
    ratings: { average: 4.7, count: 0 }
  },
  {
    name: 'NVIDIA GeForce RTX 4090',
    description: 'Graphics Card with 24GB GDDR6X Memory, Ada Lovelace Architecture',
    price: 1599.99,
    category: 'GPU',
    brand: 'NVIDIA',
    stock: 15,
    images: ['https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500'],
    specifications: new Map([
      ['Memory', '24GB GDDR6X'],
      ['CUDA Cores', '16384'],
      ['Boost Clock', '2.52 GHz'],
      ['TDP', '450W'],
      ['Interface', 'PCIe 4.0 x16']
    ]),
    ratings: { average: 4.9, count: 0 }
  },
  {
    name: 'AMD Radeon RX 7900 XTX',
    description: '24GB GDDR6 Gaming Graphics Card with RDNA 3 Architecture',
    price: 999.99,
    category: 'GPU',
    brand: 'AMD',
    stock: 20,
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500'],
    specifications: new Map([
      ['Memory', '24GB GDDR6'],
      ['Stream Processors', '6144'],
      ['Game Clock', '2.3 GHz'],
      ['TDP', '355W'],
      ['Interface', 'PCIe 4.0 x16']
    ]),
    ratings: { average: 4.6, count: 0 }
  },
  {
    name: 'Corsair Vengeance DDR5 RAM 32GB',
    description: 'DDR5 6000MHz C36 Desktop Memory Kit - Black (2x16GB)',
    price: 159.99,
    category: 'RAM',
    brand: 'Corsair',
    stock: 50,
    images: ['https://images.unsplash.com/photo-1541405387734-d0b6a5e49d7d?w=500'],
    specifications: new Map([
      ['Capacity', '32GB (2x16GB)'],
      ['Speed', '6000MHz'],
      ['Latency', 'CL36'],
      ['Voltage', '1.35V'],
      ['Type', 'DDR5']
    ]),
    ratings: { average: 4.7, count: 0 }
  },
  {
    name: 'G.Skill Trident Z5 RGB 64GB',
    description: 'DDR5 6400MHz C32 Desktop Memory Kit (2x32GB) with RGB Lighting',
    price: 279.99,
    category: 'RAM',
    brand: 'G.Skill',
    stock: 35,
    images: ['https://images.unsplash.com/photo-1562976540-1502c2145186?w=500'],
    specifications: new Map([
      ['Capacity', '64GB (2x32GB)'],
      ['Speed', '6400MHz'],
      ['Latency', 'CL32'],
      ['Voltage', '1.4V'],
      ['Type', 'DDR5']
    ]),
    ratings: { average: 4.8, count: 0 }
  },
  {
    name: 'ASUS ROG Strix Z790-E',
    description: 'Gaming WiFi 6E LGA 1700 ATX Motherboard with PCIe 5.0',
    price: 449.99,
    category: 'Motherboard',
    brand: 'ASUS',
    stock: 20,
    images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'],
    specifications: new Map([
      ['Socket', 'LGA1700'],
      ['Chipset', 'Z790'],
      ['Form Factor', 'ATX'],
      ['Memory', 'DDR5'],
      ['PCIe Slots', '4']
    ]),
    ratings: { average: 4.7, count: 0 }
  },
  {
    name: 'MSI MAG X670E TOMAHAWK',
    description: 'WiFi Gaming Motherboard (AMD AM5, DDR5, PCIe 5.0)',
    price: 399.99,
    category: 'Motherboard',
    brand: 'MSI',
    stock: 18,
    images: ['https://images.unsplash.com/photo-1563643142-2fc0ba3f9b2f?w=500'],
    specifications: new Map([
      ['Socket', 'AM5'],
      ['Chipset', 'X670E'],
      ['Form Factor', 'ATX'],
      ['Memory', 'DDR5'],
      ['PCIe Slots', '3']
    ]),
    ratings: { average: 4.6, count: 0 }
  },
  {
    name: 'Samsung 990 PRO 2TB',
    description: 'PCIe 4.0 NVMe M.2 SSD with Heat Sink, Up to 7,450 MB/s',
    price: 189.99,
    category: 'Storage',
    brand: 'Samsung',
    stock: 40,
    images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500'],
    specifications: new Map([
      ['Capacity', '2TB'],
      ['Interface', 'PCIe 4.0 x4'],
      ['Form Factor', 'M.2 2280'],
      ['Read Speed', '7,450 MB/s'],
      ['Write Speed', '6,900 MB/s']
    ]),
    ratings: { average: 4.9, count: 0 }
  },
  {
    name: 'WD Black SN850X 4TB',
    description: 'NVMe Internal Gaming SSD with PCIe Gen4 Technology',
    price: 349.99,
    category: 'Storage',
    brand: 'Western Digital',
    stock: 25,
    images: ['https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500'],
    specifications: new Map([
      ['Capacity', '4TB'],
      ['Interface', 'PCIe 4.0 x4'],
      ['Form Factor', 'M.2 2280'],
      ['Read Speed', '7,300 MB/s'],
      ['Write Speed', '6,600 MB/s']
    ]),
    ratings: { average: 4.8, count: 0 }
  },
  {
    name: 'Crucial P3 Plus 1TB',
    description: 'PCIe 4.0 3D NAND NVMe M.2 SSD, up to 5000MB/s',
    price: 79.99,
    category: 'Storage',
    brand: 'Crucial',
    stock: 60,
    images: ['https://images.unsplash.com/photo-1590791772308-9e47f70b423d?w=500'],
    specifications: new Map([
      ['Capacity', '1TB'],
      ['Interface', 'PCIe 4.0 x4'],
      ['Form Factor', 'M.2 2280'],
      ['Read Speed', '5,000 MB/s'],
      ['Write Speed', '4,200 MB/s']
    ]),
    ratings: { average: 4.5, count: 0 }
  },
  {
    name: 'Corsair RM1000x',
    description: '1000W 80 PLUS Gold Fully Modular ATX Power Supply',
    price: 189.99,
    category: 'PSU',
    brand: 'Corsair',
    stock: 30,
    images: ['https://images.unsplash.com/photo-1580869688107-72359894d52f?w=500'],
    specifications: new Map([
      ['Wattage', '1000W'],
      ['Efficiency', '80 PLUS Gold'],
      ['Modular', 'Fully Modular'],
      ['Form Factor', 'ATX'],
      ['Fan Size', '135mm']
    ]),
    ratings: { average: 4.8, count: 0 }
  },
  {
    name: 'EVGA SuperNOVA 850 GT',
    description: '850W 80 Plus Gold Fully Modular Power Supply',
    price: 139.99,
    category: 'PSU',
    brand: 'EVGA',
    stock: 35,
    images: ['https://images.unsplash.com/photo-1609630882312-5d9196c974a9?w=500'],
    specifications: new Map([
      ['Wattage', '850W'],
      ['Efficiency', '80 PLUS Gold'],
      ['Modular', 'Fully Modular'],
      ['Form Factor', 'ATX'],
      ['Fan Size', '135mm']
    ]),
    ratings: { average: 4.7, count: 0 }
  },
  {
    name: 'NZXT H7 Flow',
    description: 'Mid-Tower PC Gaming Case with High Airflow Design',
    price: 139.99,
    category: 'Case',
    brand: 'NZXT',
    stock: 25,
    images: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500'],
    specifications: new Map([
      ['Form Factor', 'Mid Tower'],
      ['Motherboard Support', 'ATX, Micro-ATX, Mini-ITX'],
      ['Front I/O', 'USB-C, USB 3.2'],
      ['Max GPU Length', '400mm'],
      ['Fan Support', '7x 120mm']
    ]),
    ratings: { average: 4.6, count: 0 }
  },
  {
    name: 'Lian Li O11 Dynamic EVO',
    description: 'Mid-Tower Dual Chamber PC Case with Tempered Glass',
    price: 169.99,
    category: 'Case',
    brand: 'Lian Li',
    stock: 20,
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500'],
    specifications: new Map([
      ['Form Factor', 'Mid Tower'],
      ['Motherboard Support', 'E-ATX, ATX, Micro-ATX, Mini-ITX'],
      ['Front I/O', 'USB-C, USB 3.0'],
      ['Max GPU Length', '420mm'],
      ['Fan Support', '9x 120mm']
    ]),
    ratings: { average: 4.9, count: 0 }
  },
  {
    name: 'Noctua NH-D15',
    description: 'Premium CPU Cooler with Dual Tower Heatsink and 2 Fans',
    price: 109.99,
    category: 'Cooling',
    brand: 'Noctua',
    stock: 40,
    images: ['https://images.unsplash.com/photo-1571682000641-e51c04dca2c0?w=500'],
    specifications: new Map([
      ['Type', 'Air Cooler'],
      ['Fan Size', '2x 140mm'],
      ['Height', '165mm'],
      ['TDP', '250W'],
      ['Socket Support', 'AM4, AM5, LGA1700']
    ]),
    ratings: { average: 4.9, count: 0 }
  },
  {
    name: 'Corsair iCUE H150i ELITE',
    description: 'RGB Liquid CPU Cooler with 360mm Radiator',
    price: 199.99,
    category: 'Cooling',
    brand: 'Corsair',
    stock: 30,
    images: ['https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500'],
    specifications: new Map([
      ['Type', 'AIO Liquid Cooler'],
      ['Radiator Size', '360mm'],
      ['Fan Size', '3x 120mm'],
      ['RGB', 'Yes'],
      ['Socket Support', 'AM4, AM5, LGA1700']
    ]),
    ratings: { average: 4.7, count: 0 }
  },
  {
    name: 'Logitech G Pro X Superlight',
    description: 'Wireless Gaming Mouse with HERO 25K Sensor',
    price: 159.99,
    category: 'Peripherals',
    brand: 'Logitech',
    stock: 50,
    images: ['https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'],
    specifications: new Map([
      ['Type', 'Wireless Gaming Mouse'],
      ['Sensor', 'HERO 25K'],
      ['DPI', 'Up to 25,600'],
      ['Weight', '63g'],
      ['Battery Life', '70 hours']
    ]),
    ratings: { average: 4.8, count: 0 }
  },
  {
    name: 'Razer BlackWidow V4 Pro',
    description: 'Mechanical Gaming Keyboard with Green Switches and RGB',
    price: 229.99,
    category: 'Peripherals',
    brand: 'Razer',
    stock: 35,
    images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?w=500'],
    specifications: new Map([
      ['Type', 'Mechanical Gaming Keyboard'],
      ['Switch Type', 'Green Mechanical'],
      ['RGB', 'Per-Key RGB'],
      ['Connectivity', 'Wired USB'],
      ['Media Keys', 'Yes']
    ]),
    ratings: { average: 4.6, count: 0 }
  },
  {
    name: 'SteelSeries Arctis Nova Pro',
    description: 'Premium Wireless Gaming Headset with Active Noise Cancellation',
    price: 349.99,
    category: 'Peripherals',
    brand: 'SteelSeries',
    stock: 25,
    images: ['https://images.unsplash.com/photo-1599669454699-248893623440?w=500'],
    specifications: new Map([
      ['Type', 'Wireless Gaming Headset'],
      ['Driver', '40mm'],
      ['Battery Life', '44 hours'],
      ['ANC', 'Yes'],
      ['Connection', '2.4GHz Wireless']
    ]),
    ratings: { average: 4.7, count: 0 }
  }
];

const users = [
  {
    name: 'Admin User',
    email: 'admin@pcshop.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user'
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);
    await Product.insertMany(products);

    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
