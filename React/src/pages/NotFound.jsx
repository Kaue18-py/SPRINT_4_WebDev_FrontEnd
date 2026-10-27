import { Link } from "react-router-dom";
import Botao from "../Components/Botao";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-180px)] items-center px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-[1160px]">
        <p className="font-display text-[5rem] font-bold leading-none tracking-tight text-jovi-blue md:text-[8rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight">Página não encontrada</h1>
        <p className="mb-8 mt-3 max-w-md text-jovi-muted">
          O endereço que você tentou acessar não existe ou foi removido.
        </p>
        <Botao as={Link} to="/">
          Voltar para o início
        </Botao>
      </div>
    </section>
  );
}
