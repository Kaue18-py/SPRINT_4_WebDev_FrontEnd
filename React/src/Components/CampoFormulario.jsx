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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <Elemento
        id={id}
        name={name}
        aria-invalid={Boolean(erro)}
        aria-describedby={erro ? `${id}-erro` : undefined}
        className={`w-full rounded-md border bg-white px-3.5 py-3 font-[inherit] outline-none transition-colors placeholder:text-[#9a9aa2] focus:border-jovi-blue focus:ring-2 focus:ring-jovi-blue/15 ${
          erro ? "border-red-600" : "border-jovi-line"
        }`}
        {...props}
      />
      {erro && (
        <p id={`${id}-erro`} className="mt-1 text-sm text-red-700">
          {erro}
        </p>
      )}
    </div>
  );
}
