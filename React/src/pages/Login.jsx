import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";
import CampoFormulario from "../Components/CampoFormulario";
import Botao from "../Components/Botao";

function validarLogin({ email, senha }) {
  const erros = {};
  if (!email.trim()) erros.email = "Informe seu e-mail.";
  if (!senha) erros.senha = "Informe sua senha.";
  return erros;
}

export default function Login() {
  const { autenticado, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const destino = location.state?.from?.pathname ?? "/area-do-estudante";

  const { valores, erros, enviando, erroEnvio, handleChange, handleSubmit } = useForm(
    { email: "", senha: "" },
    validarLogin,
    async ({ email, senha }) => {
      await login(email, senha);
      navigate(destino, { replace: true });
    }
  );

  if (autenticado) {
    return <Navigate to={destino} replace />;
  }

  return (
    <section className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-linear-to-br from-jovi-dark to-jovi-blue px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:p-8">
        <h1 className="mb-1 text-2xl font-bold text-[#1b1b1b]">Entrar no Modo Estudante</h1>
        <p className="mb-6 text-[#555]">
          Acesse sua área para ver suas fotos organizadas por matéria.
        </p>

        {location.state?.from && (
          <p className="mb-4 rounded-lg bg-jovi-soft px-3 py-2 text-sm text-jovi-navy">
            Faça login para acessar essa página.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate className="grid gap-4">
          <CampoFormulario
            id="email"
            label="E-mail"
            type="email"
            autoComplete="username"
            placeholder="seuemail@exemplo.com"
            value={valores.email}
            onChange={handleChange}
            erro={erros.email}
          />
          <CampoFormulario
            id="senha"
            label="Senha"
            type="password"
            autoComplete="current-password"
            placeholder="Sua senha"
            value={valores.senha}
            onChange={handleChange}
            erro={erros.senha}
          />

          {erroEnvio && (
            <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {erroEnvio}
            </p>
          )}

          <Botao type="submit" disabled={enviando}>
            {enviando ? "Entrando..." : "Entrar"}
          </Botao>
        </form>

        <div className="mt-6 rounded-lg border border-dashed border-[#c9d3f3] p-3 text-sm text-[#555]">
          <p className="mb-1 font-semibold text-[#333]">Usuário de teste</p>
          <p>
            E-mail: <code className="text-jovi-blue">estudante@jovi.com</code>
          </p>
          <p>
            Senha: <code className="text-jovi-blue">jovi123</code>
          </p>
        </div>
      </div>
    </section>
  );
}
