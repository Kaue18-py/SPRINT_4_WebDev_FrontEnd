function formatarData(dataIso) {
  return dataIso.split("-").reverse().join("/");
}

export default function FotoCard({ titulo, tipo, data, materia, favorita, onFavoritar }) {
  const cor = materia?.cor ?? "#0944b9";

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
      <div
        className="relative flex aspect-[4/3] items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${cor}, ${cor}cc)` }}
      >
        <span className="text-5xl drop-shadow-sm" aria-hidden="true">
          {materia?.icone ?? "📷"}
        </span>
        <span className="absolute bottom-2 left-2 rounded-full bg-black/35 px-2.5 py-0.5 text-xs font-medium text-white">
          {tipo}
        </span>
        <button
          onClick={onFavoritar}
          aria-pressed={favorita}
          aria-label={favorita ? `Remover "${titulo}" das favoritas` : `Favoritar "${titulo}"`}
          className="absolute right-2 top-2 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-lg transition-transform hover:scale-110"
        >
          <span className={favorita ? "text-amber-500" : "text-[#999]"}>
            {favorita ? "★" : "☆"}
          </span>
        </button>
      </div>

      <div className="p-4">
        <h3 className="mb-1 font-semibold leading-snug text-[#1b1b1b]">{titulo}</h3>
        <div className="flex items-center justify-between text-sm text-[#666]">
          <span style={{ color: cor }} className="font-medium">
            {materia?.nome}
          </span>
          <time dateTime={data}>{formatarData(data)}</time>
        </div>
      </div>
    </article>
  );
}
