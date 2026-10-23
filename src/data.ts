/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Education, Experience, Publication, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Rezky Pratiwi, S.Kom.',
  title: 'Software Engineering Graduate | Frontend Developer & UI/UX Designer',
  location: 'Purwokerto Selatan, Banyumas, Jawa Tengah',
  phone: '(+62) 853-4257-5424',
  email: 'rezkyprat30@gmail.com',
  campusEmail: '2211104029@ittelkom-pwt.ac.id',
  linkedin: 'https://www.linkedin.com/in/rezky-pratiwi-8a7046252/',
  instagram: 'https://instagram.com/rezprtt/',
  github: 'https://github.com/RezkyPratiwi',
  portfolioLink: 'https://portofoliorezkypratiwi.vercel.app/',
  bio: 'Lulusan S1 Software Engineering Telkom University Purwokerto dengan predikat Cumlaude. Memiliki keahlian dalam pengembangan web menggunakan Laravel dan React, serta kompetensi di bidang UI/UX Design dan desain grafis. Terampil menggunakan Laravel, React, PHP, JavaScript, MySQL, Git, Figma, dan Canva untuk mendukung proses pengembangan produk digital dari tahap perancangan hingga implementasi. Aktif terlibat dalam berbagai proyek teknologi dan organisasi yang mengasah kemampuan kolaborasi tim, analisis kebutuhan pengguna, problem solving, serta penerapan pendekatan human-centered design. Siap berkontribusi dalam pengembangan solusi digital yang inovatif dan berdampak.',
};

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu-1',
    institution: 'Telkom University Purwokerto',
    period: '2022 – 2026',
    degree: 'Sarjana Komputer (S.Kom.)',
    major: 'S1 Rekayasa Perangkat Lunak (Software Engineering)',
    details: [
      'Lulus dengan predikat Cumlaude',
      'Aktif dalam Himpunan Mahasiswa Software Engineering sebagai Ketua',
      'Terlibat dalam proyek penelitian, pengabdian masyarakat (Abdimas), dan kompetisi nasional (Gemastik, Innovilage)'
    ]
  },
  {
    id: 'edu-2',
    institution: 'UPT SMA Negeri 7 Wajo',
    period: '2019 – 2022',
    degree: 'Pendidikan Menengah Atas',
    major: 'Ilmu Pengetahuan Alam (IPA)',
    details: [
      'Aktif dalam kegiatan sekolah dan kepemimpinan siswa'
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-bppp',
    role: 'Staff Operasional Komputer dan Pelayanan Publik (Maganghub KEMENAKER)',
    organization: 'Balai Pelatihan dan Penyuluhan Perikanan (BPPP) Ambon | KKP RI',
    period: 'Agu 2026 – Sekarang',
    type: 'internship',
    location: 'Ambon, Maluku',
    description: 'Mendukung operasional komputer, pelayanan publik, pengembangan sistem digital instansi (seperti SiPintar dan SiPinjam), serta komunikasi dan publikasi digital di lingkungan Kementerian Kelautan dan Perikanan RI.',
    achievements: [
      'Meredesign alur pengguna (user flow) pada sistem web peminjaman sarana dan prasarana (SiPinjam) untuk meningkatkan kejelasan proses dan efisiensi birokrasi, termasuk mekanisme approval menggunakan tanda tangan hasil pemindaian digital.',
      'Berkontribusi dalam pengembangan aplikasi SiPintar, termasuk implementasi JSON Web Token (JWT) untuk mendukung mekanisme autentikasi aplikasi yang aman.',
      'Mempelajari dan menerapkan teknologi modern dalam pengembangan aplikasi web dan mobile guna menunjang pelayanan informasi instansi.',
      'Mendukung pengelolaan komunikasi dan publikasi digital melalui perancangan materi visual, produksi konten audiovisual, serta pengembangan media informasi instansi.',
      'Melaksanakan proses produksi konten digital dari tahap perencanaan konsep, pengambilan materi, hingga penyuntingan untuk mendukung penyampaian informasi dan pelayanan kepada publik.',
      'Mendukung operasional teknologi informasi dan kebutuhan teknis kegiatan instansi serta berkolaborasi dengan mentor dalam pelaksanaan proyek dan pemecahan masalah teknis.'
    ]
  },
  {
    id: 'exp-1',
    role: 'Asisten Praktikum Design Experience',
    organization: 'Program Studi Bisnis Digital Telkom University Purwokerto',
    period: 'Feb 2026 – Jun 2026',
    type: 'academic',
    location: 'Purwokerto',
    description: 'Mendampingi dan membimbing mahasiswa dalam memahami konsep dan penerapan desain yang berpusat pada pengguna (User-Centered Design).',
    achievements: [
      'Membimbing mahasiswa dalam memahami proses desain, mulai dari identifikasi permasalahan, stakeholder mapping, penyusunan Value Proposition Canvas, hingga pembuatan prototipe.',
      'Memberikan pendampingan dan konsultasi kepada mahasiswa selama pelaksanaan praktikum, diskusi kelompok, serta penyelesaian tugas dan proyek desain.',
      'Membantu dosen dalam mempersiapkan materi praktikum, evaluasi tugas, serta penilaian hasil presentasi dan proyek mahasiswa.',
      'Memfasilitasi kegiatan praktikum yang berfokus pada pengembangan solusi digital berdasarkan kebutuhan pengguna melalui pendekatan design thinking.',
      'Memberikan umpan balik terhadap hasil desain dan prototipe mahasiswa guna meningkatkan kualitas solusi yang dikembangkan.',
      'Mendukung kelancaran pelaksanaan kegiatan praktikum serta memastikan mahasiswa memahami konsep desain pengalaman pengguna (User Experience) dan antarmuka pengguna (User Interface) secara efektif.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Magang Front-End Developer',
    organization: 'Dinas Komunikasi dan Informatika (DISKOMINFO) Kabupaten Wonosobo',
    period: 'Sep 2025 – Okt 2025',
    type: 'internship',
    location: 'Wonosobo',
    description: 'Mengembangkan dan mengimplementasikan antarmuka (Front-End) sistem informasi berbasis web di lingkungan DISKOMINFO Kabupaten Wonosobo.',
    achievements: [
      'Mengembangkan dan mengimplementasikan antarmuka (Front-End) website Komda HAM Kabupaten Wonosobo menggunakan framework Laravel, dengan fokus pada kemudahan akses, konsistensi tampilan, dan kenyamanan pengguna.',
      'Terlibat dalam proses perancangan aplikasi ketahanan pangan di DISKOMINFO, mulai dari penyusunan konsep, kebutuhan sistem, hingga desain antarmuka pengguna.',
      'Berkolaborasi dengan tim internal untuk memastikan integrasi Front-End dan Back-End berjalan dengan baik sesuai kebutuhan sistem.',
      'Berpartisipasi aktif dalam berbagai kegiatan dan agenda resmi DISKOMINFO Kabupaten Wonosobo, termasuk rapat, sosialisasi, dan kegiatan pendukung lainnya.',
      'Mendukung penerapan teknologi informasi sebagai sarana pelayanan publik dan pengelolaan data pemerintahan yang lebih efektif.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Ketua Himpunan Mahasiswa Software Engineering',
    organization: 'Himpunan Mahasiswa Software Engineering (HMSE)',
    period: 'Sep 2024 – Jan 2025',
    type: 'organization',
    location: 'Telkom University Purwokerto',
    description: 'Memimpin organisasi kemahasiswaan yang bertujuan mengembangkan potensi akademik, profesional, dan sosial mahasiswa program studi Software Engineering.',
    achievements: [
      'Mengelola dan mengawasi seluruh program kerja himpunan, termasuk kegiatan akademik, pelatihan teknis, seminar, dan kegiatan pengembangan soft skill.',
      'Memimpin tim eksekutif dalam merumuskan visi strategis organisasi untuk mendukung kemajuan anggota.',
      'Menjadi penghubung antara mahasiswa, dosen, dan pihak fakultas untuk menyampaikan aspirasi serta memperkuat hubungan komunikasi.',
      'Memotivasi anggota untuk berpartisipasi aktif dalam kegiatan yang berkontribusi pada pengembangan komunitas Software Engineering.',
      'Mengatur kolaborasi dengan organisasi eksternal untuk membangun jaringan profesional yang bermanfaat bagi mahasiswa.'
    ]
  },
  {
    id: 'exp-4',
    role: 'Staff Divisi Pemberdayaan Anggota',
    organization: 'Himpunan Mahasiswa Software Engineering (HMSE)',
    period: 'Jul 2023 – Sep 2024',
    type: 'organization',
    location: 'Telkom University Purwokerto',
    description: 'Mengelola program pembinaan, kepemimpinan, dan keakraban antar-anggota himpunan serta mahasiswa baru.',
    achievements: [
      'Memimpin dan mengorganisir acara malam keakraban untuk pengurus organisasi, memastikan seluruh kegiatan berjalan lancar dan sesuai rencana.',
      'Bertanggung jawab sebagai koordinator acara yang menyusun dan mengelola rangkaian kegiatan Latihan Dasar Kepemimpinan dan Malam Keakraban untuk lebih dari 80 mahasiswa baru jurusan Rekayasa Perangkat Lunak.',
      'Mengelola komunikasi dan hubungan masyarakat untuk acara Dies Natalies yang mencakup seminar nasional hibrid, diikuti oleh lebih dari 300 peserta.',
      'Merencanakan dan mengkoordinasi acara buka puasa bersama yang melibatkan seluruh dosen, mahasiswa RPL, dan Yayasan Panti Asuhan Harapan Mulia.',
      'Bertanggung jawab atas komunikasi dan promosi untuk pameran Rekayasa Perangkat Lunak.',
      'Menjadi Master of Ceremony (MC) di setiap kegiatan yang dilaksanakan.'
    ]
  },
  {
    id: 'exp-5',
    role: 'Staff Divisi Humas',
    organization: 'Telkom Orientation Days',
    period: 'Jul 2024 – Sep 2024',
    type: 'organization',
    location: 'Purwokerto',
    description: 'Menjalin komunikasi yang efektif antara pihak panitia orientasi, himpunan, sponsor, dan bintang tamu.',
    achievements: [
      'Berperan sebagai penghubung antara panitia Telkom Orientation Days dan Himpunan Mahasiswa, memastikan koordinasi yang lancar terkait partisipasi himpunan.',
      'Mengelola komunikasi dengan calon sponsor untuk membangun kerja sama yang saling menguntungkan, termasuk negosiasi proposal.',
      'Bertindak sebagai Liaison Officer (LO) untuk mendampingi dan memenuhi kebutuhan bintang tamu selama acara berlangsung.'
    ]
  },
  {
    id: 'exp-6',
    role: 'Staff Divisi Publikasi, Dekorasi dan Dokumentasi',
    organization: 'PEMIRA FIF',
    period: 'Jun 2023 – Jul 2023',
    type: 'organization',
    location: 'Purwokerto',
    description: 'Mendukung visualisasi publikasi dan mengelola media sosial selama Pemilihan Raya Fakultas Informatika.',
    achievements: [
      'Berkontribusi dalam membuat desain lanyard panitia.',
      'Mengelola postingan Instagram PEMIRA FIF untuk meningkatkan keterlibatan pemilih.'
    ]
  },
  {
    id: 'exp-7',
    role: 'Staff Advokasi dan Kajian Strategis Internal',
    organization: 'Internship HMSE',
    period: 'Mar 2023 – Jun 2023',
    type: 'organization',
    location: 'Purwokerto',
    description: 'Mendukung advokasi mahasiswa baru serta kajian isu strategis di internal program studi.',
    achievements: [
      'Membantu merencanakan dan mengoordinasikan program kerja bincang santai bersama seluruh mahasiswa baru.'
    ]
  },
  {
    id: 'exp-8',
    role: 'Staff Acara',
    organization: 'Software Engineering Buka Bersama (SERBU)',
    period: 'Mar 2023',
    type: 'organization',
    location: 'Purwokerto',
    description: 'Mengatur seluruh jalannya acara kebersamaan dan kegiatan sosial ramadan.',
    achievements: [
      'Mengatur seluruh aspek acara, mulai dari logistik hingga penyusunan acara untuk menciptakan momen kebersamaan yang bermakna.',
      'Berkontribusi sebagai moderator dalam talkshow seputar MSIB (Magang & Studi Independen Bersertifikat).'
    ]
  },
  {
    id: 'exp-9',
    role: 'Staff Divisi Kominfo',
    organization: 'Acrepes BEM FIF',
    period: 'Nov 2022 – Feb 2023',
    type: 'organization',
    location: 'Purwokerto',
    description: 'Membuat desain media promosi dan informasi kegiatan kemahasiswaan.',
    achievements: [
      'Berkontribusi dalam membuat desain poster setiap kegiatan.',
      'Mengikuti pelatihan peningkatan skill yang dilaksanakan oleh BEM Fakultas Informatika.'
    ]
  },
  {
    id: 'exp-10',
    role: 'Staff Divisi Publikasi, Dekorasi dan Dokumentasi',
    organization: 'PEMIRA Telkom University Purwokerto',
    period: 'Nov 2022 – Des 2022',
    type: 'organization',
    location: 'Purwokerto',
    description: 'Mendukung publikasi media sosial dan operasional teknis kegiatan debat.',
    achievements: [
      'Berkontribusi dalam membuat desain postingan Instagram feed dan story.',
      'Bertanggung jawab untuk memastikan kelancaran teknis dan operasional dari acara debat terbuka.'
    ]
  }
];

export const PUBLICATION_DATA: Publication[] = [
  {
    id: 'pub-1',
    title: 'Jurnal Digitalisasi Pariwisata Barlingmascakeb: Aplikasi Berbasis Web Meningkatkan Ekspos Wisata dan Destinasi Wisata Baru',
    year: '2023',
    publisher: 'Buletin Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi Dan Komunikasi (Gemastik 2023)',
    type: 'Jurnal',
    description: 'Karya ilmiah hasil pengembangan sistem informasi pariwisata terpadu untuk wilayah Barlingmascakeb (Banjarnegara, Purbalingga, Banyumas, Cilacap, Kebumen) guna meningkatkan eksposur destinasi wisata baru.',
    link: 'https://buletingemastik.id/index.php/bg/article/view/202404.013'
  },
  {
    id: 'pub-2',
    title: 'HKI - Ecoscope - Aplikasi Kota Cerdas Berbasis GIS dan AI untuk Ketahanan Pangan dan Pengurangan Risiko Bencana',
    year: '2025',
    publisher: 'Kementerian Hukum dan Hak Asasi Manusia (Kemenkumham RI)',
    type: 'HKI',
    description: 'Hak Kekayaan Intelektual atas pembuatan Aplikasi Kota Cerdas Berbasis GIS dan AI untuk mendukung Ketahanan Pangan dan Pengurangan Risiko Bencana di wilayah Kabupaten Wonosobo, berkolaborasi dengan DISKOMINFO Wonosobo.'
  },
  {
    id: 'pub-3',
    title: 'HKI - DISA (Digitalisasi Pariwisata)',
    year: '2023',
    publisher: 'Kementerian Hukum dan Hak Asasi Manusia (Kemenkumham RI)',
    type: 'HKI',
    description: 'Hak Kekayaan Intelektual atas perancangan dan implementasi aplikasi informasi pariwisata di Wilayah BARLINGMASCAKEB (DISA) yang diikutkan dalam seleksi ajang Krenova Banyumas.'
  }
];

export const PROJECT_DATA: Project[] = [
  {
    id: 'proj-sipintar',
    title: 'SiPintar - Portal Layanan & Pelatihan BPPP Ambon',
    type: 'Platform & Layanan Publik (KKP RI)',
    period: 'Agu 2026 – Sekarang',
    role: 'Full-Stack Developer & UI/UX Designer',
    description: 'Sistem Informasi Pelatihan Terpadu (SIPINTAR v2) Balai Pelatihan dan Penyuluhan Perikanan (BPPP) Ambon di bawah Kementerian Kelautan dan Perikanan RI. Menyediakan layanan pendaftaran diklat perikanan, verifikasi keaslian sertifikat berbasis barcode, tracking status permohonan, dan sistem informasi kediklatan aparatur serta masyarakat.',
    details: [
      'Mengembangkan arsitektur web modular dengan implementasi autentikasi JWT (JSON Web Token) yang aman dan teruji.',
      'Merancang antarmuka ramah pengguna (UI/UX) untuk kemudahan navigasi publik, pengecekan keaslian sertifikat diklat, dan informasi jadwal pelatihan.',
      'Mengoptimalkan responsivitas layout dan kecepatan akses portal di berbagai perangkat desktop maupun mobile.',
      'Mendukung keterbukaan informasi dan digitalisasi pelayanan kediklatan Kementerian Kelautan dan Perikanan RI.'
    ],
    tech: ['PHP', 'Laravel', 'JWT Authentication', 'MySQL', 'Bootstrap 5', 'UI/UX Design', 'Figma'],
    image: '/sipintar profile.png',
    link: 'https://sipintar.bpppambon.com/',
    achievements: [
      'Website resmi beroperasi aktif melayani peserta pelatihan kelautan dan perikanan di seluruh Indonesia.',
      'Implementasi sistem verifikasi sertifikat digital dan autentikasi token JWT yang andal.'
    ]
  },
  {
    id: 'proj-sipinjam',
    title: 'SiPinjam - Sistem Peminjaman Sarpras BPPP Ambon',
    type: 'Sistem Informasi & Layanan Internal (KKP RI)',
    period: 'Agu 2026 – Sekarang',
    role: 'Frontend Developer & UI/UX Designer',
    description: 'Aplikasi berbasis web untuk digitalisasi tata kelola dan permohonan peminjaman sarana prasarana serta fasilitas kediklatan di Balai Pelatihan dan Penyuluhan Perikanan (BPPP) Ambon secara transparan, akuntabel, dan terstruktur.',
    details: [
      'Meredesign alur pengguna (user flow) sistem peminjaman sarana dan prasarana agar proses birokrasi peminjaman menjadi lebih ringkas dan mudah dipahami pemohon.',
      'Mengimplementasikan mekanisme verifikasi dan approval persetujuan peminjaman menggunakan tanda tangan hasil pemindaian digital.',
      'Merancang antarmuka dashboard monitoring ketersediaan sarana, jadwal peminjaman, serta status verifikasi permohonan inventaris instansi.',
      'Memastikan integrasi antarmuka yang responsif, rapi, dan konsisten dengan identitas visual instansi BPPP Ambon.'
    ],
    tech: ['PHP', 'Laravel', 'UI/UX Redesign', 'Digital Signature', 'MySQL', 'Bootstrap 5', 'Figma'],
    image: '/sipinjam.png',
    link: 'https://pinjam.bpppambon.com/',
    achievements: [
      'Mempercepat waktu pemrosesan dan tracking status peminjaman inventaris instansi secara real-time.',
      'Penerapan validasi tanda tangan digital yang sah untuk alur persetujuan peminjaman sarana dan prasarana.'
    ]
  },
  {
    id: 'proj-1',
    title: 'Platform Analisis Ketahanan Pangan (Abdimas)',
    type: 'Pengabdian Masyarakat (Abdimas)',
    period: '2025',
    role: 'Full-Stack / UI-UX Designer',
    description: 'Platform analisis ketahanan pangan yang digunakan untuk mengelola, menganalisis, dan memvisualisasikan data pertanian secara terstruktur di Desa Kejajar, Kabupaten Wonosobo.',
    details: [
      'Terlibat dalam perancangan dan pengembangan platform berbasis web yang memvisualisasikan data pertanian desa.',
      'Mendukung proses analisis kebutuhan pengguna secara langsung bersama petani dan pemangku kepentingan desa untuk memastikan relevansi sistem.',
      'Melakukan sosialisasi, pendampingan penggunaan platform, serta menjalin kemitraan strategis dengan DISKOMINFO Wonosobo.'
    ],
    tech: ['Laravel', 'GIS', 'MySQL', 'Figma', 'User Research'],
    link: 'https://diskominfo.wonosobokab.go.id/detail/diskominfo-wonosobo-bekerja-sama-dengan-mahasiswa-program-studi-s1-software-engineering-telkom-university-purwokerto-luncurkan-aplikasi-ecoscope-dorong-ketahanan-pangan-berbasis-data',
    achievements: [
      'Berhasil mengimplementasikan sistem yang digunakan oleh pemangku kepentingan di Desa Kejajar.',
      'Mendapatkan kemitraan langsung dengan DISKOMINFO Wonosobo.'
    ]
  },
  {
    id: 'proj-2',
    title: 'Bridge Village - Digitalisasi Pariwisata (Innovilage)',
    type: 'Kompetisi Sosial-Teknologi (Innovilage 2023)',
    period: 'Nov 2023 – Des 2023',
    role: 'Frontend Developer & UI/UX Designer',
    description: 'Aplikasi berbasis website yang dirancang untuk membantu pemetaan, promosi, dan pengembangan pariwisata di Desa Serayu Larangan, Kabupaten Purbalingga.',
    details: [
      'Merancang arsitektur informasi dan desain antarmuka pengguna (UI/UX) yang intuitif untuk warga desa dan pelancong.',
      'Mengembangkan frontend website menggunakan framework Laravel Blade dan Tailwind CSS.',
      'Membantu meningkatkan eksposur desa wisata baru lewat pemetaan potensi lokal secara digital.'
    ],
    tech: ['Laravel', 'Tailwind CSS', 'Figma', 'PHP', 'Canva'],
    achievements: [
      'Pendanaan/Partisipasi aktif dalam ajang Innovilage 2023 tingkat nasional.',
      'Implementasi nyata platform digital pariwisata di Desa Serayu Larangan.'
    ]
  },
  {
    id: 'proj-3',
    title: 'DISA - Digitalisasi Pariwisata Barlingmascakeb (Krenova)',
    type: 'Kompetisi Inovasi Daerah (Krenova Banyumas)',
    period: 'Okt 2023',
    role: 'Frontend Developer & UI/UX Designer',
    description: 'Aplikasi informasi pariwisata terintegrasi untuk wilayah Banjarnegara, Purbalingga, Banyumas, Cilacap, Kebumen (BARLINGMASCAKEB) yang diajukan pada kompetisi Krenova Banyumas.',
    details: [
      'Membuat rancangan wireframe hingga prototipe fungsional di Figma.',
      'Membangun sistem interaktif untuk pencarian dan pemetaan destinasi wisata baru.',
      'Menyusun proposal inovasi daerah dan bahan presentasi penjurian Krenova.'
    ],
    tech: ['PHP', 'MySQL', 'Tailwind CSS', 'Figma', 'Proposal Writing'],
    image: '/disa.png',
    achievements: [
      'Terdaftar resmi dalam Hak Kekayaan Intelektual (HKI) DISA 2023.',
      'Menjadi salah satu perwakilan inovasi teknologi dari Telkom University Purwokerto di Krenova Banyumas 2023.'
    ]
  },
  {
    id: 'proj-4',
    title: 'Ecoscope - Sistem Informasi Kota Cerdas Wonosobo',
    type: 'Proyek Kolaborasi DISKOMINFO & HKI',
    period: '2025',
    role: 'Frontend Developer & UI/UX Specialist',
    description: 'Aplikasi kota cerdas berbasis GIS (Geographic Information System) dan AI untuk pengelolaan ketahanan pangan serta peringatan dini pengurangan risiko bencana di Wonosobo.',
    details: [
      'Merancang visualisasi peta wilayah menggunakan GIS dan mengintegrasikannya ke antarmuka Laravel.',
      'Bekerja sama erat dengan developer backend untuk menyinkronkan data model AI penilai risiko bencana.',
      'Membuat layout responsif yang memudahkan petugas lapangan melaporkan status kebencanaan.'
    ],
    tech: ['Laravel', 'GIS', 'Tailwind CSS', 'AI integration', 'Figma'],
    image: '/ecoscope.png',
    link: 'https://purwokerto.telkomuniversity.ac.id/gagas-aplikasi-ecoscope-mahasiswa-telkom-university-purwokerto-dukung-pengambilan-keputusan-pertanian-berbasis-data-di-desa-kejajar-wonosobo/',
    achievements: [
      'Mendapatkan sertifikat Hak Kekayaan Intelektual (HKI) resmi di tahun 2025.',
      'Diterapkan di lingkungan Dinas Komunikasi dan Informatika Kabupaten Wonosobo.'
    ]
  },
  {
    id: 'proj-5',
    title: 'Gemastik 2023 (Finalis Nasional)',
    type: 'Kompetisi Nasional (Gemastik 2023)',
    period: 'Sep 2023',
    role: 'Hustler & Social Media Admin',
    description: 'Partisipasi tingkat nasional sebagai finalis divisi Software Development di Universitas Brawijaya Malang, mengembangkan solusi teknologi yang berorientasi pasar.',
    details: [
      'Berperan sebagai Hustler: menganalisis kecocokan produk dengan pasar (product-market fit), menyusun model bisnis, serta melakukan pitching di depan dewan juri.',
      'Mengelola saluran media sosial kompetisi untuk meningkatkan reach dan mengumpulkan feedback pengguna (user research).',
      'Memformulasikan proposal kebutuhan konsumen guna menyempurnakan fitur teknis yang dikembangkan tim developer.'
    ],
    tech: ['Business Model Canvas', 'Product Management', 'Market Validation', 'Pitching', 'UI/UX Feedback'],
    image: '/gemastik.png',
    achievements: [
      'Finalis Tingkat Nasional Divisi Pengembangan Perangkat Lunak (Software Development) Gemastik XVI 2023.',
      'Mempresentasikan hasil karya secara luring di Universitas Brawijaya Malang.'
    ]
  },
  {
    id: 'proj-6',
    title: 'Website Komda HAM Wonosobo (Magang)',
    type: 'Proyek Instansi Pemerintah (DISKOMINFO)',
    period: 'Sep 2025 – Okt 2025',
    role: 'Front-End Developer',
    description: 'Pengembangan portal web resmi Komisi Daerah Hak Asasi Manusia (Komda HAM) Kabupaten Wonosobo untuk keperluan pengaduan masyarakat dan transparansi informasi.',
    details: [
      'Membangun antarmuka pengguna website menggunakan Laravel dengan penekanan pada aspek aksesibilitas (accessibility) dan konsistensi tampilan.',
      'Memastikan website responsif sempurna di perangkat mobile maupun desktop.',
      'Menghubungkan form pengaduan masyarakat secara aman dengan database instansi.'
    ],
    tech: ['Laravel', 'Blade', 'Tailwind CSS', 'JavaScript', 'MySQL'],
    achievements: [
      'Sukses diluncurkan dan digunakan sebagai portal resmi pelayanan informasi publik Komda HAM Wonosobo.',
      'Mendapat apresiasi langsung dari pimpinan Bidang Informatika DISKOMINFO Wonosobo.'
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Hardskill',
    skills: [
      { name: 'UI/UX Design (Figma)', level: 'Advanced', description: 'Wireframing, high-fidelity prototyping, design system, user testing, dan human-centered design.' },
      { name: 'Front-End Web Development', level: 'Advanced', description: 'Membangun antarmuka interaktif menggunakan React, Vite, Tailwind CSS, dan HTML/CSS.' },
      { name: 'Laravel Framework', level: 'Advanced', description: 'Pengembangan web modular dengan Laravel (Blade, Livewire, Routing, MVC).' },
      { name: 'Programming Languages', level: 'Intermediate', description: 'JavaScript, PHP, HTML5, CSS3, dan dasar-dasar TypeScript.' },
      { name: 'Database Management', level: 'Intermediate', description: 'Pengolahan dan relasi data menggunakan MySQL dan MariaDB.' },
      { name: 'Design Thinking & Product Dev', level: 'Advanced', description: 'Metodologi eksplorasi masalah, penyusunan VPC/BMC, pembuatan prototipe, dan validasi produk.' },
      { name: 'Research & Proposal Writing', level: 'Advanced', description: 'Penyusunan proposal hibah, Abdimas, HKI, dan kompetisi nasional (Gemastik, Innovilage).' },
      { name: 'Microsoft Office Suite', level: 'Advanced', description: 'Mahir Word (dokumen formal/laporan), Excel (analisis data), dan PowerPoint (pitching deck).' }
    ]
  },
  {
    title: 'Softskill',
    skills: [
      { name: 'Public Speaking & Komunikasi', level: 'Advanced', description: 'Pengalaman MC di berbagai acara besar, moderator, pitching juri nasional, dan presentasi akademik.' },
      { name: 'Leadership & Tanggung Jawab', level: 'Advanced', description: 'Teruji memimpin himpunan mahasiswa (HMSE) tingkat jurusan, koordinasi lintas organisasi.' },
      { name: 'Teamwork & Kolaborasi', level: 'Advanced', description: 'Mampu bekerja sama dalam tim lintas divisi, baik di kepanitiaan, magang, maupun riset abdimas.' },
      { name: 'Problem Solving', level: 'Advanced', description: 'Kemampuan menganalisis masalah lapangan (misalnya di desa tani) dan merumuskan solusi berbasis digital.' },
      { name: 'Adaptability & Fast Learner', level: 'Advanced', description: 'Cepat menguasai teknologi baru (misal transisi dari PHP murni ke Laravel/React) dan menyesuaikan diri di lingkungan magang pemerintahan.' }
    ]
  }
];
