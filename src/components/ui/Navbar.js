"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : 'bg-background/80 backdrop-blur-sm'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold text-text-primary hover:text-primary transition-colors"
          onClick={closeMenu}
        >
          M. Mughni
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a 
           href="https://drive.google.com/file/d/13tFA50jUeOGJuFFm-3gwDk6tHfNP4Bo1/view?usp=sharing"  rel="noopener noreferrer"
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors text-sm font-medium flex items-center gap-1"
          >
            <FiDownload size={16} />
            <span>View CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-text-primary rounded-md hover:bg-gray-100/10 transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 md:hidden z-40" 
              onClick={closeMenu}
            />
            <div className="md:hidden fixed top-16 right-4 left-4 bg-background border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden animate-fadeIn">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="px-4 py-3 text-text-secondary hover:bg-gray-100/10 transition-colors border-b border-gray-200/50"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <a 
                  href="https://drive.google.com/file/d/13tFA50jUeOGJuFFm-3gwDk6tHfNP4Bo1/view?usp=sharing"  rel="noopener noreferrer" 
                  className="px-4 py-3 bg-primary text-white flex items-center gap-2 justify-center"
                  onClick={closeMenu}
                >
                  <FiDownload size={16} />
                  <span>View CV</span>
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;