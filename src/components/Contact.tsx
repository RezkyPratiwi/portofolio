/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin, Instagram, Send, ShieldAlert, CheckCircle, Trash2, Calendar, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);

  // Load saved messages from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('rezky_portfolio_messages');
    if (saved) {
      try {
        setSavedMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved messages', e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMessage: SavedMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      subject: subject || 'Kontak Umum',
      message,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newMessage, ...savedMessages];
    setSavedMessages(updated);
    localStorage.setItem('rezky_portfolio_messages', JSON.stringify(updated));

    // Clear form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSuccess(true);

    // Timeout success message
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const deleteMessage = (id: string) => {
    const updated = savedMessages.filter((msg) => msg.id !== id);
    setSavedMessages(updated);
    localStorage.setItem('rezky_portfolio_messages', JSON.stringify(updated));
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative transition-colors">
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
            Hubungi Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2 transition-colors">
            Mulai Diskusi & Kolaborasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed transition-colors">
            Punya gagasan proyek inovatif atau ingin mendiskusikan peluang kerja sama? Hubungi saya langsung melalui formulir atau kontak berikut.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contacts Info Panel (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tight transition-colors">Kontak & Media Sosial</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal transition-colors">
              Mari terhubung! Rezky siap bekerja sama secara luring maupun daring guna membantu riset produk digital, rancangan desain UI/UX, atau pemrograman web.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 transition-colors">
                <div className="p-2 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none mb-1 transition-colors">Lokasi Domisili</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-primary-200 dark:hover:border-primary-800/50 transition-all text-left block"
              >
                <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none mb-1 transition-colors">Email Resmi</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-all text-left block"
              >
                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block uppercase leading-none mb-1 transition-colors">WhatsApp Chat</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors">{PERSONAL_INFO.phone}</span>
                </div>
              </a>
            </div>

            <div className="flex space-x-2 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github"
                className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-xl text-[11px] sm:text-xs font-bold transition-colors shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin"
                className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl text-[11px] sm:text-xs font-bold transition-colors shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                id="contact-instagram"
                className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 p-3 rounded-xl text-[11px] sm:text-xs font-bold transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-500" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Form Panel (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 transition-colors"
          >
            <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tight transition-colors">Kirim Pesan Langsung</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-500 dark:text-slate-400 block transition-colors">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Nama Anda"
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl p-3 text-sm font-medium focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-xs font-bold text-slate-500 dark:text-slate-400 block transition-colors">Email Aktif *</label>
                  <input
                    type="email"
                    id="contact-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="nama@email.com"
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl p-3 text-sm font-medium focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 block transition-colors">Perihal / Subjek</label>
                <input
                  type="text"
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Diskusi Kerja / Pertanyaan"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl p-3 text-sm font-medium focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-xs font-bold text-slate-500 dark:text-slate-400 block transition-colors">Isi Pesan *</label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Tuliskan pesan atau gagasan kolaborasi Anda di sini..."
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl p-3 text-sm font-medium focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>

              {isSuccess && (
                <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-100 p-3 rounded-xl text-xs font-bold">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <span>Terima kasih! Pesan Anda telah disimulasikan dan disimpan secara lokal di bawah ini.</span>
                </div>
              )}

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-bold p-3.5 rounded-xl text-sm transition-all shadow-md active:scale-98"
              >
                <span>Kirim Pesan</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Simulated Inbox representation to prove local state and persistence */}
            {savedMessages.length > 0 && (
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 space-y-3 transition-colors">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Pesan Masuk (Disimpan Lokal)</h4>
                  <button
                    onClick={() => {
                      localStorage.removeItem('rezky_portfolio_messages');
                      setSavedMessages([]);
                    }}
                    id="contact-clear-messages"
                    className="text-[10px] font-bold text-rose-600 dark:text-rose-500 hover:underline flex items-center space-x-1 transition-colors"
                  >
                    <span>Bersihkan Semua</span>
                  </button>
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {savedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      id={`local-message-card-${msg.id}`}
                      className="bg-white dark:bg-slate-800 border border-slate-100/80 dark:border-slate-700/80 p-3 rounded-xl relative group shadow-3xs transition-colors"
                    >
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        id={`local-message-delete-${msg.id}`}
                        className="absolute top-2.5 right-2.5 text-slate-300 dark:text-slate-600 hover:text-rose-600 dark:hover:text-rose-500 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="space-y-1 pr-6">
                        <div className="flex items-center space-x-1.5 flex-wrap">
                          <span className="font-bold text-xs text-slate-900 dark:text-white transition-colors">{msg.name}</span>
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 transition-colors">{msg.email}</span>
                        </div>
                        <span className="block text-[10px] font-bold text-primary-600 dark:text-primary-400 transition-colors">{msg.subject}</span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed text-justify transition-colors">{msg.message}</p>
                        <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 pt-1 flex items-center space-x-1 transition-colors">
                          <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500 transition-colors" />
                          <span>{msg.date}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
