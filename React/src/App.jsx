import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AreaEstudante from "./pages/AreaEstudante";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas privadas: só entra quem está logado */}
        <Route element={<PrivateRoute />}>
          <Route path="/area-do-estudante" element={<AreaEstudante />} />
        </Route>

        {/* Qualquer outro endereço */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
