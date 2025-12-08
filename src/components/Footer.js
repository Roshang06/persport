"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    {name:"Github", 
    link:"https://github.com/Roshang06"}, 

    {name:"LinkedIn", 
    link:"https://www.linkedin.com/in/roshan-ganesh-innovation/"}, 

    {name:"Instagram", 
    link:"https://www.instagram.com/roshanganesh56/?hl=en"}];

  return (
    <footer className="border-t border-gray-800 px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400">
            <p>&copy; 2025 Roshan Ganesh. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}