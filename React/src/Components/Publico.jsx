import Secao from "./Secao";

export default function Publico() {
  return (
    <Secao
      id="publico"
      numero="02"
      titulo="Público-alvo"
      className="bg-jovi-dark text-white"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <p className="font-display text-2xl font-semibold leading-snug md:text-[1.9rem]">
          O Modo Estudante foi desenvolvido pensando em{" "}
          <strong className="text-[#9db8ff]">estudantes</strong> que têm uma
          rotina cheia de tarefas e pouco tempo disponível. Esse público precisa
          registrar conteúdos de aula, anotações e materiais de estudo de forma
          rápida, sem perder tempo organizando fotos depois.
        </p>

        <div className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <h3 className="mb-3 text-lg font-bold">
            Por que o Modo Estudante é relevante para eles?
          </h3>
          <p className="text-white/70">
            Porque organiza automaticamente as fotos por matéria, facilita a
            busca de conteúdo e economiza o tempo que o estudante levaria
            organizando tudo manualmente.
          </p>
        </div>
      </div>
    </Secao>
  );
}
