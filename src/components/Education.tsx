/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { EDUCATION_DATA } from '../data';
import { GraduationCap, BookOpen, Calendar, Award, Building } from 'lucide-react';

export default function Education() {
  return (
    <section id="pendidikan" className="py-20 md:py-28 bg-white dark:bg-slate-900 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase transition-colors">
            Riwayat Pendidikan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2 transition-colors">
            Latar Belakang Akademik
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed transition-colors">
            Menelusuri pondasi pengetahuan formal Rezky dari jenjang sekolah menengah hingga menyelesaikan Sarjana Komputer di Telkom University.
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION_DATA.map((edu, index) => {
            const isTelkom = edu.institution.toLowerCase().includes('telkom');
            return (
              <motion.div
                key={edu.id}
                id={`education-card-${edu.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100/80 dark:border-slate-700/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar Icon & Period */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 transition-colors" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400`}>
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-extrabold text-slate-950 dark:text-white leading-snug tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {edu.institution}
                    </h3>
                    
                    <div className="flex flex-col text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono space-y-0.5 transition-colors">
                      <span className="text-slate-700 dark:text-slate-300 transition-colors">{edu.degree}</span>
                      <span>{edu.major}</span>
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  {edu.details && (
                    <ul className="space-y-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 transition-colors">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-justify transition-colors">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Institution Stamp */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 transition-colors">
                  <span className="flex items-center space-x-1 font-bold text-teal-600 dark:text-teal-400 uppercase transition-colors">
                    <BookOpen className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0 transition-colors" />
                    <span>{isTelkom ? 'S1 Terapan RPL' : 'Sains & IPA'}</span>
                  </span>
                  <span>{isTelkom ? 'Akreditasi Unggul' : 'Pendidikan Formal'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
