import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Solucao from "./Components/Solucao";
import Publico from "./Components/Publico";
import Galeria from "./Components/Galeria";
import Equipe from "./Components/Equipes";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solucao />
        <Publico />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  );
}