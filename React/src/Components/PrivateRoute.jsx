import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// Protege as rotas privadas: quem não está logado vai para /login.
// Guardamos de onde a pessoa veio para devolvê-la lá depois do login.
export default function PrivateRoute() {
  const { autenticado } = useAuth();
  const location = useLocation();

  if (!autenticado) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
