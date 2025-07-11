"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap,FaNodeJs, FaGitAlt,FaHardHat } from 'react-icons/fa';
import { SiNextdotjs, SiPhp,SiFirebase,SiTailwindcss, SiSolidity,SiMysql  } from 'react-icons/si';
import { motion } from 'framer-motion';

// Data untuk keahlian, dipisahkan agar mudah dikelola
const skillsData = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: < SiPhp />, name: 'PHP' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap CSS' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiSolidity />, name: 'Solidity' },
  { icon: <FaHardHat  />, name: 'Hardhat' },
  { icon: <SiFirebase  />, name: 'Firebase' },
  { icon: <SiMysql   />, name: 'Mysql ' },
];

// Konfigurasi animasi untuk container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Setiap anak akan muncul dengan jeda 0.1 detik
    },
  },
};

// Konfigurasi animasi untuk setiap item (ikon)
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

// Komponen untuk setiap ikon skill
const SkillIcon = ({ icon, name }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.1, y: -5 }}
    className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl 
               bg-white/5 backdrop-blur-sm border border-white/10 
               transition-colors duration-300 hover:bg-primary/20"
  >
    <div className="text-4xl text-text-secondary group-hover:text-primary transition-colors duration-300">
      {icon}
    </div>
    <p className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
      {name}
    </p>
  </motion.div>
);

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
          My Professional <span className="text-primary">Skillset</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-text-secondary mb-16 max-w-2xl mx-auto"
        >
          Saya terus belajar dan mengasah kemampuan saya dalam berbagai teknologi untuk menciptakan produk digital yang terbaik.
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animasi akan berjalan saat section ini terlihat di layar
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-5 max-w-4xl mx-auto"
        >
          {skillsData.map(skill => (
            <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
