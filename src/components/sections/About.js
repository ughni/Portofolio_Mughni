"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import aboutImage from '../../../public/images/M_Mughni.png'; // Replace with your image
import { FiAward, FiCode, FiCpu } from 'react-icons/fi';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FiCode className="text-primary" size={24} /> },
    { name: 'Backend Development', icon: <FiCpu className="text-primary" size={24} /> },
  ];

  const experience = [
    { year: '2022-Present', role: 'Full Stack Developer', company: 'Tech Solutions Inc.' },
    { year: '2020-2022', role: 'Frontend Developer', company: 'Digital Creatives' },
    { year: '2018-2020', role: 'Web Designer', company: 'Freelance' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <div className="aspect-[4/5] w-full relative">
              <Image
                src={aboutImage}
                alt="M. Mughni - Web Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">Who I Am</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I m M. Mughni, a passionate web developer with 5+ years of experience creating digital experiences. 
              I specialize in building responsive, accessible, and performant web applications that solve real problems.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver solutions that are both 
              functional and visually appealing. When I m not coding, you can find me exploring new technologies or 
              contributing to open-source projects.
            </p>

            {/* Skills */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-text-primary mb-4">What I Do</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-surface p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3">{skill.icon}</div>
                      <h5 className="font-medium text-text-primary">{skill.name}</h5>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Experience</h4>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 text-primary rounded-full p-2 mr-4">
                      <div className="w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{exp.year}</p>
                      <h5 className="font-medium text-text-primary">{exp.role}</h5>
                      <p className="text-text-secondary">{exp.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;