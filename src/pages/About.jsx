import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Target, Globe, Leaf } from 'lucide-react';
import dakshImage from '../assets/images/daksh.png';
import ayushImage from '../assets/images/ayush.png';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Our Mission",
      description: "To empower wellbeing through mindful technology, making personalized aromatherapy accessible to everyone for a more intelligent, effortless, and beautifully integrated into daily life."
    },
    {
      icon: Target,
      title: "Our Vision",
      description: "To create a world where personalized wellness is accessible and effortless, where technology enhances our natural connection to scent for better mental and emotional health."
    }
  ];

  const differentiators = [
    {
      icon: Globe,
      title: "Smart Technology",
      description: "AI-powered diffusers that learns your preferences and adapts to your daily rhythms."
    },
    {
      icon: Leaf,
      title: "Mood Detection",
      description: "Real-time emotional intelligence that responds to your current state and needs."
    },
    {
      icon: Heart,
      title: "Pure Sourcing",
      description: "Ethically sourced, therapeutic-grade essential oils from trusted global partners."
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "Commitment to minimalism and environmental responsibility in every design choice."
    }
  ];

  const team = [
    {
      name: "Ayush Raj",
      role: "Founder & CEO",
      description: "Wellness Technology Pioneer",
      image: ayushImage
    },
    {
      name: "Daksh Sharma",
      role: "Chief Technology Officer",
      description: "AI & Machine Learning Expert",
      image: dakshImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>About AromaIQ - Our Story | Smart Aromatherapy Innovation</title>
        <meta name="description" content="Discover AromaIQ's mission to revolutionize wellness through AI-powered aromatherapy. Learn about our team, values, and commitment to sustainable wellness technology." />
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where science meets serenity, creating the perfect harmony between technology and wellness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                alt="AromaIQ founder working in modern wellness laboratory"
               src="https://images.unsplash.com/photo-1537035448858-6d703dbc320f" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">The Beginning</h2>
              <p className="text-gray-600 leading-relaxed">
                AromaIQ was born from a simple yet profound realization: in our fast-paced world, we needed a bridge between ancient wellness wisdom and modern technology. Our founder, struggling with work-related stress, discovered the transformative power of aromatherapy but found traditional diffusers lacking the intelligence to adapt to changing moods and needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This sparked the vision for AromaIQ – a smart diffuser that could understand your emotional state and respond with precisely the right blend of therapeutic essential oils, creating personalized wellness experiences that evolve with you throughout your day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover-lift"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovation meets intention in every aspect of our approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-purple-50 hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The minds behind the technology and wellness innovation
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift max-w-sm"
              >
                <img  
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
                  alt={`${member.name} - ${member.role} at AromaIQ`}
                 src={member.image} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Experience the Science of Scent</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how AromaIQ can transform your daily wellness routine with intelligent aromatherapy that adapts to you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Explore Our Products
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
