import useAuth from "../hooks/useAuth";
import useModoEstudante from "../hooks/useModoEstudante";
import FiltroMaterias from "../Components/FiltroMaterias";
import FotoCard from "../Components/FotoCard";
import Botao from "../Components/Botao";

function Estatistica({ valor, rotulo }) {
  return (
    <div className="rounded-xl bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
      <div className="text-2xl font-bold text-white">{valor}</div>
      <div className="text-sm text-[#d0d0e0]">{rotulo}</div>
    </div>
  );
}

function CarregandoFotos() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Carregando fotos">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="aspect-[4/3] bg-[#e3e7f3]" />
          <div className="space-y-2 p-4">
            <div className="h-4 w-3/4 rounded bg-[#e3e7f3]" />
            <div className="h-3 w-1/2 rounded bg-[#eef1fb]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AreaEstudante() {
  const { usuario } = useAuth();
  const {
    materias,
    fotos,
    totalFotos,
    totalFavoritas,
    contagemPorMateria,
    materiaSelecionada,
    setMateriaSelecionada,
    busca,
    setBusca,
    alternarFavorita,
    loading,
    error,
    recarregar,
  } = useModoEstudante(usuario.id);

  const primeiroNome = usuario.nome.split(" ")[0];

  return (
    <>
      <section className="bg-linear-to-br from-jovi-dark to-jovi-blue px-4 py-10 text-white md:px-5 md:py-14">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-jovi-accent">Modo Estudante</p>
            <h1 className="mt-1 text-[1.8rem] font-bold md:text-[2.2rem]">Olá, {primeiroNome}!</h1>
            <p className="text-[#d0d0e0]">{usuario.curso}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Estatistica valor={loading ? "–" : totalFotos} rotulo="fotos" />
            <Estatistica valor={loading ? "–" : materias.length} rotulo="matérias" />
            <Estatistica valor={totalFavoritas} rotulo="favoritas" />
          </div>
        </div>
      </section>

      <section className="bg-jovi-soft px-4 py-8 md:px-5 md:py-12">
        <div className="mx-auto max-w-[1100px]">
          {error ? (
            <div role="alert" className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="mb-2 text-lg font-semibold text-[#1b1b1b]">
                Não foi possível carregar suas fotos.
              </p>
              <p className="mb-5 text-sm text-[#666]">{error}</p>
              <Botao onClick={recarregar}>Tentar novamente</Botao>
            </div>
          ) : (
            <>
              <div className="mb-6 flex flex-col gap-4">
                <label className="relative block md:max-w-sm">
                  <span className="sr-only">Pesquisar fotos</span>
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" aria-hidden="true">
                    🔍
                  </span>
                  <input
                    type="search"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Pesquisar por título ou matéria"
                    className="w-full rounded-lg border border-[#d4dcf7] bg-white py-2.5 pl-10 pr-3 outline-none focus:border-jovi-blue focus:ring-2 focus:ring-jovi-blue/20"
                  />
                </label>

                {!loading && (
                  <FiltroMaterias
                    materias={materias}
                    contagem={contagemPorMateria}
                    total={totalFotos}
                    totalFavoritas={totalFavoritas}
                    selecionada={materiaSelecionada}
                    onSelecionar={setMateriaSelecionada}
                  />
                )}
              </div>

              {loading ? (
                <CarregandoFotos />
              ) : fotos.length === 0 ? (
                <div className="rounded-xl bg-white p-10 text-center text-[#555] shadow-sm">
                  Nenhuma foto encontrada com esse filtro.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {fotos.map((foto) => (
                    <FotoCard
                      key={foto.id}
                      {...foto}
                      onFavoritar={() => alternarFavorita(foto.id)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
