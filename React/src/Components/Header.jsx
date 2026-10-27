import { Link } from "react-router-dom";
import useToggle from "../hooks/useToggle";

const links = [
  { href: "/#solucao", label: "A solução" },
  { href: "/#publico", label: "Público-alvo" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [aberto, alternarMenu, fecharMenu] = useToggle(false);

  return (
    <header className="sticky top-0 z-100 border-b border-jovi-line bg-jovi-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-4 md:px-8">
        <Link
          to="/"
          onClick={fecharMenu}
          className="font-display text-xl font-bold tracking-tight"
        >
          JOVI
        </Link>

        <nav>
          <ul
            className={`absolute inset-x-0 top-full flex flex-col overflow-hidden bg-jovi-paper transition-[max-height] duration-300 ease-in-out lg:static lg:max-h-none lg:flex-row lg:gap-8 lg:overflow-visible lg:bg-transparent ${
              aberto ? "max-h-[36rem] border-b border-jovi-line" : "max-h-0"
            }`}
          >
            {links.map((link) => (
              <li key={link.href} className="w-full lg:w-auto">
                <Link
                  to={link.href}
                  onClick={fecharMenu}
                  className="block border-t border-jovi-line px-4 py-3.5 text-[0.95rem] font-medium transition-colors duration-200 hover:text-jovi-blue lg:border-t-0 lg:p-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          onClick={alternarMenu}
        >
          <span
            className={`block h-0.5 w-6 bg-jovi-dark transition-transform duration-200 ${
              aberto ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-jovi-dark transition-transform duration-200 ${
              aberto ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
