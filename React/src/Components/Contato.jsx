import { useState } from "react";
import SectionHeader from "./SectionHeader";

const campoClasses =
    "w-full rounded-lg border border-[#ccc] px-3 py-2.5 font-[inherit]";
const labelClasses = "mb-1 block font-semibold";

export default function Contato() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
    const [enviado, setEnviado] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setEnviado(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Mensagem:", form);
        setEnviado(true);
        setForm({ nome: "", email: "", mensagem: "" });
    }

    return (
        <section id="contato" className="px-4 py-10 md:px-5 md:py-[60px]">
            <div className="mx-auto max-w-[1100px]">
                <SectionHeader
                    title="Contato"
                    subtitle="Ficou com alguma dúvida ou quer falar com a equipe? Envie uma mensagem."
                />

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <div>
                            <label htmlFor="nome" className={labelClasses}>
                                Nome
                            </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Digite seu nome"
                                value={form.nome}
                                onChange={handleChange}
                                className={campoClasses}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className={labelClasses}>
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                value={form.email}
                                onChange={handleChange}
                                className={campoClasses}
                            />
                        </div>
                        <div>
                            <label htmlFor="mensagem" className={labelClasses}>
                                Mensagem
                            </label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows={5}
                                placeholder="Escreva sua mensagem"
                                value={form.mensagem}
                                onChange={handleChange}
                                className={campoClasses}
                            />
                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-jovi-dark p-3 text-base text-white transition-colors duration-200 hover:bg-jovi-hover"
                        >
                            Enviar mensagem
                        </button>
                        {enviado && (
                            <p className="text-sm font-medium text-green-700">
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
