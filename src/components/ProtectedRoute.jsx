import { Navigate, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

// Guards a page: unauthenticated visitors are sent to /login,
// and returned to the page they wanted after signing in.
export default function ProtectedRoute({ children }) {
  const { user } = useApp();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname, notice: "Please log in to open the dashboard." }} />;
  }
  return children;
}
