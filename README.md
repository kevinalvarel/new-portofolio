# Portofolio Pribadi — Next.js + Motion (Framer) + Tailwind CSS

Proyek ini adalah website portofolio modern untuk menampilkan profil, keterampilan, dan daftar proyek. Dibangun dengan Next.js (App Router) dan Tailwind CSS, serta animasi halus menggunakan Motion (by Framer) untuk transisi halaman, reveal on scroll, dan micro-interactions. Beberapa komponen interaktif juga memanfaatkan Three.js melalui React Three Fiber.

## Fitur Utama

- Animasi halus dengan Motion (by Framer):
  - Transisi halaman, staggered reveal, hover/tap animation.
- UI responsif dengan Tailwind CSS v4.
- Struktur App Router Next.js: `/(root)`, `/about`, `/projects`.
- Komponen interaktif (parallax, canvas/3D) dengan React Three Fiber dan Three.js.
- Optimasi aset dan gambar bawaan Next.js.

## Tech Stack

- Next.js 15 (App Router), React 19
- Tailwind CSS 4, @tailwindcss/postcss
- Motion (by Framer) `motion@^12`
- React Three Fiber + Three.js
- GSAP (beberapa efek animasi tambahan)

## Struktur Proyek (ringkas)

```
app/
  (root)/        -> halaman beranda/hero, header, project highlight, contact
  about/         -> profil singkat, timeline/journey, tech stack, education
  projects/      -> daftar proyek, highlight, kartu proyek
components/      -> komponen global (Navbar, Footer, Button, Canvas, dsb.)
public/          -> aset gambar & dokumen (cv.pdf, images, project, dll.)
json/data.json   -> data statis untuk konten
```

## Cara Menjalankan

1. Instal dependensi

```bash
npm install -d
```

2. Jalankan mode pengembangan

```bash
npm run dev
```

Akses http://localhost:3000

3. Build untuk produksi

```bash
npm run build
npm start
```

## Perintah Node Package Manager

- `dev` — menjalankan dev server (Turbopack)
- `build` — build produksi Next.js
- `start` — menjalankan server produksi
- `lint` — menjalankan ESLint

## Catatan Animasi

- Motion (by Framer) digunakan untuk:
  - Variants (enter/exit), stagger children, viewport reveal.
  - Micro-interactions (hover, tap) pada tombol/kartu proyek.
- GSAP/Three.js dipakai pada elemen tertentu untuk efek parallax/3D.

## Deploy

Direkomendasikan deploy di Vercel:

- Push kode ke repository Git Anda
- Import proyek di Vercel dan deploy otomatis

Dokumentasi: https://nextjs.org/docs/app dan https://motion.dev/
