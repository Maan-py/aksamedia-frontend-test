# Front End - Web Developer Intern Test

## Ringkasan Proyek

Aplikasi web berbasis React yang dibangun untuk Tes Magang Frontend Developer di PT Aksamedia Mulia Digital. Aplikasi ini mendemonstrasikan kemampuan dalam membuat tampilan website yang responsif, interaktif, dan modern menggunakan teknologi web terkini.

## 🚀 Fitur Utama

### Sistem Autentikasi

- **Login System**: Autentikasi aman tanpa integrasi API
- **Session Persisten**: User tetap login setelah refresh halaman hingga logout manual
- **Protected Routes**: Semua halaman kecuali login memerlukan autentikasi
- **Display User**: Nama user yang login ditampilkan di navbar

### Manajemen Produk (CRUD)

- **Create**: Menambah produk baru dengan nama, harga, dan kategori
- **Read**: Menampilkan produk dalam format tabel responsif
- **Update**: Mengedit informasi produk yang ada
- **Delete**: Menghapus produk dari sistem
- **Search**: Filter produk berdasarkan nama
- **Category Filter**: Filter produk berdasarkan kategori (Desktop/Smartphone)
- **Pagination**: Paginasi custom tanpa library pihak ketiga

### Pengalaman Pengguna

- **Responsive Design**: Dioptimalkan untuk desktop, tablet, dan mobile
- **Dark/Light Mode**: Tiga pilihan tema (Dark, Light, System)
- **State Persistence**: Query pencarian, filter, dan state paginasi tetap terjaga saat refresh
- **Profile Management**: Mengedit informasi profil user
- **Custom Dropdown**: Menu dropdown built-in tanpa library eksternal

### Fitur Teknis

- **Local Storage**: Semua data disimpan secara lokal
- **Tailwind CSS**: Styling murni Tailwind tanpa library UI
- **TypeScript**: Pengembangan dengan type safety
- **React Router**: Client-side routing
- **Vite**: Build tool dan development server yang cepat

## 🛠️ Teknologi yang Digunakan

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Framework styling
- **React Router DOM** - Client-side routing
- **Vite** - Build tool dan development server
- **Local Storage** - Persistensi data

## 📋 Prasyarat

- Node.js (versi 16 atau lebih tinggi)
- npm atau yarn package manager

## 🔧 Instalasi

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd aksamedia-frontend-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   ```

4. **Buka browser**
   Navigasi ke `http://localhost:5173`

## 🔐 Kredensial Login

**Username:** `admin`  
**Password:** `admin123`

## 📱 Cara Penggunaan

### Autentikasi

1. Navigasi ke halaman login
2. Masukkan kredensial di atas
3. Klik "Login" untuk mengakses dashboard

### Manajemen Produk

1. **Lihat Produk**: Semua produk ditampilkan dalam format tabel
2. **Tambah Produk**: Klik tombol "+ Add Product" untuk membuat produk baru
3. **Edit Produk**: Klik tombol "Update" pada baris produk manapun
4. **Hapus Produk**: Klik tombol "Delete" untuk menghapus produk
5. **Cari**: Gunakan search bar untuk filter produk berdasarkan nama
6. **Filter**: Gunakan dropdown filter untuk filter berdasarkan kategori

### Navigasi

- **Dashboard**: Halaman utama manajemen produk
- **Profile**: Edit informasi user
- **Logout**: Akses melalui dropdown menu di navbar

### Pergantian Tema

- Klik toggle tema di navbar
- Pilih antara tema Dark, Light, atau System
- Tema System otomatis mengikuti preferensi OS

## 🏗️ Struktur Proyek

```
src/
├── components/          # Komponen yang dapat digunakan kembali
│   └── Navbar.tsx      # Komponen navigasi
├── pages/              # Komponen halaman
│   ├── Dashboard.tsx   # Halaman utama manajemen produk
│   ├── Login.tsx       # Halaman autentikasi
│   ├── Create.tsx      # Halaman tambah produk
│   ├── Update.tsx      # Halaman edit produk
│   ├── EditProfile.tsx # Halaman edit profil user
│   ├── Home.tsx        # Halaman landing
│   └── NotFound.tsx    # Halaman 404
├── types/              # Definisi tipe TypeScript
├── utils/              # Fungsi utilitas
└── assets/             # Asset statis
```

## 🎨 Fitur Desain

- **Layout Responsif**: Menyesuaikan dengan semua ukuran layar
- **UI Modern**: Desain bersih dan profesional
- **Elemen Interaktif**: Efek hover dan transisi halus
- **Aksesibilitas**: HTML semantik yang tepat dan label ARIA
- **Komponen Custom**: Dibangun tanpa library UI eksternal

## 📊 Persistensi Data

Semua data disimpan secara lokal menggunakan:

- **Local Storage**: Autentikasi user, preferensi, dan data produk
- **Session Management**: Restorasi otomatis status login
- **State Synchronization**: Update real-time antar komponen

## 🔒 Fitur Keamanan

- **Route Protection**: Pencegahan akses tidak sah
- **Session Validation**: Pengecekan autentikasi yang persisten
- **Input Validation**: Validasi dan sanitasi form

## 🚀 Deployment

Aplikasi dapat di-deploy ke layanan hosting statis apapun:

1. **Build proyek**

   ```bash
   npm run build
   ```

2. **Deploy folder `dist`** ke layanan hosting pilihan Anda

## 📝 Persyaratan yang Dipenuhi

✅ **Autentikasi tanpa API**  
✅ **Login saja (tanpa registrasi)**  
✅ **Nama user ditampilkan di navbar**  
✅ **Fungsi logout**  
✅ **Tailwind CSS murni (tanpa library UI)**  
✅ **Implementasi dropdown custom**  
✅ **Autentikasi persisten saat refresh**  
✅ **Operasi CRUD dengan localStorage**  
✅ **Fungsi search dan filter**  
✅ **Paginasi custom**  
✅ **State persisten saat refresh**  
✅ **Protected routes**  
✅ **Mode tema Dark/Light/System**  
✅ **Edit profil user**  
✅ **Desain responsif**  
✅ **Implementasi TypeScript**

## 🎯 Fitur Khusus yang Diimplementasikan

### State Persistence

- Query pencarian tetap terjaga saat refresh
- Filter kategori tetap aktif
- Halaman paginasi tetap sama
- Data user dan preferensi tersimpan

### Responsive Design

- Desktop: Layout penuh dengan navigasi horizontal
- Tablet: Layout menyesuaikan dengan ukuran layar
- Mobile: Layout vertikal dengan navigasi yang dioptimalkan

### User Experience

- Loading state yang smooth
- Feedback visual untuk setiap aksi
- Validasi form yang informatif
- Navigasi yang intuitif

## 👨‍💻 Developer

Proyek ini dikembangkan sebagai bagian dari Tes Magang Frontend Developer di PT Aksamedia Mulia Digital.

## 📄 Lisensi

Proyek ini dibuat untuk keperluan testing saja.

---

**Catatan**: Aplikasi ini dirancang untuk mendemonstrasikan kemampuan frontend development dan tidak menyertakan integrasi API backend. Semua data dikelola secara lokal menggunakan browser storage.
