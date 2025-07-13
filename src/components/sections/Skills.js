"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaHardHat } from 'react-icons/fa';
import { SiNextdotjs, SiPhp, SiFirebase, SiTailwindcss, SiSolidity, SiMysql, SiLaravel } from 'react-icons/si';
import { motion } from 'framer-motion';

// Enhanced color palette for each skill icon (including Laravel)
const skillColors = {
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  JavaScript: '#F7DF1E',
  PHP: '#777BB4',
  React: '#61DAFB',
  'Next.js': '#000000',
  'Tailwind CSS': '#06B6D4',
  'Bootstrap CSS': '#7952B3',
  'Node.js': '#339933',
  Git: '#F05032',
  Solidity: '#363636',
  Hardhat: '#F9C784',
  Firebase: '#FFCA28',
  MySQL: '#4479A1',
  Laravel: '#FF2D20' // Official Laravel color
};

const skillsData = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <SiPhp />, name: 'PHP' },
  { icon: <SiLaravel />, name: 'Laravel' }, // Added Laravel here
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap CSS' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiSolidity />, name: 'Solidity' },
  { icon: <FaHardHat />, name: 'Hardhat' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiMysql />, name: 'MySQL' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const SkillIcon = ({ icon, name }) => {
  const iconColor = skillColors[name] || '#6B7280';
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.1, 
        y: -5,
        boxShadow: `0 10px 15px -3px ${iconColor}40`
      }}
      className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl 
                 bg-white/5 backdrop-blur-sm border border-white/10 
                 transition-all duration-300 hover:border-white/20"
    >
      <div 
        className="text-4xl transition-all duration-300 hover:scale-110"
        style={{ color: iconColor }}
      >
        {icon}
      </div>
      <p 
        className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300"
        style={{ color: iconColor }}
      >
        {name}
      </p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-4"
        >
          My <span className="text-primary">Technical</span> Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-text-secondary mb-16 max-w-2xl mx-auto"
        >
          Here are the technologies I work with to build powerful and scalable web applications.
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 max-w-5xl mx-auto"
        >
          {skillsData.map((skill) => (
            <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;