import { useMemo } from "react";
import { AuthContext } from "./AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { login as loginApi } from "../services/api";

export default function AuthProvider({ children }) {
  const [usuario, setUsuario] = useLocalStorage("jovi:usuario", null);

  const valor = useMemo(
    () => ({
      usuario,
      autenticado: Boolean(usuario),
      async login(email, senha) {
        const usuarioLogado = await loginApi(email, senha);
        setUsuario(usuarioLogado);
        return usuarioLogado;
      },
      logout() {
        setUsuario(null);
      },
    }),
    [usuario, setUsuario]
  );

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}
