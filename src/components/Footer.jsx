
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">AromaIQ</span>
            </div>
            <p className="text-gray-400 text-sm">
              Intelligent aromatherapy that adapts to your mood and enhances your wellbeing through the power of scent and technology.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">Products</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Support</span>
            <div className="space-y-2">
              <span className="block text-gray-400 hover:text-white cursor-pointer transition-colors">Help Center</span>
              <span className="block text-gray-400 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="block text-gray-400 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="block text-gray-400 hover:text-white cursor-pointer transition-colors">Warranty</span>
            </div>
          </div>

          {/* Connect */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Connect</span>
            <div className="space-y-2">
              <span className="block text-gray-400">hello@aromaiq.com</span>
              <span className="block text-gray-400">1-800-AROMA-IQ</span>
              <span className="block text-gray-400">Mon-Fri 9AM-6PM PST</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AromaIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
