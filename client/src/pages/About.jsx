import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

/**
 * About Page
 * Company history, vision/mission, and company details
 */
const About = () => {
  const timeline = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'Started as a small fabrication workshop with a vision for quality.'
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Moved to larger facility and added modern equipment.'
    },
    {
      year: '2010',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management.'
    },
    {
      year: '2015',
      title: 'Growth',
      description: 'Expanded services to include mechanical engineering.'
    },
    {
      year: '2020',
      title: 'Modernization',
      description: 'Invested in latest CNC and automation technology.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as one of the leading fabrication companies in the region.'
    }
  ];

  const values = [
    {
      title: 'Quality',
      description: 'Uncompromising commitment to quality in everything we do.',
      icon: '⭐'
    },
    {
      title: 'Safety',
      description: 'Highest safety standards for our team and clients.',
      icon: '🛡️'
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement and adoption of new technologies.',
      icon: '💡'
    },
    {
      title: 'Reliability',
      description: 'Consistent delivery on time, every time.',
      icon: '🤝'
    }
  ];

  return (
    <>
      <SEOMeta 
        title="About Us" 
        description="Learn about our company history, vision, mission, and commitment to quality in steel fabrication."
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Building excellence in steel fabrication since 1998
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-semibold mb-4 block">Who We Are</span>
              <h2 className="section-title mb-6">
                Leading Steel Fabrication & Mechanical Engineering Company
              </h2>
              <div className="space-y-4 text-dark-600 leading-relaxed">
                <p>
                  Steel Fab Co. is a premier provider of steel fabrication and mechanical 
                  engineering services. Since our founding in 1998, we have built a 
                  reputation for excellence, delivering high-quality solutions that meet 
                  the demanding standards of modern industry.
                </p>
                <p>
                  Our team of skilled engineers, technicians, and craftsmen combine 
                  traditional craftsmanship with cutting-edge technology to provide 
                  innovative solutions for every project. From concept to completion, 
                  we work closely with our clients to ensure their vision becomes reality.
                </p>
                <p>
                  With state-of-the-art facilities and a commitment to continuous 
                  improvement, we have grown to become one of the most trusted names 
                  in the steel fabrication industry.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-dark-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">25+</div>
                <div className="text-dark-600">Years Experience</div>
              </div>
              <div className="bg-dark-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
                <div className="text-dark-600">Projects Completed</div>
              </div>
              <div className="bg-dark-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">100+</div>
                <div className="text-dark-600">Happy Clients</div>
              </div>
              <div className="bg-dark-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
                <div className="text-dark-600">Expert Workers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-dark-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Vision</h3>
              <p className="text-dark-600 leading-relaxed">
                To be the most trusted and preferred partner for steel fabrication and 
                mechanical engineering solutions, known for innovation, quality, and 
                commitment to client success.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Mission</h3>
              <p className="text-dark-600 leading-relaxed">
                To deliver exceptional steel fabrication and engineering services that 
                exceed client expectations, while maintaining the highest standards of 
                quality, safety, and professionalism in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle mx-auto">
              Key milestones in our company's growth and development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-dark-200 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 md:pr-12 md:text-right">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-primary-500 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold text-dark-900 mt-1">{item.title}</h3>
                      <p className="text-dark-500 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-primary-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="flex-1 md:pl-12">
                    {/* Empty for alignment */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-dark-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Certifications & Accreditations</h2>
            <p className="section-subtitle mx-auto">
              Recognized for quality and safety standards
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'ISO 9001:2015', description: 'Quality Management' },
              { name: 'ISO 14001:2015', description: 'Environmental Management' },
              { name: 'ISO 45001:2018', description: 'Occupational Health & Safety' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-50 rounded-xl p-8 text-center min-w-[200px]"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-dark-900 mb-1">{cert.name}</h3>
                <p className="text-dark-500 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
