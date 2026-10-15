export default function SectionHeader({ title, subtitle }) {
    return (
        <>
            <h2 className="mb-2.5 text-center text-[2rem] font-bold text-[#1b1b1b]">
                {title}
            </h2>
            {subtitle && (
                <p className="mx-auto mb-10 max-w-[650px] text-center text-[#555]">
                    {subtitle}
                </p>
            )}
        </>
    );
}
