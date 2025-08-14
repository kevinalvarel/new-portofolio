# Personal Portfolio — Next.js + Motion (Framer) + Tailwind CSS

A modern, performant personal portfolio to showcase profile, skills, and projects. Built with Next.js (App Router) and Tailwind CSS, featuring smooth, production‑ready animations powered by Motion (by Framer). The project also includes interactive visuals with React Three Fiber/Three.js

## Technologies Used

- Next.js 15 (App Router), React 19
- Tailwind CSS 4, @tailwindcss/postcss
- Motion (by Framer) ^12 (page transitions, viewport reveals, micro‑interactions)
- React Three Fiber ^9 + Three.js (3D/Canvas experiments)
- ESLint 9, Turbopack dev server
- Icons: react-icons, @tabler/icons-react, Font Awesome

## Features

- Smooth page transitions and staggered reveal on scroll with Motion (by Framer)
- Responsive UI with Tailwind CSS v4
- App Router structure with dedicated routes: home, about, and projects
- Reusable UI components (Navbar, Footer, Button, Timeline, Parallax, Canvas)
- Image and asset optimization via Next.js
- Optional 3D/Canvas sections (Three.js via React Three Fiber)
- Clean codebase with ESLint and utility helpers

## Setup Instructions

Prerequisites: Node.js 18+ recommended.

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

   Open http://localhost:3000

3. Build and run in production

   ```bash
   npm run build
   npm start
   ```

4. Lint

   ```bash
   npm run lint
   ```

## AI Support Explanation

- This project does not rely on AI at runtime; it is a static/SSR portfolio application.
- AI tools (e.g., GitHub Copilot, IBM Watson, ChatGPT, and Claude) were used to assist with documentation, refactors, and creating animation variants/snippets more quickly during development.
- You can continue using AI assistance in your editor to:
  - Generate or refine Motion variants and Tailwind utility patterns
  - Draft content sections (About, Projects) and commit messages
  - Suggest accessibility and performance improvements
- No user data is sent to any AI service by the app itself. Any AI usage is developer‑side during coding/documentation.
