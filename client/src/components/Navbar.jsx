import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar Component
 * Sticky navigation with mobile responsive menu
 */

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Equipments', path: '/equipments' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >

      <div className="container-custom">

        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">

            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isScrolled ? 'bg-primary-500' : 'bg-white'
              }`}
            >
              <span
                className={`text-xl font-bold ${
                  isScrolled ? 'text-white' : 'text-primary-500'
                }`}
              >
                SE
              </span>
            </div>

            <div className="hidden sm:block leading-tight">

              <span
                className={`text-lg font-bold ${
                  isScrolled ? 'text-dark-900' : 'text-white'
                }`}
              >
                Sun Emirates
              </span>

              <p
                className={`text-xs ${
                  isScrolled ? 'text-dark-600' : 'text-white/80'
                }`}
              >
                Mechanical Works LLC
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center space-x-1">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-500 bg-primary-50'
                    : isScrolled
                    ? 'text-dark-600 hover:text-primary-500 hover:bg-dark-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >

                {link.name}

              </Link>

            ))}

          </div>

          {/* CTA Button */}

          <div className="hidden lg:block">

            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-primary-500 hover:bg-primary-50'
              }`}
            >

              Get Quote

            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >

            <div className="relative w-6 h-6">

              <span
                className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1'
                } ${isScrolled || isMobileMenuOpen ? 'bg-dark-900' : 'bg-white'}`}
              ></span>

              <span
                className={`absolute left-0 top-3 w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                } ${isScrolled || isMobileMenuOpen ? 'bg-dark-900' : 'bg-white'}`}
              ></span>

              <span
                className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                } ${isScrolled || isMobileMenuOpen ? 'bg-dark-900' : 'bg-white'}`}
              ></span>

            </div>

          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {isMobileMenuOpen && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">

                {navLinks.map((link) => (

                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-dark-600 hover:bg-dark-50 hover:text-primary-500'
                    }`}
                  >

                    {link.name}

                  </Link>

                ))}

                <div className="p-4 border-t border-dark-100">

                  <Link
                    to="/contact"
                    className="block w-full text-center bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >

                    Get Quote

                  </Link>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </nav>
  );

};

export default Navbar;