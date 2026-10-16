import { useState } from "react";

// Concentra toda a lógica de formulário: valores, validação, envio e erros.
// O componente só cuida de desenhar os campos.
//
// valoresIniciais: { nome: "", email: "" ... }
// validar(valores): devolve um objeto { campo: "mensagem de erro" }
// aoEnviar(valores, { limpar }): função (pode ser async) chamada quando está tudo válido
export default function useForm(valoresIniciais, validar, aoEnviar) {
  const [valores, setValores] = useState(valoresIniciais);
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState("");
  const [sucesso, setSucesso] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValores((atual) => ({ ...atual, [name]: value }));
    setErros((atual) => ({ ...atual, [name]: undefined }));
    setErroEnvio("");
    setSucesso(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const novosErros = validar(valores);
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    setEnviando(true);
    try {
      await aoEnviar(valores, { limpar });
      setSucesso(true);
    } catch (erro) {
      setErroEnvio(erro.message);
    } finally {
      setEnviando(false);
    }
  }

  function limpar() {
    setValores(valoresIniciais);
    setErros({});
  }

  return {
    valores,
    erros,
    enviando,
    erroEnvio,
    sucesso,
    handleChange,
    handleSubmit,
    limpar,
  };
}
