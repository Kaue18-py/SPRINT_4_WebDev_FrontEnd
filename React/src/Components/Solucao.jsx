import SectionHeader from "./SectionHeader";

const cards = [
  {
    icone: "📷",
    titulo: "Formulário Inteligente",
    texto:
      "O sistema faz perguntas iniciais para entender o usuário e reorganizar a câmera automaticamente.",
    itens: [
      "Preferências de uso",
      "Tipo de fotografia",
      "Organização desejada",
      "Perfil do usuário",
    ],
  },
  {
    icone: "🎓",
    titulo: "Modo Estudante",
    texto:
      "Pensado para quem usa a câmera para estudar e precisa manter tudo organizado.",
    itens: [
      "Organização de fotos em pastas",
      "Separação por matérias",
      "Melhor gerenciamento de arquivos",
      "Interface simplificada",
    ],
  },
  {
    icone: "✨",
    titulo: "Novo Layout",
    texto:
      "Uma interface repensada para deixar a experiência mais moderna e fácil de usar.",
    itens: [
      "Visual mais limpo",
      "Navegação melhorada",
      "Acesso rápido às funções",
      "Experiência mais intuitiva",
    ],
  },
];

function Card({ icone, titulo, texto, itens }) {
  return (
    <article className="rounded-xl bg-white px-6 py-[30px] text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <div className="mb-3 text-[2.2rem]">{icone}</div>
      <h3 className="mb-3 text-xl font-bold text-[#1b1b1b]">{titulo}</h3>
      <p>{texto}</p>
      <ul className="mt-2.5 text-left">
        {itens.map((item) => (
          <li
            key={item}
            className="py-1 text-[#444] before:font-bold before:text-jovi-accent before:content-['✓_']"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Solucao() {
  return (
    <section id="solucao" className="px-4 py-10 md:px-5 md:py-[60px]">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          title="A Solução"
          subtitle="A solução criada tem a função de resolver um problema comum: a dificuldade de organizar fotos e encontrar um modo de câmera adequado para cada tipo de uso. Nossa solução une um Formulário Inteligente, um modo dedicado para estudantes e um layout mais simples de usar."
        />

        <div className="mt-5 grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.titulo} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
