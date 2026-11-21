// Dummy content standing in for the real library data.

export const ORG = 'University Open Library';
export const NPP = 'NPP : 0000000D0000000';
export const TODAY = 'Friday, 20 November 2026';

export const NAV = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Catalog', href: '/home/catalog.html', key: 'catalog' },
  { label: 'Services & Facilities', href: '/home/servicesandfacilities.html', key: 'services' },
  { label: 'Library Guides', href: '/home/infografis.html', key: 'guides' },
  {
    label: 'Gallery', key: 'gallery', href: '/home/gallery.html', menu: [
      ['Main Open Library Gallery', '/home/gallery.html'],
      ['North Campus Gallery', '/home/gallery.html'],
      ['West Campus Gallery', '/home/gallery.html'],
      ['Central Campus Gallery', '/home/gallery.html'],
      ['East Campus Gallery', '/home/gallery.html'],
    ],
  },
  {
    label: 'News & Info', key: 'news', href: '/', menu: [
      ['News & Information', '/'],
      ['Important Information', '/'],
    ],
  },
  {
    label: 'About Us', key: 'about', href: '/', menu: [
      ['Profile', '/'], ['Innovation', '/'], ['Achievement', '/'], ['Kaleidoscope', '/'],
    ],
  },
];

export const QUICK = [
  ['Reservasi Ruangan', 'door', '#0284c7'],
  ['Ketersediaan PC Pengunjung', 'pc', '#0d9488'],
  ['Pembayaran Denda', 'money', '#dc2626'],
  ['Unggah / Approval Karya Ilmiah', 'upload', '#0284c7'],
  ['Status SBKP', 'filecheck', '#0d9488'],
  ['NOVA AI\n(Openlibrary Resume & Comparison AI)', 'robot', '#dc2626'],
  ['Laporan Magang & KP', 'briefcase', '#06b6d4'],
  ['Laporan Capstone', 'clipboard', '#475569'],
  ['Point Dosen', 'award', '#f59e0b'],
  ['AKRE\n(Openlibrary Application for Accreditation)', 'shield', '#0d9488'],
  ['Monitoring Pengadaan Bahan Pustaka', 'listcheck', '#0284c7'],
  ['Repository Kampus', 'archive', '#0284c7'],
  ['University Press', 'bookfill', '#ef4444'],
  ['Akses Data Finansial', 'chart', '#0284c7'],
  ['User Education', 'cap', '#0d9488'],
  ['Kelas Literasi', 'easel', '#475569'],
  ['Openlibrary Mobile App Android', 'play', '#0284c7'],
  ['Openlibrary Mobile App iOS', 'apple', '#334155'],
  ['Virtual Tour', 'video', '#06b6d4'],
  ['Wordcloud', 'cloud', '#06b6d4'],
  ['Usulan Pengajuan Bahan Pustaka', 'noteplus', '#dc2626'],
  ['Suggestion Box', 'chat', '#f59e0b'],
  ['Ask a Librarian', 'headset', '#0d9488'],
  ['Tanya Jawab (FAQ)', 'help', '#334155'],
];

const T = [
  'ANALISIS KELAYAKAN PENGEMBANGAN USAHA KECIL', 'ANALISIS KESTABILAN DAN POSTUR TUBUH ATLET', 'ANALISIS KINERJA DALAM MENJAGA STANDAR MUTU',
  'ANALISIS PENGARUH BUDAYA ORGANISASI DIGITAL', 'ANALISIS PENGARUH TEKANAN DAN DURASI PROSES', 'ANALISIS JARINGAN OPTIK ADAPTIF MODERN',
  'Analisis dan Implementasi Keamanan Aplikasi Web', 'Analisis dan Implementasi Keamanan Jaringan', 'ANALISIS DAN IMPLEMENTASI KEAMANAN SERVER',
  'ANALISIS DIGITAL STORYTELLING PADA KONTEN', 'ANALISIS EFEKTIVITAS SISTEM ABSENSI DIGITAL', 'ANALISIS KELAYAKAN DAN PERANCANGAN TOKO',
  'ANALISIS RUGI-RUGI PADA SISTEM PEMBANGKIT', 'ANALISIS SENTIMEN ULASAN ONLINE PRODUK', 'Analisis Sistem Penggajian Berbasis Web',
  'ANALISIS STUDI KELAYAKAN USAHA MIKRO', 'ANALYSIS OF ADAPTIVE NETWORK DESIGN', 'ANTENA PENERIMA UNTUK ENERGI TERBARUKAN',
];
export const LATEST = T.map((t) => ({ title: t, date: '19/11' }));

