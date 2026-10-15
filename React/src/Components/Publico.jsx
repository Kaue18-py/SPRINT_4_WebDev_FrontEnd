import SectionHeader from "./SectionHeader";

export default function Publico() {
  return (
    <section
      id="publico"
      className="bg-jovi-soft px-4 py-10 md:px-5 md:py-[60px]"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader title="Público-Alvo" />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="text-[1.1rem] text-[#333]">
            <p>
              O Modo Estudante foi desenvolvido pensando em{" "}
              <strong>estudantes</strong> que têm uma rotina cheia de tarefas e
              pouco tempo disponível. Esse público precisa registrar conteúdos
              de aula, anotações e materiais de estudo de forma rápida, sem
              perder tempo organizando fotos depois.
            </p>
          </div>

          <div className="rounded-xl bg-white p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <h3 className="text-xl font-bold text-[#1b1b1b]">
              Por que o Modo Estudante é relevante para eles?
            </h3>
            <p>
              Porque organiza automaticamente as fotos por matéria, facilita a
              busca de conteúdo e economiza o tempo que o estudante levaria
              organizando tudo manualmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
