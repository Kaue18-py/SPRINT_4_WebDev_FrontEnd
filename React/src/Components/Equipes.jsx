import Secao from "./Secao";

const membros = [
    { nome: "Messias Macedo", funcao: "Idealização e Produção" },
    { nome: "Fabrício Zanzarine", funcao: "Planejamento e Produção" },
    { nome: "Kaue Herculano", funcao: "Estruturação e Produção" },
    { nome: "João Pedro da Cruz", funcao: "Idealização e Estratégia" },
    { nome: "Lucca Braga", funcao: "Mediador e Idealização" },
];

export default function Equipe() {
    return (
        <Secao
            id="equipe"
            numero="04"
            titulo="Nossa equipe"
            subtitulo="Os responsáveis pelo desenvolvimento do Modo Estudante e do Formulário Inteligente."
        >
            <ul className="border-b border-jovi-line">
                {membros.map((membro, i) => (
                    <li
                        key={membro.nome}
                        className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-jovi-line py-5 md:grid-cols-[3rem_1fr_1fr] md:items-baseline"
                    >
                        <span className="text-sm text-jovi-muted">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                            {membro.nome}
                        </h3>
                        <p className="col-start-2 text-jovi-muted md:col-start-auto">
                            {membro.funcao}
                        </p>
                    </li>
                ))}
            </ul>
        </Secao>
    );
}
