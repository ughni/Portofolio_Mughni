"use client";

import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Konfigurasi animasi untuk setiap kartu
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const ProjectCard = ({ title, description, imgSrc, tags, liveUrl, repoUrl }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-surface rounded-lg overflow-hidden group transition-all duration-300 hover:!scale-105 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={imgSrc}
          alt={`Screenshot proyek ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay untuk efek hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium bg-primary/10 text-primary py-1 px-3 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-text-secondary mb-6 text-sm line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center gap-6 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-text-secondary hover:text-primary transition-colors"
          >
            <FiExternalLink className="mr-2" size={16} />
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-text-secondary hover:text-primary transition-colors"
          >
            <FiGithub className="mr-2" size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
