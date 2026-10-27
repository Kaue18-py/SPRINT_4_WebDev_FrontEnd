import Secao from "./Secao";

const telas = [
    { src: "/imagens/Tela Inicial JOVI.jpeg", legenda: "Tela inicial" },
    { src: "/imagens/Foto Forms Inteligente JOVI.jpeg", legenda: "Formulário inteligente" },
    { src: "/imagens/Câmera no Modo Estudante JOVI.jpeg", legenda: "Câmera no Modo Estudante" },
    { src: "/imagens/Organização por matérias JOVI.jpeg", legenda: "Organização por matérias" },
    { src: "/imagens/Novo Layout Câmera JOVI.jpeg", legenda: "Novo layout da câmera" },
    { src: "/imagens/Galeria nova JOVI.jpeg", legenda: "Galeria de fotos" },
];

export default function Galeria() {
    return (
        <Secao
            id="galeria"
            numero="03"
            titulo="Galeria"
            subtitulo="Alguns mockups e telas pensadas para a solução."
        >
            <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-12 md:overflow-visible md:px-0 md:pb-0">
                {telas.map((tela, i) => (
                    <figure key={tela.src} className="w-[210px] shrink-0 snap-start md:w-auto">
                        <div className="aspect-[9/18] overflow-hidden rounded-[22px] border-[6px] border-jovi-dark bg-jovi-dark">
                            <img
                                src={tela.src}
                                alt={`Tela do app JOVI: ${tela.legenda.toLowerCase()}`}
                                loading="lazy"
                                className="block h-full w-full object-cover"
                            />
                        </div>
                        <figcaption className="mt-3 flex gap-3 text-sm">
                            <span className="text-jovi-muted">{String(i + 1).padStart(2, "0")}</span>
                            <span className="font-medium">{tela.legenda}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </Secao>
    );
}
