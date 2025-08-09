"use client";

import ProjectCard from '../ui/ProjectCard';
import { motion } from 'framer-motion';

// --- BAGIAN YANG DIPERBAIKI ---
// Path gambar sekarang sudah benar, dimulai dari /
// Menambahkan id unik dan mengubah title yang duplikat
const projectData = [
  {
    id: 1,
    title: 'Website E-commerce UMKM Pekalongan',
    description: 'Platform toko online modern dengan fitur keranjang belanja, checkout, dan panel admin yang responsif dan aman.',
    imgSrc: '/images/projects/project4.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer-Motion', "React-Hook-From", "React-Icon"],
    liveUrl: 'https://umkm-pekalongan-oudjtdsvh-ughnis-projects.vercel.app/',
    repoUrl: 'https://github.com/ughni/umkm_pekalongan',
  },
  {
    id: 2,
    title: 'Website Bioskop',
    description: 'Bioskop adalah sebuah proyek front-end yang dibuat untuk memberikan pengalaman layaknya situs bioskop modern. Pengguna dapat melihat film-film yang sedang populer, melakukan pencarian film secara real-time, dan melihat detail lengkap dari setiap film dalam sebuah popup (modal) yang interaktif. Proyek ini sepenuhnya dibangun dengan HTML, CSS, dan JavaScript murni (vanilla), tanpa menggunakan framework atau library eksternal.',
    imgSrc: '/images/projects/project4.png', // Fixed: Added leading slash
    tags: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://bioskop-kita.vercel.app/',
    repoUrl: 'https://github.com/ughni/BioskopKita',
  },
  {
    id: 3,
    title: 'Landing Page Produk SaaS',
    description: 'Halaman promosi untuk produk digital yang fokus pada konversi, desain yang menarik, dan optimasi SEO.',
    imgSrc: '/images/projects/project3.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'E-Learning Platform',
    description: 'Platform pembelajaran online dengan fitur kuis interaktif, progress tracking, dan sertifikat digital.',
    imgSrc: '/images/projects/project3.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Website portfolio modern dengan animasi yang smooth dan desain responsive untuk showcase karya.',
    imgSrc: '/images/projects/project3.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 6,
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas dengan fitur drag & drop, deadline reminder, dan kolaborasi tim.',
    imgSrc: '/images/projects/project3.png',
    tags: ['React', 'Firebase', 'Material-UI'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 7,
    title: 'Restaurant Website',
    description: 'Website restoran dengan menu digital, sistem reservasi online, dan integrasi payment gateway.',
    imgSrc: '/images/projects/project3.png',
    tags: ['Vue.js', 'Express.js', 'MySQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 8,
    title: 'Weather Dashboard',
    description: 'Dashboard cuaca dengan prediksi 7 hari, peta interaktif, dan notifikasi cuaca ekstrem.',
    imgSrc: '/images/projects/project3.png',
    tags: ['JavaScript', 'Chart.js', 'OpenWeather API'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 9,
    title: 'Social Media App',
    description: 'Aplikasi media sosial dengan fitur posting, likes, comments, dan real-time messaging.',
    imgSrc: '/images/projects/project3.png',
    tags: ['React Native', 'Socket.io', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 10,
    title: 'Crypto Tracker',
    description: 'Aplikasi tracking cryptocurrency dengan real-time price updates dan portfolio management.',
    imgSrc: '/images/projects/project3.png',
    tags: ['Angular', 'TypeScript', 'CoinGecko API'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 11,
    title: 'Blog Platform',
    description: 'Platform blog dengan editor WYSIWYG, sistem komentar, dan SEO optimization.',
    imgSrc: '/images/projects/project3.png',
    tags: ['Gatsby', 'GraphQL', 'Contentful'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 12,
    title: 'Fitness Tracker',
    description: 'Aplikasi fitness tracking dengan workout plans, progress monitoring, dan nutrition guide.',
    imgSrc: '/images/projects/project3.png',
    tags: ['Flutter', 'Dart', 'SQLite'],
    liveUrl: '#',
    repoUrl: '#',
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
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-4"
        >
          My Featured <span className="text-primary">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-text-secondary mb-16 max-w-2xl mx-auto"
        >
          Berikut adalah beberapa proyek yang pernah saya kerjakan, menunjukkan keahlian saya dalam pengembangan web.
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectData.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;