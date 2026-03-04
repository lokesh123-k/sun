import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';
import { clientsAPI } from '../services/api';

/**
 * Clients Page
 * Displays client companies in a grid layout
 */
const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await clientsAPI.getAllClients();
        setClients(response.data.data || []);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  return (
    <>
      <SEOMeta 
        title="Clients" 
        description="Our valued clients - trusted by industry leaders across various sectors."
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Clients</h1>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Trusted by leading companies across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Active Clients' },
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '25+', label: 'Years of Service' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card p-8 hover:shadow-lg transition-shadow"
                >
                  {/* Client Logo Placeholder */}
                  <div className="w-20 h-20 bg-dark-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-primary-500">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">
                      {client.name}
                    </h3>
                    {client.industry && (
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                        {client.industry}
                      </span>
                    )}
                    {client.description && (
                      <p className="text-dark-500 mt-4 text-sm">
                        {client.description}
                      </p>
                    )}
                    {client.website && (
                      <a 
                        href={client.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary-500 text-sm mt-4 hover:text-primary-600"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {clients.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-dark-500">No clients to display at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Feedback from our valued clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Excellent quality and timely delivery. The team was professional throughout our project.",
                name: "John Smith",
                company: "ABC Industries"
              },
              {
                quote: "Their expertise in steel fabrication is unmatched. Highly recommended!",
                name: "Sarah Johnson",
                company: "XYZ Corporation"
              },
              {
                quote: "Outstanding service and communication. Will definitely work with them again.",
                name: "Michael Brown",
                company: "Global Engineering"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <svg className="w-10 h-10 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-dark-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-dark-900">{testimonial.name}</p>
                  <p className="text-dark-500 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become Our Client
            </h2>
            <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Contact us today to discuss your project.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Clients;
