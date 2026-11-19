import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import Breadcrumbs from "./components/Breadcrumbs.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Toasts from "./components/Toasts.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

const titles = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/courses": "Courses",
  "/contact": "Contact",
  "/login": "Log in",
  "/dashboard": "Dashboard",
};

export default function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  // Dynamic page titles
  useEffect(() => {
    document.title = `${titles[pathname] || "Page not found"} | Lark Academy`;
  }, [pathname]);

  // Short loading spinner between pages
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />
      <Breadcrumbs />
      <main>
        {loading ? (
          <Loader />
        ) : (
          // key={pathname} re-triggers the CSS fade animation on every route change
          <div className="page-fade" key={pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}
      </main>
      <Footer />
      <ScrollToTop />
      <Toasts />
    </div>
  );
}
