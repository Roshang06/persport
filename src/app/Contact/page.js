"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here TODO later
  };

  return (
    <div className="min-h-screen pt-20 md:pt-0 md:ml-20 px-6 md:px-12 py-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-800"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-gray-900/50 transition-shadow"
            >
              Send Message
            </motion.button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-center">
              Or reach me directly at{' '}
              <a href="mailto:roshanganesh06@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                roshanganesh06@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}