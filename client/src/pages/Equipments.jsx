import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';
import { equipmentsAPI } from '../services/api';

/**
 * Equipments Page
 * Displays equipment list in a table format
 */
const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await equipmentsAPI.getAllEquipments();
        setEquipments(response.data.data || []);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEquipments();
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(equipments.map(e => e.category).filter(Boolean))];

  // Filter equipments
  const filteredEquipments = filterCategory === 'all'
    ? equipments
    : equipments.filter(e => e.category === filterCategory);

  // Status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-700';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-700';
      case 'under-repair':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      <SEOMeta 
        title="Equipments" 
        description="View our state-of-the-art equipment and machinery for steel fabrication and mechanical engineering."
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Equipment</h1>
            <p className="text-dark-300 max-w-2xl mx-auto">
              State-of-the-art machinery and equipment for precision fabrication
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Stats */}
      <section className="py-12 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '⚙️', label: 'Total Machines', value: equipments.length },
              { icon: '🔧', label: 'CNC Machines', value: equipments.filter(e => e.category === 'Machining').length },
              { icon: '🔥', label: 'Welding Units', value: equipments.filter(e => e.category === 'Welding').length },
              { icon: '🏭', label: 'Categories', value: categories.length - 1 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-700 rounded-xl p-6 text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Table Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filterCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-100 text-dark-600 hover:bg-primary-100 hover:text-primary-500'
                }`}
              >
                {category === 'all' ? 'All Equipment' : category}
              </button>
            ))}
          </div>

          {/* Equipment Table */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900">Equipment Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900">Manufacturer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-100">
                  {filteredEquipments.map((equipment, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-dark-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                          </div>
                          <span className="font-medium text-dark-900">{equipment.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-dark-600">{equipment.model || '-'}</td>
                      <td className="px-6 py-4 text-dark-600">{equipment.manufacturer || '-'}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-dark-100 text-dark-600 rounded-full text-sm">
                          {equipment.category || 'General'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-dark-600">{equipment.quantity || 1}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(equipment.status)}`}>
                          {equipment.status || 'Operational'}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filteredEquipments.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-dark-500">No equipment found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Equipment Features */}
      <section className="py-20 bg-dark-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Equipment Capabilities</h2>
            <p className="section-subtitle mx-auto">
              Modern machinery for precision fabrication and manufacturing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'CNC Machining',
                description: 'High-precision CNC milling and turning centers for complex parts.',
                icon: '🎯'
              },
              {
                title: 'Plasma Cutting',
                description: 'Advanced plasma cutting systems for precise steel cutting.',
                icon: '✂️'
              },
              {
                title: 'Welding',
                description: 'Robotic and manual welding stations for various applications.',
                icon: '🔥'
              },
              {
                title: 'Forming',
                description: 'Press brakes and forming equipment for custom shapes.',
                icon: '📐'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{feature.title}</h3>
                <p className="text-dark-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipments;
