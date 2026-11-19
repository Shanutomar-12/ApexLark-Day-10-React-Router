import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on every route change + shows a floating button after scrolling.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return show ? (
    <button className="to-top" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      ↑
    </button>
  ) : null;
}
