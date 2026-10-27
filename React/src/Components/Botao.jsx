const variantes = {
  escuro: "bg-jovi-dark text-white hover:bg-jovi-blue",
  contorno: "border border-jovi-dark text-jovi-dark hover:bg-jovi-dark hover:text-white",
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
      className={`inline-flex cursor-pointer items-center justify-center rounded-md px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variantes[variante]} ${className}`}
      {...props}
    >
      {children}
    </Componente>
  );
}
