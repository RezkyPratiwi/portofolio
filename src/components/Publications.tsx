/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PUBLICATION_DATA } from '../data';
import { FileSpreadsheet, Copyright, BookmarkCheck, Calendar, Globe, ShieldAlert, Award } from 'lucide-react';

export default function Publications() {
  return (
    <section id="publikasi" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative custom-grid-bg transition-colors">
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
            Sertifikasi & Karya Ilmiah
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2 transition-colors">
            Publikasi & Hak Kekayaan Intelektual
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed transition-colors">
            Menunjukkan rekam jejak formal perlindungan kekayaan intelektual (HKI) serta publikasi artikel ilmiah hasil karya riset yang berdaya guna.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATION_DATA.map((pub, index) => {
            const isHKI = pub.type === 'HKI';
            return (
              <motion.div
                key={pub.id}
                id={`publication-card-${pub.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-slate-200 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Badge Section */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border leading-none transition-colors ${
                        isHKI
                          ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50'
                          : 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-primary-200 dark:border-primary-800/50'
                      }`}
                    >
                      {pub.type === 'HKI' ? 'Sertifikasi HKI' : 'Jurnal Ilmiah'}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-3xs group-hover:scale-105 transition-all ${
                        isHKI ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      }`}
                    >
                      {isHKI ? <Copyright className="w-5 h-5" /> : <FileSpreadsheet className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 transition-colors">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 transition-colors" />
                    <span>Tahun {pub.year}</span>
                  </div>

                  {/* Title & Organization Details */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 dark:text-white leading-snug tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-justify">
                      {pub.link ? (
                        <a href={pub.link} target="_blank" rel="noreferrer" className="hover:underline flex items-start gap-1.5">
                          <span>{pub.title}</span>
                          <Globe className="w-3.5 h-3.5 mt-1 shrink-0 opacity-70" />
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono transition-colors">
                      Penerbit: {pub.publisher}
                    </p>
                  </div>

                  {/* Brief Information */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-justify transition-colors">
                    {pub.description}
                  </p>
                </div>

                {/* Footer Check Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 transition-colors">
                  <span className="flex items-center space-x-1 font-bold text-emerald-600 dark:text-emerald-400 uppercase transition-colors">
                    <BookmarkCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 transition-colors" />
                    <span>Terdaftar Resmi</span>
                  </span>
                  <span>{isHKI ? 'Kemenkumham RI' : 'Buletin Gemastik'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
