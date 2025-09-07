"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../../../public/images/About.jpg";

const About = () => {
  const experience = [
    {
      year: "2023",
      role: "Developer Web Independen",
      description: "Awal saya belajar diteknologi",
      highlights: ["Saya mulai dengan rasa ingin tahu banget, saya belajar dari html, css, javascript"],
    },
    {
      year: "2024",
      role: "Developer Otodidak",
      description: "Saya mempelajari didunia digital membuat web melalui projek langung",
      highlights: ["Menguasai HTML, CSS, JavaScript", "Mempelajari framework seperti Laravel, React, Next.js"],
    },
    {
      year: "2025",
      role: "Proyek Pribadi",
      description: "Membangun proyek untuk mempertajam keterampilan dan pemahaman",
      highlights: ["Food ordering website", "Portfolio sites", "Movie search app with OMDb API"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">My Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[4/5] w-full relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src={aboutImage} alt="M. Mughni - Web Developer" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Halo, saya M. Mughni </h3>

              <div className="space-y-4 text-text-secondary">
                <p>Saya seorang pengembang web yang bersemangat dengan pengalaman lebih dari 1 tahun dalam menciptakan solusi digital yang bermanfaat. Berawal dari rasa ingin tahu, saya telah berkembang menjadi karier yang menggabungkan keterampilan teknis dengan pemecahan masalah yang kreatif.</p>
                <p>Saya ahli dalam membangun situs web responsif, berkinerja tinggi, dan memberikan nilai nyata. Pendekatan saya berfokus pada kode yang bersih, arsitektur yang cermat, dan desain yang berfokus pada pengguna.</p>

              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h4 className="text-2xl font-semibold text-text-primary mb-6">Perjalanan Pengembangan Saya</h4>

              <div className="space-y-8 relative before:absolute before:left-[18px] before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b from-primary/20 to-transparent">
                {experience.map((exp, index) => (
                  <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start relative pl-10">
                    <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-sm text-primary font-medium tracking-wide">{exp.year}</span>

                      <h5 className="text-lg font-semibold text-text-primary">{exp.role}</h5>

                      <p className="text-text-secondary">{exp.description}</p>

                      <ul className="list-disc pl-5 text-text-secondary space-y-1.5 text-sm">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="leading-snug">
                            {highlight}
                          </li>
                        ))}
                      </ul>
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
