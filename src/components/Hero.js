"use client";
import { useState, useEffect} from 'react';  
import { motion } from 'framer-motion';

export default function Hero() {
    const greeting = ["Hello, I'm Roshan Ganesh.", "Whats up, Roshan Ganesh here.", "Hey, I'm Roshan Ganesh.", "Nice to meet you, I'm Roshan Ganesh.", "Hi there, I'm Roshan Ganesh."];
    const [text, setText] = useState(greeting[0]);

    useEffect(() => {setText(greeting[Math.floor(Math.random() * greeting.length)]);}, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {text}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Developer, Engineer, and creative problem solver
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/Projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-gray-900/50 transition-shadow"
            >
              View Projects
            </motion.button>
            </a>
            <a href="/Contact">
            <motion.button
     
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 rounded-xl text-white font-medium hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}