/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA, PERSONAL_INFO } from '../data';
import { Laptop, Compass, Award, Shield, CheckCircle, Palette, Braces, Database, GraduationCap, Users, Lightbulb, Workflow } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'Hardskill' | 'Softskill'>('Hardskill');

  const getIconForSkill = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('ui/ux') || lowerName.includes('figma')) return <Palette className="w-5 h-5 text-teal-600" />;
    if (lowerName.includes('front-end') || lowerName.includes('web')) return <Braces className="w-5 h-5 text-primary-600" />;
    if (lowerName.includes('laravel') || lowerName.includes('framework')) return <Laptop className="w-5 h-5 text-red-600" />;
    if (lowerName.includes('programming') || lowerName.includes('bahasa')) return <Laptop className="w-5 h-5 text-indigo-600" />;
    if (lowerName.includes('database') || lowerName.includes('mysql')) return <Database className="w-5 h-5 text-blue-600" />;
    if (lowerName.includes('design thinking')) return <Workflow className="w-5 h-5 text-teal-600" />;
    if (lowerName.includes('research') || lowerName.includes('proposal')) return <GraduationCap className="w-5 h-5 text-amber-600" />;
    
    // Softskills
    if (lowerName.includes('public') || lowerName.includes('komunikasi')) return <Compass className="w-5 h-5 text-teal-600" />;
    if (lowerName.includes('kreatif') || lowerName.includes('inovatif')) return <Lightbulb className="w-5 h-5 text-amber-500" />;
    if (lowerName.includes('leadership') || lowerName.includes('tanggung')) return <Award className="w-5 h-5 text-red-600" />;
    if (lowerName.includes('teamwork') || lowerName.includes('kolaborasi')) return <Users className="w-5 h-5 text-primary-600" />;
    
    return <CheckCircle className="w-5 h-5 text-slate-600" />;
  };

  const getLevelColor = (level: 'Advanced' | 'Intermediate' | 'Basic') => {
    switch (level) {
      case 'Advanced': return 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800/50';
      case 'Intermediate': return 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/50';
      case 'Basic': return 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const activeCategory = SKILLS_DATA.find((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-slate-900 relative transition-colors">
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
            Kompetensi & Keahlian
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2 transition-colors">
            Skill Set Profesional
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed transition-colors">
            Kombinasi kemampuan teknis (Hardskill) dan keterampilan manajerial (Softskill) untuk menciptakan solusi yang relevan dan berdampak luas.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl inline-flex space-x-1 border border-slate-200/60 dark:border-slate-700/60 shadow-inner transition-colors">
            <button
              id="skill-tab-hardskill"
              onClick={() => setActiveTab('Hardskill')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all ${
                activeTab === 'Hardskill'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Hardskill & Teknis
            </button>
            <button
              id="skill-tab-softskill"
              onClick={() => setActiveTab('Softskill')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all ${
                activeTab === 'Softskill'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Softskill & Karakter
            </button>
          </div>
        </div>

        {/* Skill Grid Layout */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activeCategory?.skills.map((skill, index) => (
            <div
              key={skill.name}
              id={`skill-card-${activeTab.toLowerCase()}-${index}`}
              className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100/80 dark:border-slate-700/50 p-6 rounded-2xl flex flex-col justify-between hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform">
                    {getIconForSkill(skill.name)}
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border uppercase leading-none transition-colors ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-950 dark:text-white leading-snug tracking-tight text-base group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Skill Bar Representation for Hardskill */}
              {activeTab === 'Hardskill' && (
                <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 transition-colors">
                  <div className="w-full bg-slate-200/60 dark:bg-slate-700/60 rounded-full h-1.5 overflow-hidden transition-colors">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        skill.level === 'Advanced' ? 'w-11/12 bg-teal-500' : 'w-3/4 bg-indigo-500'
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Informative Bento Section Footer */}
        <div className="mt-12 bg-gradient-to-tr from-primary-900 to-slate-900 dark:from-primary-950 dark:to-slate-950 text-white rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg border border-transparent dark:border-slate-800 transition-colors">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-[10px] font-mono tracking-widest text-teal-400 font-bold uppercase transition-colors">Human-Centered Design</span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight transition-colors">Menghubungkan Desain Pengalaman & Kode Program</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal transition-colors">
              Sebagai lulusan Software Engineering yang juga mendalami UI/UX Design (asisten praktikum Design Experience), Rezky memiliki kelebihan unik dalam merancang produk yang tidak hanya berstruktur kode bersih dan responsif, tetapi juga ramah bagi pengguna akhir.
            </p>
          </div>
          {PERSONAL_INFO.portfolioLink && (
            <a
              href={PERSONAL_INFO.portfolioLink}
              target="_blank"
              rel="noreferrer"
              id="skills-portfolio-drive"
              className="shrink-0 bg-white text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm hover:bg-slate-100 shadow-sm transition-colors"
            >
              Pelajari Pendekatan Saya
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
