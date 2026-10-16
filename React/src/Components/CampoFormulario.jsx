export default function CampoFormulario({
  id,
  name = id,
  label,
  erro,
  multilinha = false,
  ...props
}) {
  const Elemento = multilinha ? "textarea" : "input";

  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-semibold">
        {label}
      </label>
      <Elemento
        id={id}
        name={name}
        aria-invalid={Boolean(erro)}
        aria-describedby={erro ? `${id}-erro` : undefined}
        className={`w-full rounded-lg border bg-white px-3 py-2.5 font-[inherit] outline-none transition-colors focus:border-jovi-blue focus:ring-2 focus:ring-jovi-blue/20 ${
          erro ? "border-red-500" : "border-[#ccc]"
        }`}
        {...props}
      />
      {erro && (
        <p id={`${id}-erro`} className="mt-1 text-sm text-red-600">
          {erro}
        </p>
      )}
    </div>
  );
}
