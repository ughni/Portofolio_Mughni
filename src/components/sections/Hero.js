"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiInstagram, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Konfigurasi animasi untuk elemen teks
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Data untuk orbit, agar mudah diubah-ubah
const orbits = [
  { radius: 160, size: 40, duration: 25 }, // radius orbit, ukuran blob, kecepatan
  { radius: 190, size: 20, duration: 20 },
  { radius: 220, size: 30, duration: 30 },
];

const Hero = () => {
  return (
    <section id="hero" className="container justify-center mx-auto min-h-screen flex items-center px-6 py-24 md:py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Teks */}
        <div className="text-center md:text-left z-10">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-primary font-mono text-lg mb-2">
            Hai, Saya&apos; M. Mughni
          </motion.p>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            <span className="block">Web Developer</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="text-text-secondary text-lg md:text-xl max-w-lg mb-8">
            Saya membangun pengalaman digital yang luar biasa. Saat ini fokus pada membangun produk yang dapat diakses dan berpusat pada manusia.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-primary text-white py-3 px-6 rounded-md hover:bg-teal-600 transition-colors flex items-center gap-2">
              Hubungi Kami
            </a>
            <a
              href="https://drive.google.com/file/d/13tFA50jUeOGJuFFm-3gwDk6tHfNP4Bo1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary py-3 px-6 rounded-md hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              <FiDownload /> View CV
            </a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.5 }} className="flex gap-6 mt-8 justify-center md:justify-start">
            <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://github.com/ughni" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <FiGithub size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://www.linkedin.com/in/m-mughni-69b15830b/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://www.instagram.com/ugni_mh/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <FiInstagram size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* --- Kolom Gambar --- */}
        <div className="relative flex justify-center items-center h-[400px] md:h-auto">
          {/* Elemen Orbit */}
          {orbits.map((orbit, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              animate={{ rotate: 360 }}
              transition={{
                duration: orbit.duration,
                repeat: Infinity,
                ease: "linear",
                delay: index * -7,
              }}
            >
              <div
                className="absolute bg-primary/10 rounded-full blur-md"
                style={{
                  width: orbit.size,
                  height: orbit.size,
                  transform: `translateX(${orbit.radius}px)`,
                }}
              />
            </motion.div>
          ))}

          {/* Gambar Utama dengan Efek Mengambang */}
          <motion.div
            className="relative z-10 group"
            animate={{ y: ["-8px", "8px", "-8px"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-surface group-hover:border-primary/30 transition-all duration-300">
              <Image
                src="/images/M_Mughni.png" // <-- PERBAIKAN DI SINI
                alt="Foto Profil M. Mughni"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Efek kilau saat hover */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden hidden group-hover:block">
              <motion.div className="w-20 h-[200%] bg-white/10 -skew-x-12" initial={{ x: "-200px" }} animate={{ x: "400px" }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
