"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'file.svg',
      tags: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by OpenAI GPT-4 with context-aware conversations and message history.',
      image: 'file.svg',
      tags: ['React', 'OpenAI', 'WebSocket']
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative project management platform with kanban boards, time tracking, and team analytics.',
      image: 'file.svg',
      tags: ['TypeScript', 'Node.js', 'MongoDB']
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather forecasting app with interactive maps, historical data, and severe weather alerts.',
      image: 'file.svg',
      tags: ['React', 'D3.js', 'Weather API']
    }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-0 md:ml-20 px-6 md:px-12 py-20 mt-12">
      
      <div className="max-w-7xl mx-auto">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="flex justify-center text-5xl md:text-6xl font-bold mb-6 text-white">
            Projects
          </h1>
          <p className="flex justify-center text-xl text-gray-400 mb-16">
            A selection of my recent work
          </p>
        </motion.div>
        

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}