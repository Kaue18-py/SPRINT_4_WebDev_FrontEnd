import SectionHeader from "./SectionHeader";

const membros = [
    { nome: "Messias Macedo", funcao: "Idealização e Produção" },
    { nome: "Fabrício Zanzarine", funcao: "Planejamento e Produção" },
    { nome: "Kaue Herculano", funcao: "Estruturação e Produção" },
    { nome: "João Pedro da Cruz", funcao: "Idealização e Estratégia" },
    { nome: "Lucca Braga", funcao: "Mediador e Idealização" },
];

export default function Equipe() {
    return (
        <section
            id="equipe"
            className="bg-[#f5f5f5] px-4 py-10 md:px-5 md:py-[60px]"
        >
            <div className="mx-auto max-w-[1100px]">
                <SectionHeader
                    title="Nossa Equipe"
                    subtitle="Os responsáveis pelo desenvolvimento do Modo Estudante e do Formulário Inteligente."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
                    {membros.map((membro) => (
                        <article
                            key={membro.nome}
                            className="rounded-xl bg-white px-4 py-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                        >
                            <div className="mx-auto mb-3.5 flex size-[90px] items-center justify-center rounded-full bg-[#d4dcf7] text-[1.6rem] font-bold text-jovi-accent">
                                {membro.nome[0]}
                            </div>
                            <h4 className="mb-1 font-semibold">{membro.nome}</h4>
                            <div className="mb-1.5 text-[0.9rem] text-jovi-accent">
                                {membro.funcao}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
