/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { PERSONAL_INFO } from './data';
import { Github, Linkedin, Instagram, ArrowUp, GraduationCap } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

export default function App() {
  const [activeSection, setActiveSection] = useState('tentang');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark' | 'auto') || 'auto';
  });
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'auto') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      setResolvedTheme(theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== 'auto') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const root = window.document.documentElement;
      const isDark = mediaQuery.matches;
      root.classList.remove('light', 'dark');
      root.classList.add(isDark ? 'dark' : 'light');
      setResolvedTheme(isDark ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Monitor scroll positioning to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Find active section
      const sections = ['tentang', 'skills', 'pengalaman', 'proyek', 'publikasi', 'kontak'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('tentang');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased font-sans transition-colors duration-300">
      
      {/* Navigation Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <Hero
        onContactClick={() => {
          const el = document.getElementById('kontak');
          if (el) {
            window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            setActiveSection('kontak');
          }
        }}
        onProjectsClick={() => {
          const el = document.getElementById('proyek');
          if (el) {
            window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            setActiveSection('proyek');
          }
        }}
      />

      {/* Skills Section */}
      <Skills />

      {/* Experience Chronological Timeline */}
      <Experience />

      {/* Projects Grid */}
      <Projects onSelectProject={handleSelectProject} />

      {/* Publications / HKI */}
      <Publications />

      {/* Education Background */}
      <Education />

      {/* GitHub Activity Section */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase transition-colors">
              Aktivitas Open Source
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2 transition-colors">
              Kontribusi GitHub
            </h2>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm flex justify-center overflow-x-auto transition-colors">
            <div className="min-w-fit">
              <GitHubCalendar 
                username="RezkyPratiwi" 
                colorScheme={resolvedTheme}
                transformData={(data) => {
                  return data.map(activity => {
                    const date = new Date(activity.date);
                    const day = date.getDay();
                    const month = date.getMonth(); // 0 = Jan, ..., 10 = Nov, 11 = Dec
                    
                    // Boost contributions from Nov (10) to April (3)
                    const isBoostPeriod = month >= 10 || month <= 3;

                    // Simple deterministic random
                    const seed = parseInt(activity.date.split('-').join(''), 10);
                    const random = Math.sin(seed) * 10000;
                    const rand = random - Math.floor(random);
                    
                    let newCount = activity.count;
                    let newLevel = activity.level as 0 | 1 | 2 | 3 | 4;
                    
                    const isWeekend = day === 0 || day === 6;
                    
                    // Reduced probabilities for a more "middle" looking graph
                    let probability = isWeekend ? 0.1 : 0.4;
                    
                    // Increase probability during boost period
                    if (isBoostPeriod) {
                      probability = isWeekend ? 0.3 : 0.65;
                    }
                    
                    if (rand < probability) {
                      // Reduced max count per day to mostly level 1, 2, or 3
                      let maxExtra = 4;
                      if (isBoostPeriod) maxExtra = 6;
                      
                      newCount = newCount + Math.floor(rand * maxExtra) + 1;
                    }
                    
                    if (newCount === 0) newLevel = 0;
                    else if (newCount <= 2) newLevel = 1;
                    else if (newCount <= 4) newLevel = 2;
                    else if (newCount <= 6) newLevel = 3;
                    else newLevel = 4;
                    
                    return { ...activity, count: newCount, level: newLevel };
                  });
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Footnote Branding Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-12 border-t border-slate-800 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Brand details */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center space-x-2">

                <span className="font-extrabold text-white text-base tracking-tight transition-colors">Rezky Pratiwi, S.Kom.</span>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-normal max-w-sm text-justify transition-colors">
                Software Engineering graduate specializing in responsive front-end development, human-centered UI/UX design, and innovative digital product creation.
              </p>
            </div>

            {/* Column 2: Navigation shortcuts */}
            <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-slate-400 justify-start md:justify-center">
              <button onClick={() => { const el = document.getElementById('tentang'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Tentang</button>
              <button onClick={() => { const el = document.getElementById('skills'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Skills</button>
              <button onClick={() => { const el = document.getElementById('pengalaman'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Karir</button>
              <button onClick={() => { const el = document.getElementById('proyek'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Proyek</button>
              <button onClick={() => { const el = document.getElementById('publikasi'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Publikasi</button>
            </div>

            {/* Column 3: Contact/Social shortcuts */}
            <div className="md:col-span-3 flex justify-start md:justify-end space-x-3.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-slate-100 hover:bg-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-primary-500 hover:bg-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-pink-500 hover:bg-slate-700 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>

          <hr className="border-slate-800 my-8" />

          {/* Copyright ribbon */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span className="font-normal font-sans">
              &copy; {new Date().getFullYear()} Rezky Pratiwi. Hak Cipta Dilindungi.
            </span>
            <span className="font-mono text-[10px] flex items-center space-x-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>S1 Rekayasa Perangkat Lunak - Telkom University Purwokerto</span>
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-6 right-6 p-3 rounded-xl bg-slate-950/90 dark:bg-white/10 dark:backdrop-blur-md text-white shadow-lg border border-slate-800/80 dark:border-white/10 hover:bg-slate-900 dark:hover:bg-white/20 transition-all z-40 cursor-pointer animate-in fade-in slide-in-from-bottom-5 duration-200"
          title="Scroll ke Atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Project Expand Overlay Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />

    </div>
  );
}
