"use client";

import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Website E-commerce UMKM Pekalongan",
    description: "Platform toko online modern dengan fitur keranjang belanja, checkout, dan panel admin yang responsif dan aman.",
    imgSrc: "/images/projects/project4.png",
    tags: ["Next.js", "Tailwind CSS", "Framer-Motion", "React-Hook-From", "React-Icon"],
    liveUrl: "https://umkm-pekalongan-oudjtdsvh-ughnis-projects.vercel.app/",
    repoUrl: "https://github.com/ughni/umkm_pekalongan",
  },
  {
    id: 2,
    title: "Website Bioskop",
    description:
      "Bioskop adalah sebuah proyek front-end yang dibuat untuk memberikan pengalaman layaknya situs bioskop modern. Pengguna dapat melihat film-film yang sedang populer, melakukan pencarian film secara real-time, dan melihat detail lengkap dari setiap film dalam sebuah popup (modal) yang interaktif. Proyek ini sepenuhnya dibangun dengan HTML, CSS, dan JavaScript murni (vanilla), tanpa menggunakan framework atau library eksternal.",
    imgSrc: "/images/projects/Bioskop.png", // Fixed: Added leading slash
    tags: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://bioskop-kita.vercel.app/",
    repoUrl: "https://github.com/ughni/BioskopKita",
  },
];

// Konfigurasi animasi untuk container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Setiap kartu proyek akan muncul dengan jeda 0.2 detik
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-4">
          Unggulan Saya <span className="text-primary">Proyek</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center text-text-secondary mb-16 max-w-2xl mx-auto">
          Berikut adalah beberapa proyek yang pernah saya kerjakan, menunjukkan keahlian saya dalam pengembangan web.
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
