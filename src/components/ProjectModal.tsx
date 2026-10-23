/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Calendar, User, Code2, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 transition-colors">
        
        {/* Header Ribbon / Image Mockup Backdrop */}
        <div className="bg-gradient-to-tr from-primary-900 to-slate-900 dark:from-primary-950 dark:to-slate-950 text-white p-6 sm:p-8 relative shrink-0 transition-colors">
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="space-y-2 max-w-[90%]">
            <span className="inline-flex px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-teal-400 dark:bg-teal-500 text-slate-950 dark:text-slate-900 leading-none transition-colors">
              {project.type}
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Area - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 transition-colors">
              <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 transition-colors" />
              <div className="min-w-0">
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none transition-colors">Periode</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5 transition-colors">{project.period}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 transition-colors">
              <User className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 transition-colors" />
              <div className="min-w-0">
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none transition-colors">Peran Utama</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5 transition-colors">{project.role}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 transition-colors">
              <Award className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 transition-colors" />
              <div className="min-w-0">
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none transition-colors">Kategori Karya</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5 transition-colors">Software Dev</span>
              </div>
            </div>
          </div>

          {/* Project Image Mockup (If any) */}
          {project.image && (
            <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/50 shadow-sm">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          )}

          {/* Project Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Tentang Proyek</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal text-justify transition-colors">
              {project.description}
            </p>
          </div>

          {/* Project Deliverables / Responsibilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Detail Implementasi & Tugas</h4>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50 space-y-3 transition-colors">
              {project.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal transition-colors">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-500 shrink-0 transition-colors" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Teknologi & Tools</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tool) => (
                <span
                  key={tool}
                  id={`modal-tech-badge-${tool.toLowerCase()}`}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 font-mono transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Accomplishments / HKI (If any) */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="space-y-2 border-t border-slate-100 dark:border-slate-700/50 pt-4 transition-colors">
              <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Pencapaian Penting</h4>
              <div className="space-y-1.5">
                {project.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-800 dark:text-emerald-100 font-semibold bg-emerald-50/50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800/50 p-2.5 rounded-xl transition-colors">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 transition-colors" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700/50 flex flex-wrap items-center justify-end gap-3 shrink-0 transition-colors">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Tutup Jendela
          </button>
          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm hover:shadow transition-all"
            >
              <span>
                {project.link.includes('pinjam.bpppambon.com')
                  ? 'Kunjungi Website SiPinjam'
                  : project.link.includes('bpppambon.com') || project.link.includes('sipintar')
                  ? 'Kunjungi Website SiPintar'
                  : project.link.includes('detail')
                  ? 'Baca Berita Resmi'
                  : 'Kunjungi Website'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
