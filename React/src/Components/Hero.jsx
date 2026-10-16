import { Link } from "react-router-dom";
import Botao from "./Botao";

export default function Hero() {
    return (
        <section className="bg-linear-to-br from-jovi-dark to-jovi-blue px-4 py-[90px] text-center text-white md:px-5">
            <div className="mx-auto max-w-[1100px]">
                <h1 className="mb-4 text-[1.9rem] font-bold text-white md:text-[2.6rem]">
                    Um Novo Modo para Um Novo Dia
                </h1>
                <p className="mx-auto max-w-[600px] text-[1.1rem] text-[#d0d0e0]">
                    Uma nova função de câmera e um formulário inteligente que se adapta ao
                    seu jeito de fotografar e organizar suas fotos.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Botao as={Link} to="/area-do-estudante" variante="claro">
                        Testar o Modo Estudante
                    </Botao>
                    <Botao as={Link} to="/#solucao" variante="contorno">
                        Conhecer a solução
                    </Botao>
                </div>
            </div>
        </section>
    );
}
