// src/lib/data.js

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';

// Data untuk link navigasi
export const navLinks = [
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Kontak', href: '#contact' },
];

// Data untuk keahlian (skills)
export const skillsData = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiFigma />, name: 'Figma' },
];

// Data untuk proyek
export const projectsData = [
  {
    title: 'Website E-commerce',
    description: 'Platform toko online modern dengan fitur keranjang belanja, checkout, dan panel admin.',
    imgSrc: '/images/project1.png', // Ganti dengan screenshot proyek
    tags: ['Next.js', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Aplikasi Blog Pribadi',
    description: 'Blog minimalis dengan sistem manajemen konten (CMS) untuk menulis dan mempublikasikan artikel.',
    imgSrc: '/images/project2.png', // Ganti dengan screenshot proyek
    tags: ['React', 'Firebase', 'Markdown'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Landing Page Produk',
    description: 'Halaman promosi untuk produk digital yang fokus pada konversi dan desain yang menarik.',
    imgSrc: '/images/project3.png', // Ganti dengan screenshot proyek
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

