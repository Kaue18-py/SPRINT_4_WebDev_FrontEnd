import Secao from "./Secao";
import CampoFormulario from "./CampoFormulario";
import Botao from "./Botao";
import useForm from "../hooks/useForm";
import { enviarMensagem } from "../services/api";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const canais = [
    { rotulo: "E-mail", valor: "jovi@fiap.com.br", href: "mailto:jovi@fiap.com.br" },
    { rotulo: "Instagram", valor: "@JoviOficial_Fiap" },
    { rotulo: "LinkedIn", valor: "JOVI Oficial" },
];

function validarContato({ nome, email, mensagem }) {
    const erros = {};
    if (nome.trim().length < 3) erros.nome = "Digite seu nome (mínimo 3 letras).";
    if (!EMAIL_REGEX.test(email)) erros.email = "Digite um e-mail válido.";
    if (mensagem.trim().length < 10)
        erros.mensagem = "A mensagem precisa ter pelo menos 10 caracteres.";
    return erros;
}

export default function Contato() {
    const { valores, erros, enviando, sucesso, handleChange, handleSubmit } = useForm(
        { nome: "", email: "", mensagem: "" },
        validarContato,
        async (dados, { limpar }) => {
            await enviarMensagem(dados);
            limpar();
        }
    );

    return (
        <Secao
            id="contato"
            numero="05"
            titulo="Contato"
            subtitulo="Ficou com alguma dúvida ou quer falar com a equipe? Envie uma mensagem."
        >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
                <form onSubmit={handleSubmit} noValidate className="grid gap-5">
                    <CampoFormulario
                        id="contato-nome"
                        name="nome"
                        label="Nome"
                        placeholder="Digite seu nome"
                        value={valores.nome}
                        onChange={handleChange}
                        erro={erros.nome}
                    />
                    <CampoFormulario
                        id="contato-email"
                        name="email"
                        label="E-mail"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={valores.email}
                        onChange={handleChange}
                        erro={erros.email}
                    />
                    <CampoFormulario
                        id="contato-mensagem"
                        name="mensagem"
                        label="Mensagem"
                        multilinha
                        rows={5}
                        placeholder="Escreva sua mensagem"
                        value={valores.mensagem}
                        onChange={handleChange}
                        erro={erros.mensagem}
                    />
                    <div className="flex flex-wrap items-center gap-4">
                        <Botao type="submit" disabled={enviando}>
                            {enviando ? "Enviando..." : "Enviar mensagem"}
                        </Botao>
                        {sucesso && (
                            <p role="status" className="text-sm font-medium text-green-700">
                                Mensagem enviada com sucesso!
                            </p>
                        )}
                    </div>
                </form>

                <div className="border-t border-jovi-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <h3 className="mb-6 font-display text-xl font-bold tracking-tight">
                        Outras formas de contato
                    </h3>
                    <dl className="grid gap-5">
                        {canais.map((canal) => (
                            <div key={canal.rotulo}>
                                <dt className="text-sm text-jovi-muted">{canal.rotulo}</dt>
                                <dd className="text-lg font-medium">
                                    {canal.href ? (
                                        <a href={canal.href} className="underline decoration-jovi-line underline-offset-4 transition-colors hover:text-jovi-blue hover:decoration-jovi-blue">
                                            {canal.valor}
                                        </a>
                                    ) : (
                                        canal.valor
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Secao>
    );
}
