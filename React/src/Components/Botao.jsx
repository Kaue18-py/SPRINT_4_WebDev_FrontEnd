// Botão reutilizável: a aparência muda pela prop "variante"
// e ele pode virar um <Link> do React Router com a prop "as".
const variantes = {
  escuro: "bg-jovi-dark text-white hover:bg-jovi-hover",
  claro: "bg-white text-jovi-dark hover:bg-jovi-soft",
  contorno: "border border-white/70 text-white hover:bg-white/10",
};

export default function Botao({
  as: Componente = "button",
  variante = "escuro",
  className = "",
  children,
  ...props
}) {
  return (
    <Componente
      className={`inline-flex cursor-pointer items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variantes[variante]} ${className}`}
      {...props}
    >
      {children}
    </Componente>
  );
}
