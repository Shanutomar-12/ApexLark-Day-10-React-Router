import { createContext, useCallback, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

const read = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

export function AppProvider({ children }) {
  // ---- Auth (persisted in localStorage) ----
  const [user, setUser] = useState(() => read("lark_user", null));
  const login = (u) => {
    localStorage.setItem("lark_user", JSON.stringify(u));
    setUser(u);
  };
  const logout = () => {
    localStorage.removeItem("lark_user");
    setUser(null);
  };

  // ---- Theme (Dark / Light) ----
  const [theme, setTheme] = useState(() => read("lark_theme", "light"));
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("lark_theme", JSON.stringify(theme));
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // ---- Toasts ----
  const [toasts, setToasts] = useState([]);
  const toast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);

  return (
    <AppContext.Provider value={{ user, login, logout, theme, toggleTheme, toasts, toast }}>
      {children}
    </AppContext.Provider>
  );
}
