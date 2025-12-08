"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Seema's Cafe",
      description: "A professional landing page for Seema's cafe located on Lake Sammamish Road.",
      Link: "https://seema-official-website.vercel.app/",
      image: '/seema.png',
      tags: ['Next.js']
    },
    {
      title: 'Resume Builder Web-App',
      description: 'A prototype web app made with React that guides users through creating a professional resume quickly and easily.',
      Link: "https://github.com/Roshang06/ResBuilder",
      image: '/resumeb.png',
      tags: ['React', 'Firebase']
    },
    {
      title: '2D Platformer Game',
      description: 'As part of my role as President of Game Design club in HS, we created a 2D platformer using Unity and C#.',
      Link: "https://drive.google.com/drive/folders/1jX_HtMIh5nHIQb_WErqFUNEd-DVQSrrF?usp=drive_link",
      image: '/g.png',
      tags: ['Unity', 'C#']
    },
    {
      title: 'Hobby RC-Car',
      description: 'An RC-car printed with PLA, with an SG90 servo, 2 brushless motors, and a raspberry pi controlled remotely over Wifi',
      Link: "https://cad.onshape.com/documents/623744e0a40e4d23a34f392a/w/9060012aedf18c98b4809af4/e/1bb00d9469202f2b5905caed?renderMode=0&uiState=693657e40ed4b1c7e5c38876",
      image: '/rccar.png',
      tags: ['OnShape', 'Python']
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
            Click each card to learn more
          </p>
        </motion.div>
        

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a href={project.Link} target="_blank" rel="noopener noreferrer" key={project.title}>
            <motion.div
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}