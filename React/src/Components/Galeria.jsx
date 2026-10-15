import SectionHeader from "./SectionHeader";
const telas = [
    { src: "/imagens/Tela Inicial JOVI.jpeg", alt: "Tela inicial do app JOVI" },
    { src: "/imagens/Foto Forms Inteligente JOVI.jpeg", alt: "Tela do formulário inteligente" },
    { src: "/imagens/Câmera no Modo Estudante JOVI.jpeg", alt: "Tela do modo estudante" },
    { src: "/imagens/Organização por matérias JOVI.jpeg", alt: "Tela de organização por matérias" },
    { src: "/imagens/Novo Layout Câmera JOVI.jpeg", alt: "Tela do novo layout" },
    { src: "/imagens/Galeria nova JOVI.jpeg", alt: "Tela da galeria de fotos" },
];
export default function Galeria() {
    return (
        <section id="galeria" className="px-4 py-10 md:px-5 md:py-[60px]">
            <div className="mx-auto max-w-[1100px]">
                <SectionHeader
                    title="Galeria"
                    subtitle="Alguns mockups e telas pensadas para a solução."
                />

                <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(180px,240px))]">
                    {telas.map((tela) => (
                        <figure
                            key={tela.src}
                            className="aspect-[9/18] w-full max-w-60 justify-self-center overflow-hidden rounded-[18px] border-[6px] border-jovi-dark bg-[#ddd]"
                        >
                            <img
                                src={tela.src}
                                alt={tela.alt}
                                className="block h-full w-full object-cover"
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