export const LOCATIONS = [
  { region: 'UTARA', name: 'Kampus Utara - Gedung Pustaka Lantai 5', short: 'Kampus Utara - Gedung Pustaka Lantai 5', addr: ['Jl. Contoh Raya No. 1 - Ters. Kota', 'Kota Contoh 40257 Indonesia'], wa: '0800-1000-110', emails: ['library@example.ac.id', 'bebaspustaka@example.ac.id'], hours: [['Monday - Friday', '08:00 - 19:30'], ['Saturday', '08:00 - 13:00']], open: '08:00 - 19:30', tg: true },
  { region: 'UTARA', name: 'Kampus Utara - Gedung Fakultas Kesehatan Lantai 3', addr: ['Jl. Contoh Raya No. 1 - Ters. Kota', 'Kota Contoh 40257 Indonesia'], wa: '0800-1000-110', emails: ['library@example.ac.id', 'bebaspustaka@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30', tg: true },
  { region: 'UTARA', name: 'Kampus Utara - Gedung Teknik Lantai 1', addr: ['Jl. Contoh Raya No. 1 - Ters. Kota', 'Kota Contoh 40257 Indonesia'], wa: '0800-1000-110', emails: ['library@example.ac.id', 'bebaspustaka@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30', tg: true },
  { region: 'UTARA', name: 'Kampus Utara - Kampus Bukit Hijau', addr: ['Jl. Bukit Hijau No. 1', 'Kota Contoh Indonesia'], wa: '0800-1000-110', emails: ['library@example.ac.id', 'bebaspustaka@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30', tg: true },
  { region: 'BARAT', name: 'Kampus Barat -<br class="dbr">Gedung Stasiun Riset', addr: ['Jl. Contoh Barat KM. 13, Kelurahan Contoh Timur, Kecamatan Contoh, RT.6/RW.4, Kelurahan Sampel Kali, RT.1/RW.4, Kelurahan Sampel Kali, Kota, Kecamatan Contoh, Kota Contoh Barat, Daerah Contoh Ibukota 11730'], wa: '0800-2000-0294', fax: '(021)-000-1697', emails: ['librarybarat@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30' },
  { region: 'BARAT', name: 'Kampus Barat - Kampus Melati', addr: ['Jalan Melati Raya Nomor 2A, RT 010, RW 006, Kelurahan Contoh, Kecamatan Sampel, Kota Contoh Selatan, Provinsi Contoh'], wa: '0800-2000-0294', fax: '(021)-000-1697', emails: ['librarybarat@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30' },
  { region: 'BARAT', name: 'Kampus Barat - Kampus Kenanga', addr: ['Jalan Kenanga Barat No.50, RT.1/RW.1, Ps. Sampel, Kecamatan Contoh, Kota Contoh Selatan, Provinsi Contoh 12970'], wa: '0800-2000-0294', fax: '(021)-000-1697', emails: ['librarybarat@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30' },
  { region: 'TENGAH', name: 'Kampus Tengah - Gedung Rektorat Lantai 1', addr: ['Jl. Pahlawan No. 128 Kota Tengah'], wa: '0800-3000-1393', emails: ['library-tengah@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30' },
  { region: 'TIMUR', name: 'Kampus Timur', addr: ['Jl. Contoh No.156, Kelurahan Sampel, Kec. Contoh, Kota Timur, Provinsi Contoh 60231'], wa: '0800-4000-2311', emails: ['librarytimur@example.ac.id'], hours: [['Monday - Friday', '08:00 - 16:30']], open: '08:00 - 16:30' },
];

export const NEWS = [
  ['Pameran Tugas Akhir - Sistem Pemantauan Keamanan Area Menara BTS Berbasis IoT pada Perusahaan Mitra Telekomunikasi', '19 Nov 2026', '86 kali'],
  ['Book Review - LANGIT', '17 Nov 2026', '125 kali'],
  ['Open Library Universitas Contoh Sukses Gelar Acara Puncak Literacy Event 2026 serta Kukuhkan Duta Open Library 2026', '13 Nov 2026', '242 kali'],
  ['Book Review - Teka-Teki Rumah Tua', '10 Nov 2026', '281 kali'],
  ['Keseruan Malam di Open Library “Baca Bareng!” Hadirkan Pengalaman Literasi Budaya yang Berbeda', '04 Nov 2026', '455 kali'],
];

// Dummy journal / database providers: [label, style]
export const ERES = [
  ['<b style="font:800 26px/1 Arial,sans-serif;color:#1e3a8a;letter-spacing:1px">◆ JRNL</b>'],
  ['<span style="font:400 22px/1 Georgia,serif;color:#334155">⚘ Scholaris</span>'],
  ['<span style="font:700 17px/1 Arial,sans-serif;color:#65a30d">ScienceHub</span>'],
  ['<span style="font:700 11px/1.1 Arial,sans-serif;color:#111;text-align:left">▣ World Papers<br><small style="font-size:7px;font-weight:400">www.worldpapers.example</small></span>'],
  ['<span style="display:inline-flex;width:40px;height:40px;transform:rotate(45deg);background:#0e7490;align-items:center;justify-content:center"><b style="transform:rotate(-45deg);color:#fff;font:700 11px Arial">dl</b></span>'],
  ['<span style="font:700 17px/0.95 \'Times New Roman\',serif;color:#111">SCIENTIA<br>MONTHLY</span>'],
  ['<span style="font:600 15px/1 Arial,sans-serif;color:#0f766e">▲ verdant<br><small style="font-size:11px;font-weight:800">PUBLISHING</small></span>'],
  ['<b style="font:700 30px/1 Arial,sans-serif;color:#1e3a8a">⊜SAGA</b>'],
  ['<span style="font:800 13px/1 Arial,sans-serif;color:#1d4ed8;font-style:italic">INTERSCI<span style="color:#dc2626">ENCE</span></span>'],
  ['<span style="font:400 13px/1 Georgia,serif;color:#1e3a8a">◎ Taylor &amp; Co</span>'],
  ['<span style="font:700 26px/1 Georgia,serif;color:#1e40af">BXP</span>'],
  ['<b style="font:800 20px/1 Arial,sans-serif;color:#0f172a">statdata ◩</b>'],
  ['<span style="font:400 11px/1 Georgia,serif;color:#111;letter-spacing:3px">♞<br>BOOKHOUSE</span>'],
  ['<span style="font:800 18px/1 Arial,sans-serif;color:#111">ENG <small style="font-size:9px;font-weight:600">Digital Library</small></span>'],
  ['<span style="font:800 16px/1 Arial,sans-serif;color:#111"><i style="background:#b91c1c;color:#fff;font:700 8px Arial;padding:3px;margin-right:3px;font-style:normal">MED</i>Access</span>'],
  ['<span style="font:500 17px/1 Georgia,serif;color:#0f766e">QuestDocs<br><small style="font:700 9px Arial;color:#dc2626">*Ask A Librarian u/ Akun</small></span>'],
  ['<span style="font:600 15px/1 Arial,sans-serif;color:#1e293b"><b style="color:#0284c7">✓</b> iCheck</span>'],
  ['<span style="font:500 18px/1 Arial,sans-serif;color:#dc2626">simcheck ⟲</span>'],
  ['<span style="font:500 24px/1 Arial,sans-serif;color:#f97316">Indexa°</span>'],
  ['<span style="display:inline-flex;align-items:center;gap:6px;background:#1d4ed8;color:#fff;font:700 11px Arial;padding:8px 10px">◐ Tourism eLib</span>'],
  ['<span style="font:700 10px/1.3 Arial,sans-serif;color:#0369a1">⩔ MyRemote<br><small style="font-size:9px;font-weight:600">Akses Luar Kampus</small></span>', 'remote'],
];

export const NETWORKS = {
  campus: [
    '<span style="font:500 13px/1.05 Georgia,serif;color:#b91c1c;text-align:left">▼ Journals <small>of</small><br>&nbsp;&nbsp;&nbsp;University</span>',
    '<span style="font:700 10px/1.4 Arial,sans-serif;color:#334155">◈<br>E-Proceeding Kampus</span>',
  ],
  integ: [
    '<span style="font:500 18px/1 Arial,sans-serif;color:#0d9488">◖<b style="color:#334155">ONE</b>Search</span>',
    '<span style="font:800 20px/1 Arial,sans-serif;color:#5b21b6">● REPO<br><small style="font-size:10px;font-weight:400;letter-spacing:2px">REPOSITORY</small></span>',
  ],
  natl: [
    '<span style="font:700 8px/1.2 Arial,sans-serif;color:#1e293b">★ PERPUSTAKAAN NASIONAL<br><small style="font-weight:400">REPUBLIK CONTOH</small></span>',
    '<span style="font:800 22px/1 Arial,sans-serif;color:#1e3a8a">infradocs</span>',
  ],
};

export const ANALYTICS = {
  total: [['users', '1.036', 'Pengunjung Fisik'], ['bookopen', '75', 'Peminjaman Buku'], ['returnbox', '108', 'Pengembalian Buku'], ['doorfill', '35', 'Reservasi Ruangan'], ['clouddown', '6.358', 'Akses Koleksi Digital']],
  campus: [
    ['Kampus Utara', ['680', '51', '88', '27']],
    ['Kampus Barat', ['74', '0', '0', 'N/A']],
    ['Kampus Tengah', ['164', '22', '6', '8']],
    ['Kampus Timur', ['118', '2', '14', 'N/A']],
  ],
};

export const CATALOG = [
  { title: 'LANGIT', author: 'Ananda R. Putra', pub: 'University Press, 2026', type: 'Buku - Elektronik (E-Book) University Press', ddc: '808.83 - Texts and critism of fiction', code: '26.73.035', avail: 'Tersedia: 0 Total: 1', cover: 'dark' },
  { title: 'ANALISIS ADOPSI APLIKASI KESEHATAN IBU HAMIL BERDASARKAN FAKTOR PSIKOLOGIS MENGGUNAKAN ALGORITMA BERTOPIC..', author: 'NAMA MAHASISWA SATU', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '610.19 - Medicine and psychology', code: '26.04.6839', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 24 file download' },
  { title: 'ANALISIS DAN PERANCANGAN MANAJEMEN RISIKO KEAMANAN INFORMASI BERBASIS ISO 27005 PADA..', author: 'NAMA MAHASISWA DUA', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '005.8 - Data Security', code: '26.04.6858', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 24 file download' },
  { title: 'Analisis dan Perancangan Model Tata Kelola Sistem Informasi pada UMKM Menggunakan Framework..', author: 'NAMA MAHASISWA TIGA', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '658.05 - Management-Data processing, Computer applications', code: '26.04.6878', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 23 file download' },
  { title: 'ANALISIS DAN PERANCANGAN TATA KELOLA TEKNOLOGI INFORMASI MENGGUNAKAN FRAMEWORK COBIT PADA PT..', author: 'NAMA MAHASISWA EMPAT', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '658.05 - Management-Data processing, Computer applications', code: '26.04.6901', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 23 file download' },
  { title: 'ANALISIS DAN REKOMENDASI PERBAIKAN TATA KELOLA TEKNOLOGI INFORMASI MENGGUNAKAN KERANGKA KERJA COBIT..', author: 'NAMA MAHASISWA LIMA', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '658.05 - Management-Data processing, Computer applications', code: '26.04.6871', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 24 file download' },
  { title: 'ANALISIS DAN REKOMENDASI PERBAIKAN TATA KELOLA TEKNOLOGI INFORMASI MENGGUNAKAN KERANGKA KERJA COBIT..', author: 'NAMA MAHASISWA ENAM', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '658.05 - Management-Data processing, Computer applications', code: '26.04.6877', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 24 file download' },
  { title: 'Analisis dan Rekomendasi Perbaikan Tata Kelola Teknologi Informasi Menggunakan Kerangka Kerja COBIT..', author: 'NAMA MAHASISWA TUJUH', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '000 - General Works', code: '26.04.6866', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 26 file download' },
  { title: 'ANALISIS FAKTOR FINANSIAL YANG MEMPENGARUHI ADOPSI APLIKASI KESEHATAN IBU HAMIL MENGGUNAKAN TOPIC..', author: 'NAMA MAHASISWA DELAPAN', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '362.19 - Social welfare problems and services - Services to patients with specific conditions, living with a physical disease', code: '26.04.6829', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 26 file download' },
  { title: 'ANALISIS LAYANAN E KONSELING APLIKASI KESEHATAN MENGGUNAKAN MODEL TTF DAN TECHNO COMPLEXITY..', author: 'NAMA MAHASISWA SEMBILAN', pub: 'Universitas Contoh, S1 Sistem Informasi, 2026', type: 'Karya Ilmiah - S1 Skripsi - Reference', ddc: '000 - General Works', code: '26.04.6883', avail: 'Tersedia: 1 Total: 1', dl: 'tersedia 22 file download' },
];

export const REVIEWS = [
  { book: 'ANALISIS KUALITAS WEBSITE TOKO DARING MENGGUNAKAN METODE WEBQUAL DAN IMPORTANCE PERFORMANCE ANALYSIS (IPA)', title: 'Cara Menonaktifkan Akun & Hapus Data Akun Pinjaman Daring', quote: '"Cara menghapus akun pinjaman daring dan data terkait dengan menghubungi (CS) melalui Wa di 0800-0000-000 atau 0800-0000-001 Pastikan semua pinjaman/tagihan telah lunas, lalu siapkan data seperti KTP dan nomor HP untuk..."', user: 'pengguna1 - NAMA PENGULAS', date: '7 Nov 2026' },
  { book: 'KLASIFIKASI STATUS STUNTING PADA BALITA MENGGUNAKAN RANDOM FOREST (STUDI KASUS: KECAMATAN SAMPELBARU UTARA) - Dalam bentuk buku karya ilmiah', title: 'Sangat bagus', quote: '"Keren sekali insightnya dalam klasifikasi status stunting"', user: 'pengguna2 - NAMA PENGULAS', date: '6 Nov 2026' },
  { book: 'PERANCANGAN RACI MATRIKS UNTUK SISTEM TASK MANAGEMENT DALAM TAMPILAN DASHBOARD PADA PROYEK PEMBUATAN FEASIBILITY STUDY DAN MASTER PLAN RUMAH SAKIT', title: 'Dashboard', quote: '"sangat bagus dan membantu"', user: 'pengguna3 - NAMA PENGULAS', date: '3 Nov 2026' },
  { book: 'RANCANG BANGUN 3D HOLOGRAM VIDEO DISPLAY INFORMASI BINATANG DI KEBUN BINATANG KOTA BARU', title: 'Proyek Akhir', quote: '"Sangat bagus"', user: 'pengguna4 - NAMA PENGULAS', date: '11 Sep 2026' },
  { book: 'Business process improvement the breakthrough strategy for total quality ...', title: 'Business process improvement the breakthrough strategy for total quality', quote: '"sangat baik"', user: 'pengguna5 - NAMA PENGULAS', date: '30 Aug 2026' },
];

export const SUBJECTS = [['#N/A', 3797], ['TUGAS AKHIR', 3130], ['WEB PROGRAMMING', 1936], ['NOVELS', 1658], ['Machine Learning', 1614], ['ACCOUNTING', 1483], ['ARTIFICIAL INTELLIGENCE', 1472], ['Transmisi Telekomunikasi', 1285], ['Rekayasa Perangkat Lunak', 1238], ['SCIENCE FICTION', 1228]];

export const SERVICES = [
  { icon: 'laptop', title: 'Akademik & Riset Digital', badge: 'AKADEMIK', hl: ['Aplikasi NOVA AI (Openlibrary Resume & Comparison AI)', 'AI', 'robot'], cols: 2, links: ['Unggah & Approval Karya Ilmiah', 'Unggah Laporan KP', 'Unggah Laporan Capstone', 'Cek Similarity (Plagiasi)', 'Akses Koleksi Digital', 'Open Educational Resources', 'Open Courseware', 'University Press & ISBN'] },
  { icon: 'notebook', title: 'Administrasi & Sirkulasi', badge: 'SIRKULASI', cols: 1, links: ['Layanan Sirkulasi', 'Pembayaran Denda Online', 'Surat Bebas Pustaka (SBKP)', 'Book Delivery Service', 'Daftar Non-Sivitas Akademika'] },
  { icon: 'headset', title: 'Bantuan & Edukasi', badge: 'EDUKASI', hl: ['AI Assistant (Chatbot 24/7)', 'BOT', 'robot'], cols: 2, links: ['Ask a Librarian', 'Layanan Referensi', 'Document Delivery (DDS)', 'Document Selection Info', 'Layanan Kelas Literasi', 'User Education (Maba)', 'Layanan Library Tour', 'Lokasi & Jam Operasional', ['Layanan Lost & Found', 'full']] },
  { icon: 'star', title: 'Layanan Eksklusif Dosen', badge: 'DOSEN', cols: 1, links: ['Aplikasi Point Dosen'] },
];

export const FACILITIES = [
  { icon: 'hotel', title: 'Ruang Belajar & Diskusi', badge: 'RUANGAN', cols: 1, links: ['Ruang Diskusi', 'Area Baca Utama', 'Mini Teater', 'Ruang Belajar Mandiri'] },
  { icon: 'pc', title: 'Area Digital & Tematik', badge: 'DIGITAL', cols: 1, links: ['PC Pengunjung', 'Kindle & E-Reader', 'Wi-Fi Kampus', 'Self Service Printing'] },
  { icon: 'accessfill', title: 'Fasilitas Penunjang', badge: 'INKLUSI', cols: 1, links: ['Assistive Technology', 'Akses Kursi Roda'] },
];

export const GUIDES = [
  { icon: 'bookfill', title: 'Layanan Buku', badge: 'SIRKULASI', cols: 2, links: ['Peminjaman', 'Pengembalian', 'Perpanjangan', 'Pembayaran Denda', 'Book Delivery Services'] },
  { icon: 'lockopen', title: 'Akses E-Resources', badge: 'E-LIBRARY', cols: 2, links: ['Akses Karya Ilmiah', 'Akses E-book', 'Akses Data Finansial', 'Akses Remote', 'Indexa', 'Indexa AI', 'QuestDocs', 'Document Delivery (DDS)'] },
  { icon: 'gradcap', title: 'SBKP & Karya Ilmiah', badge: 'TUGAS AKHIR', cols: 1, links: ['Prosedur SBKP', 'Ketentuan File Karya Ilmiah', 'Unggah Karya Ilmiah', 'Approval Karya Ilmiah (Dosen)'] },
  { icon: 'sparkle', title: 'Riset & AI', badge: 'INOVASI', cols: 1, hl: ['NOVA AI (Openlibrary Resume & Comparison AI)', 'NEW', 'cpu'], links: [] },
  { icon: 'hotel', title: 'Ruangan', badge: 'FASILITAS', cols: 1, links: ['Reservasi Online'] },
  { icon: 'accessfill', title: 'Aksesibilitas & Inklusi', badge: 'INKLUSI', cols: 1, links: ['Assistive Technology'] },
  { icon: 'boxes', title: 'Magang, KP & Capstone', badge: 'AKADEMIK', cols: 1, links: ['Unggah Laporan Magang & KP', 'Approval Laporan (Dosen)', 'Laporan Capstone'] },
  { icon: 'person', title: 'Karya Dosen', badge: 'PUBLIKASI', cols: 1, links: ['Unggah Buku Dosen', 'Point Dosen'] },
  { icon: 'search', title: 'Cek Plagiasi', badge: 'VERIFIKASI', cols: 1, links: ['simcheck', 'iCheck'] },
  { icon: 'checkshield', title: 'Peraturan & Standar', badge: 'REGULASI', cols: 1, links: ['Peraturan Perpustakaan', 'Standar Layanan'] },
];

// Gallery: sequence of blocks with the gap above each (px, measured from the capture).
export const GALLERY = [
  { k: 'hero', mt: 0 },
  { k: 'empty', mt: 20 },
  { k: 'intro', mt: 20 },
  { k: 'cap', t: 'Area Baca Perpustakaan', mt: 20 },
  { k: 'img', v: 'a', mt: 19 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Area Ruang Diskusi, Open Discussion dan Mini Teater Perpustakaan', mt: 10 },
  { k: 'img', v: 'b', mt: 20 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Literasi Cafe', mt: 10 },
  { k: 'img', v: 'c', mt: 20 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Open Library One Stop Services', mt: 9 },
  { k: 'img', v: 'd', mt: 20 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Kegiatan Launching University Press Bookstore', mt: 10 },
  { k: 'img', v: 'e', mt: 20 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Area/Koleksi Corner Ekonomi dan Corner Integritas', mt: 9 },
  { k: 'img', v: 'f', mt: 20 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Kegiatan 1 Dekade University Literacy Event', mt: 10 },
  { k: 'img', v: 'g', mt: 20 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Kegiatan Kelas Literasi dan User Education Tahun 2023', mt: 10 },
  { k: 'img', v: 'h', mt: 19 },
  { k: 'empty', mt: 20 },
  { k: 'cap', t: 'Prestasi dan Penghargaan Pustakawan dan Perpustakaan Tahun 2023', mt: 10 },
  { k: 'img', v: 'i', mt: 20 },
  { k: 'img', v: 'trophy', mt: 20 },
  { k: 'img', v: 'cert', mt: 20 },
];
