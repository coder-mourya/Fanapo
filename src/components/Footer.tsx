// import React from 'react';
import { Home, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 bg-white">
      <div className="container max-w-7xl px-4  mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 w-full md:w-1/3" // Set width for the first column
          >
            <h3 className="text-[#E91E63] text-3xl font-bold logo">FANAPO</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-lg">Dhussara, Main Bazaar, Tehsil Amb,
                  District Una, (H.P.) – 174302</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <a href="mailto:chetakenterprises2018@gmail.com" className="text-lg hover:text-[#E91E63] transition-colors">
                  chetakenterprises2018@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <a href="tel:+919898989839" className="text-lg hover:text-[#E91E63] transition-colors">
                +91 7807100126
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 w-full md:w-1/4 scoial-link" // Decrease width for the middle column
          >
            <h3 className="text-2xl font-semibold">Social media links</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-lg hover:text-[#E91E63] transition-colors">
                <Facebook className="w-6 h-6" />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-3 text-lg hover:text-[#E91E63] transition-colors">
                <Twitter className="w-6 h-6" />
                Twitter
              </a>
              <a href="#" className="flex items-center gap-3 text-lg hover:text-[#E91E63] transition-colors">
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-3 text-lg hover:text-[#E91E63] transition-colors">
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Subscribe Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#3A2D32] rounded-3xl p-6 sm:p-8 w-full md:w-2/5" // Increase width for the last column
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Subscribe For More info</h3>
            <p className="text-gray-300 mb-6">Please subscribe for more latest information.</p>

            {/* Updated Input Field with Button Inside */}
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email id"
                className="w-full px-4 py-3 pr-24 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 px-6 py-2 bg-[#E91E63] text-white rounded-lg hover:bg-[#D81B60] transition-colors font-medium"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;