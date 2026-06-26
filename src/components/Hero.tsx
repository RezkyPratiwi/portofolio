/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin, Instagram, ArrowRight, Download, Award, ShieldAlert, GraduationCap, Code2, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Technologies for floating bubbles in the visual area
  const floatTechs = [
    { name: 'React', color: 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800/50', delay: 0, x: -125, y: -100 },
    { name: 'Laravel', color: 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800/50', delay: 1, x: 125, y: -100 },
    { name: 'Figma', color: 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800/50', delay: 2, x: -140, y: 15 },
    { name: 'Tailwind', color: 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/50', delay: 1.5, x: 140, y: 20 },
    { name: 'MySQL', color: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/50', delay: 2.5, x: 80, y: 115 },
    { name: 'Canva', color: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/50', delay: 0.5, x: -80, y: 115 },
  ];

  return (
    <section
      id="tentang"
      className="relative min-h-screen pt-28 pb-16 md:py-32 flex items-center bg-slate-50/50 dark:bg-slate-950/50 overflow-hidden custom-grid-bg transition-colors"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl -z-10 animate-pulse duration-5000 transition-colors" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-200/40 dark:bg-teal-900/20 rounded-full blur-3xl -z-10 animate-pulse duration-7000 transition-colors" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Details (Left Column) */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Cumlaude & Degree Badges */}
            <motion.div className="flex flex-wrap gap-2.5" variants={itemVariants}>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 text-xs font-semibold shadow-2xs transition-colors">
                <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                <span>Predikat Cumlaude 🎓</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 border border-primary-100 dark:border-primary-800/50 text-xs font-semibold shadow-2xs transition-colors">
                <GraduationCap className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                <span>S1 Rekayasa Perangkat Lunak</span>
              </span>
            </motion.div>

            {/* Title / Name */}
            <div className="space-y-2">
              <motion.span
                className="text-xs font-mono font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase block transition-colors"
                variants={itemVariants}
              >
                Selamat Datang di Portofolio Saya
              </motion.span>
              <motion.h1
                id="hero-name-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none whitespace-nowrap transition-colors"
                variants={itemVariants}
              >
                Hi, Saya <span className="bg-gradient-to-r from-primary-600 to-teal-600 dark:from-primary-400 dark:to-teal-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 font-sans tracking-tight transition-colors"
                variants={itemVariants}
              >
                {PERSONAL_INFO.title}
              </motion.p>
            </div>

            {/* Profile Bio */}
            <motion.p
              className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-justify transition-colors"
              variants={itemVariants}
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Contact Pills */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2.5 bg-white dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/50 shadow-3xs hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-2xs transition-all">
                <div className="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none mb-0.5 transition-colors">Lokasi</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block transition-colors">Banyumas, Jateng</span>
                </div>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-2.5 bg-white dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/50 shadow-3xs hover:border-primary-100 dark:hover:border-primary-800/50 hover:shadow-2xs transition-all text-left"
              >
                <div className="p-1.5 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none mb-0.5 transition-colors">Email Resmi</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block transition-colors">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2.5 bg-white dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/50 shadow-3xs hover:border-emerald-100 dark:hover:border-emerald-800/50 hover:shadow-2xs transition-all text-left"
              >
                <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none mb-0.5 transition-colors">WhatsApp</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block transition-colors">{PERSONAL_INFO.phone}</span>
                </div>
              </a>
            </motion.div>

            {/* Quick Actions */}
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center space-x-2 bg-slate-900 dark:bg-primary-600 hover:bg-slate-800 dark:hover:bg-primary-700 text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all transform active:scale-98"
              >
                <span>Hubungi Saya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-projects-btn"
                onClick={onProjectsClick}
                className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-6 py-3.5 rounded-xl text-sm font-semibold shadow-xs hover:shadow-sm transition-all transform active:scale-98"
              >
                <span>Lihat Karya & Projek</span>
              </button>
              <a
                href="/CV_Rezky_Pratiwi.pdf"
                download="CV_Rezky_Pratiwi.pdf"
                target="_blank"
                rel="noreferrer"
                id="hero-drive-btn"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV</span>
              </a>
            </motion.div>

            {/* Quick Stats Banner */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 transition-colors"
              variants={itemVariants}
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary-600 dark:text-primary-400 leading-none transition-colors">3.9+</span>
                <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 transition-colors">Cumlaude GPA</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400 leading-none transition-colors">6+</span>
                <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 transition-colors">Sistem & Proyek</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-rose-600 dark:text-rose-400 leading-none transition-colors">3 HKI</span>
                <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 transition-colors">Karya Terdaftar</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Graphic Area (Right Column) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Canvas containing animated SVG Elements */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-100 md:h-100 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center overflow-hidden transition-colors">
              <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50 dark-grid-bg opacity-10" />

              {/* Central Circle Badge representing Rezky's disciplines */}
              <motion.div
                className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-primary-600/95 to-teal-500/95 p-1 shadow-2xl flex flex-col items-center justify-center text-white overflow-hidden"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Rezky Pratiwi" 
                  className="w-full h-full object-cover object-[center_15%] rounded-full bg-white" 
                />
              </motion.div>

              {/* Decorative Tech Loops */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-dashed border-slate-200 dark:border-slate-700 animate-spin transition-colors" style={{ animationDuration: '40s' }} />
                <div className="w-80 h-80 sm:w-92 sm:h-92 rounded-full border border-slate-100/60 dark:border-slate-800/60 transition-colors" />
              </div>

              {/* Floating Technology Bubbles */}
              {floatTechs.map((tech) => (
                <motion.div
                  key={tech.name}
                  id={`hero-tech-bubble-${tech.name}`}
                  className={`absolute px-3 py-1.5 rounded-2xl border text-xs font-bold font-mono shadow-md ${tech.color}`}
                  style={{
                    x: tech.x,
                    y: tech.y,
                  }}
                  animate={{
                    y: [tech.y - 8, tech.y + 8, tech.y - 8],
                  }}
                  transition={{
                    duration: 4,
                    delay: tech.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}

              {/* Interactive Hover Indicators */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xs border border-slate-100/50 dark:border-slate-700/50 py-2 px-3 rounded-xl flex items-center justify-between transition-colors">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 transition-colors">SIAP BERKONTRIBUSI</span>
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-colors" title="UI/UX Specialist">
                    <Palette className="w-3 h-3 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-colors" title="Software Developer">
                    <Code2 className="w-3 h-3 text-slate-600 dark:text-slate-300" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
