/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Instagram, FileText, ArrowUpRight, Github, Sun, Moon, Laptop } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme?: 'light' | 'dark';
  setTheme?: (theme: 'light' | 'dark') => void;
}

export default function Header({ activeSection, setActiveSection, theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navItems = [
    { id: 'tentang', label: 'Tentang' },
    { id: 'skills', label: 'Skills' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'proyek', label: 'Proyek & Kompetisi' },
    { id: 'publikasi', label: 'Publikasi' },
    { id: 'kontak', label: 'Hubungi' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-left group"
          >

            <div>
              <span className="font-bold text-slate-900 tracking-tight block text-base md:text-lg">
                Rezky Pratiwi
              </span>
              <span className="text-[10px] font-mono text-slate-500 block leading-none">
                S1 Software Engineering
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary-600 bg-primary-50/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Links */}
          <div className="hidden lg:flex items-center space-x-3">
            {setTheme && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                title={`Tema saat ini: ${theme === 'dark' ? 'Gelap' : 'Terang'}. Klik untuk mengubah.`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              id="header-github"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              id="header-linkedin"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              id="header-instagram"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {PERSONAL_INFO.portfolioLink && (
              <a
                href={PERSONAL_INFO.portfolioLink}
                target="_blank"
                rel="noreferrer"
                id="header-portfolio-drive"
                className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm hover:shadow transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Full Portfolio (40MB)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            {setTheme && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 mr-1 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl py-4 px-6 space-y-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors block ${
                  activeSection === item.id
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <hr className="border-slate-100 dark:border-slate-800" />
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="mobile-github"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="mobile-linkedin"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                id="mobile-instagram"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            {PERSONAL_INFO.portfolioLink && (
              <a
                href={PERSONAL_INFO.portfolioLink}
                target="_blank"
                rel="noreferrer"
                id="mobile-portfolio-drive"
                className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-primary-600 to-teal-600 text-white px-4 py-2.5 rounded-lg text-xs font-semibold"
              >
                <FileText className="w-4 h-4" />
                <span>Full Portfolio (40MB)</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
