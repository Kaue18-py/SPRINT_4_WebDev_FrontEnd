function Chip({ ativo, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={ativo}
      className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        ativo
          ? "border-jovi-dark bg-jovi-dark text-white"
          : "border-[#d4dcf7] bg-white text-[#333] hover:border-jovi-blue hover:text-jovi-blue"
      }`}
    >
      {children}
    </button>
  );
}

export default function FiltroMaterias({
  materias,
  contagem,
  total,
  totalFavoritas,
  selecionada,
  onSelecionar,
}) {
  return (
    <div
      role="group"
      aria-label="Filtrar por matéria"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
    >
      <Chip ativo={selecionada === null} onClick={() => onSelecionar(null)}>
        Todas ({total})
      </Chip>
      {materias.map((materia) => (
        <Chip
          key={materia.id}
          ativo={selecionada === materia.id}
          onClick={() => onSelecionar(materia.id)}
        >
          {materia.icone} {materia.nome} ({contagem[materia.id] ?? 0})
        </Chip>
      ))}
      <Chip
        ativo={selecionada === "favoritas"}
        onClick={() => onSelecionar("favoritas")}
      >
        ★ Favoritas ({totalFavoritas})
      </Chip>
    </div>
  );
}
