import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';
import { productsAPI } from '../services/api';

/**
 * Products Page
 * Displays product categories and products
 */
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsAPI.getAllProducts();
        setProducts(response.data.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Filter products
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <SEOMeta 
        title="Products" 
        description="View our wide range of steel products including beams, plates, pipes, and custom fabrications."
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-dark-300 max-w-2xl mx-auto">
              High-quality steel products for industrial and commercial applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-100 text-dark-600 hover:bg-primary-100 hover:text-primary-500'
                }`}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  {/* Product Image Placeholder */}
                  <div className="h-48 bg-dark-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors"></div>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-sm text-primary-500 font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-semibold text-dark-900 mt-2 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-dark-500 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    {product.specifications && (
                      <div className="text-sm text-dark-400">
                        <span className="font-medium">Specifications:</span> {product.specifications}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-dark-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-50">
        <div className="container-custom">
          <div className="bg-dark-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Product?
            </h2>
            <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
              We also offer custom fabrication services. Contact us with your requirements.
            </p>
            <a href="/contact" className="btn-primary">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
