/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCE_DATA } from '../data';
import { Briefcase, Users, GraduationCap, ChevronDown, ChevronUp, Calendar, MapPin, Building2 } from 'lucide-react';

export default function Experience() {
  const [filter, setFilter] = useState<'all' | 'internship_academic' | 'organization'>('all');
  const [expandedIds, setExpandedIds] = useState<string[]>(['exp-1', 'exp-2', 'exp-3']); // expand top 3 by default

  const toggleExpand = (id: string) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const getIconForType = (type: 'internship' | 'organization' | 'academic') => {
    switch (type) {
      case 'internship':
        return <Briefcase className="w-5 h-5 text-teal-600" />;
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'organization':
        return <Users className="w-5 h-5 text-primary-600" />;
    }
  };

  const getTypeBadge = (type: 'internship' | 'organization' | 'academic') => {
    switch (type) {
      case 'internship':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800/50 uppercase tracking-wider transition-colors">Magang Kerja</span>;
      case 'academic':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 uppercase tracking-wider transition-colors">Akademik</span>;
      case 'organization':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-800/50 uppercase tracking-wider transition-colors">Organisasi</span>;
    }
  };

  const filteredExperiences = EXPERIENCE_DATA.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'internship_academic') return exp.type === 'internship' || exp.type === 'academic';
    return exp.type === 'organization';
  });

  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative custom-grid-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase transition-colors">
            Perjalanan Karir
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2 transition-colors">
            Pengalaman Kerja & Organisasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed transition-colors">
            Menelusuri kontribusi Rezky dalam pengembangan frontend di instansi pemerintah, asisten mata kuliah, serta kepemimpinan strategis sebagai Ketua Himpunan.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            id="exp-filter-all"
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
              filter === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            Semua Riwayat
          </button>
          <button
            id="exp-filter-internship-academic"
            onClick={() => setFilter('internship_academic')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
              filter === 'internship_academic'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            Magang & Praktikum
          </button>
          <button
            id="exp-filter-organization"
            onClick={() => setFilter('organization')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
              filter === 'organization'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            Organisasi Kampus
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200/80 dark:border-slate-800/80 ml-4 md:ml-32 space-y-8 pb-4 transition-colors">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => {
              const isExpanded = expandedIds.includes(exp.id);
              return (
                <motion.div
                  key={exp.id}
                  id={`exp-timeline-item-${exp.id}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative pl-6 md:pl-10"
                >
                  {/* Timeline Node Point with Icon */}
                  <span className="absolute -left-[21px] top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 shadow-3xs group-hover:border-primary-500 dark:group-hover:border-primary-500 transition-colors z-10">
                    {getIconForType(exp.type)}
                  </span>

                  {/* Relative Sidebar Date on Desktop Only */}
                  <span className="hidden md:block absolute right-full top-3.5 mr-10 text-right min-w-[200px]">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{exp.period}</span>
                    </span>
                  </span>

                  {/* Experience Card */}
                  <div className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-5 md:p-6 shadow-3xs hover:shadow-xs transition-shadow">
                    
                    {/* Header Details */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-1">
                        {/* Mobile Period Indicator */}
                        <div className="flex items-center space-x-2 md:hidden mb-2">
                          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 transition-colors">
                            <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                            <span>{exp.period}</span>
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-snug transition-colors">
                            {exp.role}
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors">
                          <span className="inline-flex items-center space-x-1">
                            <Building2 className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                            <span>{exp.organization}</span>
                          </span>
                          {exp.location && (
                            <span className="inline-flex items-center space-x-1 text-slate-400 dark:text-slate-500 font-normal transition-colors">
                              <span>•</span>
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{exp.location}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0">
                        {getTypeBadge(exp.type)}
                      </div>
                    </div>

                    {/* Brief Intro */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 leading-relaxed font-normal transition-colors">
                      {exp.description}
                    </p>

                    {/* Expand Trigger Button */}
                    <button
                      id={`exp-collapse-btn-${exp.id}`}
                      onClick={() => toggleExpand(exp.id)}
                      className="mt-4 inline-flex items-center space-x-1.5 text-xs font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none transition-colors"
                    >
                      <span>{isExpanded ? 'Sembunyikan Deskripsi & Tugas' : 'Lihat Detail Tugas & Hasil'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Collapsible Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 space-y-2.5 transition-colors">
                            <span className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Tanggung Jawab & Kontribusi:</span>
                            <ul className="space-y-2">
                              {exp.achievements.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-justify transition-colors">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
