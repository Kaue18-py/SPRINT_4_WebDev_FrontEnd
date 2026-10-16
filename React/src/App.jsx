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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/area-do-estudante" element={<AreaEstudante />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
