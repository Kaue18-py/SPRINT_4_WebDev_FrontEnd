export default function Secao({ id, numero, titulo, subtitulo, className = "", children }) {
    return (
        <section id={id} className={`px-4 py-16 md:px-8 md:py-24 ${className}`}>
            <div className="mx-auto grid max-w-[1160px] gap-x-4 gap-y-3 border-t border-current pt-5 md:grid-cols-[180px_1fr]">
                <span className="text-sm font-medium opacity-60">{numero}</span>
                <div className="min-w-0">
                    <h2 className="font-display text-[2rem] font-bold leading-[1.05] tracking-tight md:text-[2.75rem]">
                        {titulo}
                    </h2>
                    {subtitulo && (
                        <p className="mt-4 max-w-[620px] text-lg opacity-70">{subtitulo}</p>
                    )}
                    <div className="mt-10 md:mt-14">{children}</div>
                </div>
            </div>
        </section>
    );
}
