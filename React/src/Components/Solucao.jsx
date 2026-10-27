import Secao from "./Secao";

const cards = [
  {
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

function Card({ numero, titulo, texto, itens }) {
  return (
    <article className="py-8 first:pt-0 lg:px-8 lg:py-0 lg:first:pl-0 lg:last:pr-0">
      <span className="font-display text-sm font-semibold text-jovi-blue">{numero}</span>
      <h3 className="mb-3 mt-2 font-display text-2xl font-bold tracking-tight">{titulo}</h3>
      <p className="text-jovi-muted">{texto}</p>
      <ul className="mt-6">
        {itens.map((item) => (
          <li key={item} className="border-t border-jovi-line py-2.5 text-[0.95rem]">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Solucao() {
  return (
    <Secao
      id="solucao"
      numero="01"
      titulo="A solução"
      subtitulo="A solução criada tem a função de resolver um problema comum: a dificuldade de organizar fotos e encontrar um modo de câmera adequado para cada tipo de uso. Nossa solução une um Formulário Inteligente, um modo dedicado para estudantes e um layout mais simples de usar."
    >
      <div className="grid grid-cols-1 divide-y divide-jovi-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {cards.map((card, i) => (
          <Card key={card.titulo} numero={String(i + 1).padStart(2, "0")} {...card} />
        ))}
      </div>
    </Secao>
  );
}
