/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECT_DATA } from '../data';
import { Project } from '../types';
import { Award, Code2, Layers, Search, FolderKanban, ArrowUpRight, HelpCircle, Laptop } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'competition' | 'platform'>('all');

  const getIconForCategory = (type: string) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('kompetisi') || lowerType.includes('ajang')) return <Award className="w-5 h-5 text-amber-500" />;
    if (lowerType.includes('pengabdian') || lowerType.includes('proyek')) return <Code2 className="w-5 h-5 text-primary-500" />;
    return <Layers className="w-5 h-5 text-teal-500" />;
  };

  const filteredProjects = PROJECT_DATA.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'competition') return proj.type.toLowerCase().includes('kompetisi') || proj.type.toLowerCase().includes('ajang') || proj.title.toLowerCase().includes('gemastik') || proj.title.toLowerCase().includes('innovilage') || proj.title.toLowerCase().includes('krenova');
    return proj.type.toLowerCase().includes('pengabdian') || proj.type.toLowerCase().includes('instansi') || proj.type.toLowerCase().includes('kolaborasi');
  });

  return (
    <section id="proyek" className="py-20 md:py-28 bg-white dark:bg-slate-900 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase transition-colors">
            Hasil Karya & Kreasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2 transition-colors">
            Proyek Pilihan & Kompetisi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed transition-colors">
            Menampilkan inovasi aplikasi yang telah dirancang dan dikembangkan, mulai dari pemberdayaan digital masyarakat desa, platform GIS & AI, hingga kompetisi bergengsi tingkat nasional.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl inline-flex border border-slate-200/60 dark:border-slate-700/60 transition-colors">
            <button
              id="proj-filter-all"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Semua Karya
            </button>
            <button
              id="proj-filter-competition"
              onClick={() => setFilter('competition')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'competition'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Kompetisi & Ajang
            </button>
            <button
              id="proj-filter-platform"
              onClick={() => setFilter('platform')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'platform'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Platform & Instansi
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                id={`project-grid-card-${proj.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden flex flex-col justify-between bg-slate-50 dark:bg-slate-800/50 border border-slate-100/80 dark:border-slate-700/50 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md transition-all cursor-pointer"
                onClick={() => onSelectProject(proj)}
              >
                {/* Background Image Blend */}
                {proj.image && (
                  <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none mix-blend-multiply dark:mix-blend-screen">
                    <img src={proj.image} alt="" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
                  </div>
                )}

                <div className="relative z-10 space-y-4">

                  {/* Category Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded transition-colors">
                      {proj.period}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform">
                      {getIconForCategory(proj.type)}
                    </div>
                  </div>

                  {/* Info Details */}
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-slate-950 dark:text-white text-base sm:text-lg leading-snug tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex items-center justify-between">
                      <span className="truncate mr-2">{proj.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <span className="block text-[10px] font-mono font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider transition-colors">{proj.role}</span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-justify line-clamp-3 transition-colors">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-wrap gap-1 transition-colors">
                  {proj.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      id={`proj-tech-badge-${proj.id}-${tech.toLowerCase()}`}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent transition-colors">
                      +{proj.tech.length - 4}
                    </span>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
