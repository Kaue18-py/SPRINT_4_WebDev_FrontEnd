import { Link } from "react-router-dom";
import Botao from "./Botao";

export default function Hero() {
    return (
        <section className="overflow-hidden border-b border-jovi-line px-4 md:px-8">
            <div className="mx-auto grid max-w-[1160px] items-center gap-14 py-14 md:py-20 lg:grid-cols-[1.25fr_1fr]">
                <div>
                    <p className="mb-6 text-sm font-medium text-jovi-muted">
                        Modo Estudante e Formulário Inteligente
                    </p>
                    <h1 className="font-display text-[2.75rem] font-bold leading-[0.98] tracking-tight md:text-[4.5rem]">
                        Um novo modo para um novo dia.
                    </h1>
                    <p className="mt-6 max-w-[520px] text-lg text-jovi-muted">
                        Uma nova função de câmera e um formulário inteligente que se adapta ao
                        seu jeito de fotografar e organizar suas fotos.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <Botao as={Link} to="/#solucao">
                            Conhecer a solução
                        </Botao>
                        <Botao as={Link} to="/#galeria" variante="contorno">
                            Ver as telas
                        </Botao>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[280px]">
                    <div
                        className="absolute -inset-x-6 bottom-12 top-12 rounded-[32px] bg-jovi-blue md:-inset-x-10"
                        aria-hidden="true"
                    />
                    <figure className="relative aspect-[9/18] overflow-hidden rounded-[32px] border-[8px] border-jovi-dark bg-jovi-dark">
                        <img
                            src="/imagens/Tela Inicial JOVI.jpeg"
                            alt="Tela inicial do app JOVI"
                            className="block h-full w-full object-cover"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
