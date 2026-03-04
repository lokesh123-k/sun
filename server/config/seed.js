/**
 * Seed Script
 * Populates the database with initial data for the website
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('../models/Service');
const Client = require('../models/Client');
const Product = require('../models/Product');
const Equipment = require('../models/Equipment');

// Sample data
const services = [
  {
    title: 'Steel Fabrication',
    description: 'Custom steel fabrication services for industrial and commercial projects. We handle projects of all sizes with precision and quality.',
    icon: 'Wrench',
    order: 1,
    isActive: true
  },
  {
    title: 'Mechanical Engineering',
    description: 'Professional mechanical engineering solutions including design, analysis, and implementation of mechanical systems.',
    icon: 'Cog',
    order: 2,
    isActive: true
  },
  {
    title: 'Welding Services',
    description: 'Certified welding services including MIG, TIG, and arc welding for various metals and applications.',
    icon: 'Fire',
    order: 3,
    isActive: true
  },
  {
    title: 'Structural Steel Work',
    description: 'Design and fabrication of structural steel components for buildings, bridges, and industrial structures.',
    icon: 'Building',
    order: 4,
    isActive: true
  },
  {
    title: 'CNC Machining',
    description: 'Precision CNC machining services for custom parts and components with tight tolerances.',
    icon: 'Settings',
    order: 5,
    isActive: true
  },
  {
    title: 'Maintenance & Repair',
    description: 'Comprehensive maintenance and repair services for industrial equipment and machinery.',
    icon: 'Tool',
    order: 6,
    isActive: true
  }
];

const clients = [
  {
    name: 'ABC Industries',
    industry: 'Manufacturing',
    order: 1,
    isActive: true
  },
  {
    name: 'XYZ Corporation',
    industry: 'Construction',
    order: 2,
    isActive: true
  },
  {
    name: 'Global Engineering',
    industry: 'Engineering',
    order: 3,
    isActive: true
  },
  {
    name: 'Tech Manufacturing Ltd',
    industry: 'Technology',
    order: 4,
    isActive: true
  },
  {
    name: 'BuildRight Construction',
    industry: 'Construction',
    order: 5,
    isActive: true
  },
  {
    name: 'Industrial Solutions Inc',
    industry: 'Industrial',
    order: 6,
    isActive: true
  }
];

const products = [
  {
    name: 'Steel Beams',
    category: 'Structural Steel',
    description: 'High-quality steel beams for construction and industrial applications. Available in various sizes and grades.',
    order: 1,
    isActive: true
  },
  {
    name: 'Steel Plates',
    category: 'Structural Steel',
    description: 'Durable steel plates for fabrication, construction, and manufacturing purposes.',
    order: 2,
    isActive: true
  },
  {
    name: 'Steel Pipes',
    category: 'Pipes & Tubes',
    description: 'Seamless and welded steel pipes for industrial fluid transport and structural applications.',
    order: 3,
    isActive: true
  },
  {
    name: 'Custom Fabrications',
    category: 'Custom Work',
    description: 'Bespoke steel fabrication services tailored to your specific project requirements.',
    order: 4,
    isActive: true
  },
  {
    name: 'Industrial Gates',
    category: 'Industrial Products',
    description: 'Heavy-duty industrial gates for factories, warehouses, and commercial properties.',
    order: 5,
    isActive: true
  },
  {
    name: 'Machined Parts',
    category: 'Machined Components',
    description: 'Precision machined parts manufactured to exact specifications and tolerances.',
    order: 6,
    isActive: true
  }
];

const equipments = [
  {
    name: 'CNC Plasma Cutting Machine',
    model: 'PPC-3000',
    manufacturer: 'Hypertherm',
    quantity: 2,
    specifications: 'Cutting capacity: 3000mm x 1500mm',
    category: 'Cutting',
    status: 'operational',
    order: 1,
    isActive: true
  },
  {
    name: 'CNC Lathe Machine',
    model: 'SL-250',
    manufacturer: ' Haas Automation',
    quantity: 3,
    specifications: 'Swing: 500mm, Distance between centers: 1500mm',
    category: 'Machining',
    status: 'operational',
    order: 2,
    isActive: true
  },
  {
    name: 'CNC Milling Machine',
    model: 'VF-4',
    manufacturer: ' Haas Automation',
    quantity: 2,
    specifications: 'X-axis: 1270mm, Y-axis: 660mm, Z-axis: 635mm',
    category: 'Machining',
    status: 'operational',
    order: 3,
    isActive: true
  },
  {
    name: 'Welding Robot',
    model: 'ARC MATE 120iD',
    manufacturer: 'FANUC',
    quantity: 4,
    specifications: '6-axis articulated robot, payload 25kg',
    category: 'Welding',
    status: 'operational',
    order: 4,
    isActive: true
  },
  {
    name: 'Press Brake',
    model: 'HFE 170-4',
    manufacturer: 'Amada',
    quantity: 1,
    specifications: 'Bending capacity: 170 tons, Bending length: 3200mm',
    category: 'Forming',
    status: 'operational',
    order: 5,
    isActive: true
  },
  {
    name: 'Forklift',
    model: 'FG25T-18',
    manufacturer: 'Toyota',
    quantity: 3,
    specifications: 'Lift capacity: 2500kg, Lift height: 4.5m',
    category: 'Material Handling',
    status: 'operational',
    order: 6,
    isActive: true
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/steel-fab-company';
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await Client.deleteMany({});
    await Product.deleteMany({});
    await Equipment.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Insert seed data
    await Service.insertMany(services);
    console.log('✅ Services seeded');

    await Client.insertMany(clients);
    console.log('✅ Clients seeded');

    await Product.insertMany(products);
    console.log('✅ Products seeded');

    await Equipment.insertMany(equipments);
    console.log('✅ Equipments seeded');

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
}

// Run seed
seedDatabase();
