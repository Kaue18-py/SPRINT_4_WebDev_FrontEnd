import { Link } from "react-router-dom";
import Botao from "../Components/Botao";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-6xl font-bold text-jovi-blue">404</p>
      <h1 className="mt-3 text-2xl font-bold text-[#1b1b1b]">Página não encontrada</h1>
      <p className="mb-6 mt-2 max-w-md text-[#555]">
        O endereço que você tentou acessar não existe ou foi removido.
      </p>
      <Botao as={Link} to="/">
        Voltar para o início
      </Botao>
    </section>
  );
}
