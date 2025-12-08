"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/Projects' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className="hidden md:block fixed left-0 top-0 h-screen bg-gray-900/80 backdrop-blur-xl border-r border-gray-800 z-50 transition-all duration-300 ease-in-out hover:w-60 w-20"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col h-full py-8">
          {/* Logo */}
          <div className="px-6 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">RG</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex-1 space-y-2 px-4">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <div className="flex items-center space-x-4 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 flex-shrink-0" />
                  <span className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
            <span className="text-white font-bold text-xl">RG</span>
          </div>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-gray-400 hover:text-white"
          >
            <div className="space-y-1.5">
              <motion.div
                animate={{ rotate: isMobileOpen ? 45 : 0, y: isMobileOpen ? 8 : 0 }}
                className="w-6 h-0.5 bg-current transition-all"
              />
              <motion.div
                animate={{ opacity: isMobileOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-current transition-all"
              />
              <motion.div
                animate={{ rotate: isMobileOpen ? -45 : 0, y: isMobileOpen ? -8 : 0 }}
                className="w-6 h-0.5 bg-current transition-all"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-gray-800"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div className="px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors">
                      {item.name}
                    </div>
                  </Link>
                ))}
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}