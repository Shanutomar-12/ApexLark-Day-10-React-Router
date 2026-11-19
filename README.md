# Day 10 – React Router & Multi-Page Application

**Lark Academy** – an online learning platform built as a React Single Page Application with React Router DOM v6.

## Features
- Routes: Home, About, Services, Courses, Contact, Login, Dashboard, 404 Not Found
- Responsive navbar: logo, active link highlight, mobile menu, Login / Logout actions
- `ProtectedRoute` guarding `/dashboard` (redirects to `/login`, then returns you to the page you wanted)
- Auth state stored in `localStorage` through React Context
- Dashboard: welcome message, profile card, course statistics, recent activities, quick action cards
- Form validation (Login, Contact), empty states (course search, activity list), custom 404, invalid route redirect (`/home` → `/`)

### Extra features (8)
1. Dark / Light mode (saved in localStorage)
2. Loading spinner on route change
3. Scroll-to-top on navigation + floating button
4. Breadcrumbs
5. Dynamic page titles
6. Animated page transitions
7. User profile dropdown
8. Toast notifications

## Tech stack
React 18, React Router DOM 6, Vite, JavaScript (ES6+), HTML5, CSS3

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:5173. **Demo login:** any valid email + a password of 6+ characters.

## Folder structure
```
src/
├── components/  Navbar, Footer, ProtectedRoute, Loader, Breadcrumbs, ScrollToTop, Toasts
├── context/     AppContext (auth, theme, toasts)
├── pages/       Home, About, Services, Courses, Contact, Login, Dashboard, NotFound
├── styles/      style.css
├── App.jsx
└── main.jsx
```

## Screenshots
Add your screenshots to the `screenshots/` folder and list them here.

## Author
Your Name – Apex Lark FSD Internship, Day 10
