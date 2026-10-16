import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useToggle from "../hooks/useToggle";

const links = [
  { href: "/#solucao", label: "A Solução" },
  { href: "/#publico", label: "Público-Alvo" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#equipe", label: "Nossa Equipe" },
  { href: "/#contato", label: "Contato" },
];

const linkClasses =
  "block border-t border-[#33334d] py-3.5 font-medium text-[#eaeaea] transition-colors duration-200 hover:text-jovi-accent lg:border-t-0 lg:py-0";

export default function Header() {
  const [aberto, alternarMenu, fecharMenu] = useToggle(false);
  const { usuario, autenticado, logout } = useAuth();
  const navigate = useNavigate();

  function sair() {
    logout();
    fecharMenu();
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-100 bg-linear-to-br from-jovi-dark to-jovi-navy">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-[18px]">
        <Link
          to="/"
          onClick={fecharMenu}
          className="text-[1.4rem] font-bold tracking-[1px] text-white"
        >
          JOVI
        </Link>

        <nav>
          <ul
            className={`absolute inset-x-0 top-full flex flex-col items-center overflow-hidden bg-jovi-dark transition-[max-height] duration-300 ease-in-out lg:static lg:max-h-none lg:flex-row lg:gap-6 lg:overflow-visible lg:bg-transparent ${
              aberto ? "max-h-[36rem]" : "max-h-0"
            }`}
          >
            {links.map((link) => (
              <li key={link.href} className="w-full text-center lg:w-auto">
                <Link to={link.href} onClick={fecharMenu} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}

            {autenticado ? (
              <>
                <li className="w-full text-center lg:w-auto">
                  <NavLink
                    to="/area-do-estudante"
                    onClick={fecharMenu}
                    className={({ isActive }) =>
                      isActive
                        ? linkClasses.replace("text-[#eaeaea]", "text-jovi-accent")
                        : linkClasses
                    }
                  >
                    Área do Estudante
                  </NavLink>
                </li>
                <li className="w-full border-t border-[#33334d] py-3 text-center lg:w-auto lg:border-t-0 lg:py-0">
                  <button
                    onClick={sair}
                    title={`Sair da conta de ${usuario.nome}`}
                    className="cursor-pointer rounded-lg border border-jovi-accent px-4 py-1.5 font-medium text-jovi-accent transition-colors duration-200 hover:bg-jovi-accent hover:text-jovi-dark"
                  >
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <li className="w-full border-t border-[#33334d] py-3 text-center lg:w-auto lg:border-t-0 lg:py-0">
                <Link
                  to="/login"
                  onClick={fecharMenu}
                  className="inline-block rounded-lg bg-jovi-accent px-4 py-1.5 font-semibold text-jovi-dark transition-colors duration-200 hover:bg-white"
                >
                  Entrar
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Botão do menu mobile (fica por último para ir para o canto direito) */}
        <button
          className="cursor-pointer border-none bg-transparent text-[1.6rem] text-white lg:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          onClick={alternarMenu}
        >
          {aberto ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
