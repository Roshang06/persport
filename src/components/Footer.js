"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}