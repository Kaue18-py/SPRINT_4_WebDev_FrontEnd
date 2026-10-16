import { createContext } from "react";

// Contexto que guarda o usuário logado e as funções de login/logout.
// O Provider está em AuthProvider.jsx e o acesso é feito pelo hook useAuth().
export const AuthContext = createContext(null);
