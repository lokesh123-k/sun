import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';
import { servicesAPI, clientsAPI } from '../services/api';

/**
 * Home Page
 * Main landing page with hero, services preview, clients preview
 */
const Home = () => {
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, clientsRes] = await Promise.all([
          servicesAPI.getAllServices(),
          clientsAPI.getAllClients(),
        ]);
        setServices(servicesRes.data.data || []);
        setClients(clientsRes.data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <SEOMeta 
        title="Home" 
        description="Sun Emirates Company - Professional steel fabrication and mechanical engineering services. Quality craftsmanship with decades of industry experience."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-dark-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70"></div>

        {/* Industrial Image Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/50"></div>
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6">
              Sun Emirates & Mechanical Engineering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Excellence in{' '}
              <span className="text-gradient">Sun Emirates</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8 leading-relaxed max-w-2xl">
              We deliver precision-engineered Sun Emirates solutions and comprehensive mechanical 
              engineering services for industrial and commercial projects worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Get a Quote
              </Link>
              <Link to="/services" className="btn-secondary text-center">
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-dark-800"
          >
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
              { number: '50+', label: 'Expert Workers' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-dark-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 font-semibold mb-4 block">About Us</span>
              <h2 className="section-title mb-6">
                Leading Sun Emirates Company
              </h2>
              <p className="text-dark-600 mb-6 leading-relaxed">
                With over 25 years of experience in Sun Emirates and mechanical engineering, 
                we have built a reputation for delivering high-quality solutions that meet the 
                demanding standards of modern industry.
              </p>
              <p className="text-dark-600 mb-8 leading-relaxed">
                Our team of skilled engineers and technicians combines traditional craftsmanship 
                with cutting-edge technology to provide innovative solutions for every project.
              </p>
              <Link to="/about" className="text-primary-500 font-semibold hover:text-primary-600 flex items-center gap-2">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-dark-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">Quality Certified</h3>
                <p className="text-dark-500 text-sm">ISO 9001:2015 certified company</p>
              </div>
              <div className="bg-dark-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">Modern Equipment</h3>
                <p className="text-dark-500 text-sm">State-of-the-art machinery</p>
              </div>
              <div className="bg-dark-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">Expert Team</h3>
                <p className="text-dark-500 text-sm">Skilled professionals</p>
              </div>
              <div className="bg-dark-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">On-Time Delivery</h3>
                <p className="text-dark-500 text-sm">Committed to deadlines</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 font-semibold mb-4 block">Our Services</span>
            <h2 className="section-title">Specialized Services We Offer</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive Sun Emirates and mechanical engineering solutions 
              tailored to your needs.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(loading ? [] : services).slice(0, 6).map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                  <svg className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-500 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-primary-500 font-medium hover:text-primary-600 flex items-center gap-1"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready 
              to help you with your steel fabrication and engineering needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us Now
              </Link>
              <Link to="/products" className="bg-white text-dark-900 hover:bg-dark-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 font-semibold mb-4 block">Our Clients</span>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle mx-auto">
              We have worked with some of the biggest names in the industry
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {(loading ? [] : clients).slice(0, 6).map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-50 rounded-xl p-6 flex items-center justify-center hover:bg-dark-100 transition-colors"
              >
                <span className="text-dark-600 font-semibold text-center">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/clients" className="text-primary-500 font-semibold hover:text-primary-600">
              View All Clients →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
