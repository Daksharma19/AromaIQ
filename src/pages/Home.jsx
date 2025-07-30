
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Smartphone, Leaf, Star, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleShopNow = () => {
    toast({
      title: "🛍️ Shop Now",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleLearnMore = () => {
    toast({
      title: "📚 Learn More",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const features = [
    {
      icon: Brain,
      title: "AI Mood Detection",
      description: "Advanced sensors analyze your environment and biometrics to determine optimal scent profiles."
    },
    {
      icon: Smartphone,
      title: "App Control",
      description: "Complete control through our intuitive mobile app with scheduling and custom blend creation."
    },
    {
      icon: Leaf,
      title: "Premium Oils",
      description: "Curated collection of therapeutic-grade essential oils sourced from around the world."
    }
  ];

  const benefits = [
    {
      icon: "🌙",
      title: "Better Sleep",
      description: "Lavender and chamomile blends help you unwind and sleep naturally."
    },
    {
      icon: "🧠",
      title: "Enhanced Focus",
      description: "Peppermint and eucalyptus combinations boost mental clarity and peak performance."
    },
    {
      icon: "💆",
      title: "Stress Relief",
      description: "Bergamot and ylang ylang create a calming atmosphere that promotes relaxation."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Connect & Setup",
      description: "Download the AromaIQ app and connect your device via WiFi for seamless integration."
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our AI analyzes your mood, environment, and preferences to create the perfect scent blend."
    },
    {
      number: "3",
      title: "Enjoy & Relax",
      description: "Experience personalized aromatherapy that adapts throughout your day for optimal wellness."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Wellness Coach",
      content: "AromaIQ has transformed my daily routine. The AI perfectly adapts to my mood and I sleep better than ever.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Tech Executive",
      content: "The focus blends during work hours are incredible. My productivity has increased significantly.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Yoga Instructor",
      content: "The perfect addition to my wellness practice. The scents create the ideal atmosphere for relaxation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AromaIQ - Breathe Smart. Live Well. | AI-Powered Smart Aromatherapy</title>
        <meta name="description" content="Experience the future of aromatherapy with AromaIQ's AI-powered smart diffuser. Personalized scent experiences that adapt to your mood and wellness needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-purple-400/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Breathe Smart.</span>
                <br />
                <span className="text-gradient">Live Well.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of aromatherapy with AI-powered scent customization that adapts to your mood and wellness needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleShopNow}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={handleLearnMore}
                  variant="outline" 
                  size="lg" 
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img  
                  className="w-full h-96 object-cover rounded-2xl animate-float" 
                  alt="AromaIQ Smart Diffuser - Premium AI-powered aromatherapy device"
                 src="https://images.unsplash.com/photo-1636745261286-a74fe31e9f9a" />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-slow">
                  AI Powered
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Wellness Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets natural aromatherapy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-purple-50 hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wellness Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your daily routine with targeted aromatherapy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover-lift"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to personalized aromatherapy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                  {[...Array(5)].map((_, i) => (
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
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Wellness?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who have elevated their daily routine with AromaIQ.
            </p>
            <Button 
              onClick={handleShopNow}
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
