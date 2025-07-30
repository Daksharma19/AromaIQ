
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Check, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Products = () => {
  const [cart, setCart] = useState([]);
  const { toast } = useToast();

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "🛒 Added to Cart",
      description: `${product.name} has been added to your cart!`
    });
  };

  const mainProduct = {
    id: 1,
    name: "AromaIQ Smart Diffuser",
    price: 299,
    rating: 4.9,
    reviews: 127,
    description: "Experience the future of aromatherapy with our AI-powered diffuser that adapts to your mood and environment for optimal wellness.",
    features: [
      "AI Mood Sync Technology",
      "Smart App Control",
      "Programmable Timer"
    ],
    image: "Modern smart aromatherapy diffuser with sleek design and LED lighting"
  };

  const essentialOils = [
    {
      id: 2,
      name: "Focus Blend",
      price: 49,
      description: "Enhance concentration and mental clarity with rosemary and peppermint.",
      image: "Essential oil bottle labeled Focus Blend with rosemary and peppermint"
    },
    {
      id: 3,
      name: "Relax Pack",
      price: 52,
      description: "Unwind and de-stress with lavender and chamomile essential oils.",
      image: "Essential oil bottle labeled Relax Pack with lavender and chamomile"
    },
    {
      id: 4,
      name: "Energy Boost",
      price: 48,
      description: "Invigorate your senses with citrus and eucalyptus blends.",
      image: "Essential oil bottle labeled Energy Boost with citrus and eucalyptus"
    },
    {
      id: 5,
      name: "Starter Set",
      price: 89,
      description: "Perfect starter pack with our most popular essential oil collection.",
      image: "Essential oil starter set with multiple bottles in elegant packaging"
    }
  ];

  const comparisonFeatures = [
    { name: "Programmable Timer", basic: true, smart: true },
    { name: "AI Mood Detection", basic: false, smart: true },
    { name: "App Integration", basic: false, smart: true },
    { name: "Personalized Oil Suggestions", basic: false, smart: true }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      content: "The AI mood detection is incredible. It knows exactly what I need after a stressful day."
    },
    {
      name: "Michael Chen",
      rating: 5,
      content: "Game changer for my home office. The focus blend helps me stay productive all day."
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      content: "Beautiful design and the app is so intuitive. Worth every penny for better sleep quality."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AromaIQ Products - Smart Diffusers & Essential Oils | Premium Aromatherapy</title>
        <meta name="description" content="Explore AromaIQ's collection of AI-powered smart diffusers and premium essential oil blends. Transform your wellness routine with intelligent aromatherapy technology." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Explore AromaIQ Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart wellness starts with intentional scent
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="w-full h-96 object-cover rounded-2xl shadow-lg" 
                alt={mainProduct.image}
               src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">{mainProduct.name}</h2>
              <p className="text-gray-600 leading-relaxed">{mainProduct.description}</p>
              
              <div className="space-y-3">
                {mainProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">${mainProduct.price}</span>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">({mainProduct.reviews} reviews)</span>
                </div>
              </div>

              <Button 
                onClick={() => handleAddToCart(mainProduct)}
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <ShoppingCart className="mr-2 w-5 h-5" />
                Add to Cart
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Essential Oils Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Oil Collections</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated blends designed to enhance your wellness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {essentialOils.map((oil, index) => (
              <motion.div
                key={oil.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover-lift"
              >
                <img  
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                  alt={oil.image}
                 src="https://images.unsplash.com/photo-1671141411078-8ce4a54b5c73" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{oil.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{oil.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${oil.price}</span>
                  <Button 
                    onClick={() => handleAddToCart(oil)}
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Our Diffusers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why AromaIQ Smart Diffuser stands out
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50">
              <div className="p-6">
                <span className="text-lg font-semibold text-gray-900">Features</span>
              </div>
              <div className="p-6 text-center">
                <span className="text-lg font-semibold text-gray-900">Basic Diffuser</span>
              </div>
              <div className="p-6 text-center bg-green-50">
                <span className="text-lg font-semibold text-green-600">AromaIQ Smart</span>
              </div>
            </div>

            {comparisonFeatures.map((feature, index) => (
              <div key={feature.name} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-4">
                  <span className="text-gray-700">{feature.name}</span>
                </div>
                <div className="p-4 text-center">
                  {feature.basic ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="p-4 text-center">
                  {feature.smart ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from wellness enthusiasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img  
                    className="w-12 h-12 rounded-full mr-4" 
                    alt={`${testimonial.name} profile photo`}
                   src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Cart ({cart.length} items)
          </p>
          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
            View Cart (${cart.reduce((total, item) => total + item.price, 0)})
          </Button>
        </div>
      )}
    </>
  );
};

export default Products;
