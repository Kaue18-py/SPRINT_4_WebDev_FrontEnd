import { useState } from "react";

const links = [
  { href: "#solucao", label: "A Solução" },
  { href: "#publico", label: "Público-Alvo" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipe", label: "Nossa Equipe" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-100 bg-linear-to-br from-jovi-dark to-jovi-navy">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-[18px]">
        <div className="text-[1.4rem] font-bold tracking-[1px] text-white">
          JOVI
        </div>

        <button
          className="cursor-pointer border-none bg-transparent text-[1.6rem] text-white md:hidden"
          aria-label="Abrir menu"
          onClick={() => setAberto(!aberto)}
        >
          &#9776;
        </button>

        <nav>
          <ul
            className={`absolute inset-x-0 top-16 flex max-h-0 flex-col items-center overflow-hidden bg-jovi-dark transition-[max-height] duration-300 ease-in-out md:static md:max-h-none md:flex-row md:gap-7 md:overflow-visible md:bg-transparent ${
              aberto ? "max-h-80" : ""
            }`}
          >
            {links.map((link) => (
              <li key={link.href} className="w-full text-center md:w-auto">
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block border-t border-[#33334d] py-3.5 font-medium text-[#eaeaea] transition-colors duration-200 hover:text-jovi-accent md:border-t-0 md:py-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
