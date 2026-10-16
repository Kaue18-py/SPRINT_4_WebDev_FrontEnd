import SectionHeader from "./SectionHeader";
import CampoFormulario from "./CampoFormulario";
import Botao from "./Botao";
import useForm from "../hooks/useForm";
import { enviarMensagem } from "../services/api";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarContato({ nome, email, mensagem }) {
    const erros = {};
    if (nome.trim().length < 3) erros.nome = "Digite seu nome (mínimo 3 letras).";
    if (!EMAIL_REGEX.test(email)) erros.email = "Digite um e-mail válido.";
    if (mensagem.trim().length < 10)
        erros.mensagem = "A mensagem precisa ter pelo menos 10 caracteres.";
    return erros;
}

export default function Contato() {
    // Toda a lógica (valores, validação e envio) fica no hook useForm
    const { valores, erros, enviando, sucesso, handleChange, handleSubmit } = useForm(
        { nome: "", email: "", mensagem: "" },
        validarContato,
        async (dados, { limpar }) => {
            await enviarMensagem(dados);
            limpar();
        }
    );

    return (
        <section id="contato" className="px-4 py-10 md:px-5 md:py-[60px]">
            <div className="mx-auto max-w-[1100px]">
                <SectionHeader
                    title="Contato"
                    subtitle="Ficou com alguma dúvida ou quer falar com a equipe? Envie uma mensagem."
                />

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
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
                        <Botao type="submit" disabled={enviando}>
                            {enviando ? "Enviando..." : "Enviar mensagem"}
                        </Botao>
                        {sucesso && (
                            <p role="status" className="text-sm font-medium text-green-700">
                                Mensagem enviada com sucesso!
                            </p>
                        )}
                    </form>

                    <div className="rounded-xl bg-jovi-soft p-[30px]">
                        <h3 className="mb-3.5 text-xl font-bold text-[#1b1b1b]">
                            Outras formas de contato
                        </h3>
                        <p className="mb-2">📧 E-mail: atendimento@fiap.com.br</p>
                        <p className="mb-2">📷 Instagram: @fiapoficial</p>
                        <p className="mb-2">💼 LinkedIn: FIAP</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
