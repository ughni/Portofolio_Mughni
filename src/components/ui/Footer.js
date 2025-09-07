"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="text-2xl font-bold text-text-primary hover:text-primary transition-colors">
              M. Mughni
            </Link>
            <p className="text-text-secondary text-sm">
              Membangun pengalaman digital yang penting.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiGithub />, url: "https://github.com/ughni" },
                { icon: <FiLinkedin />, url: "https://linkedin.com/in/m-mughni" },
                { icon: <FiTwitter />, url: "https://twitter.com/ughni" },
                { icon: <FiMail />, url: "mailto:hello@mughni.dev" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label={`${social.url.split('/')[2]}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang", href: "#about" },
                { name: "Proyek", href: "#projects" },
                { name: "Kontak", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">Sumbar Daya</h3>
            <ul className="space-y-2">
              {[
                { name: "Blog", href: "/blog" },
                { name: "GitHub", href: "https://github.com/ughni" },
                { name: "Resume", href: "/resume" },
                { name: "Uses", href: "/uses" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} M. Mughni. Hak cipta dilindungi undang-undang. Dibuat dengan <FiHeart className="inline text-red-500" /> di Indonesia.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;