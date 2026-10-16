import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// Atalho para acessar { usuario, autenticado, login, logout } em qualquer componente
export default function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error("useAuth precisa estar dentro do <AuthProvider>");
  }

  return contexto;
}
