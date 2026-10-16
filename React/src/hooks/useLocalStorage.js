import { useCallback, useState } from "react";

export default function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave);
      return salvo !== null ? JSON.parse(salvo) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  const salvar = useCallback(
    (novoValor) => {
      setValor((atual) => {
        const resolvido =
          typeof novoValor === "function" ? novoValor(atual) : novoValor;
        try {
          if (resolvido === null || resolvido === undefined) {
            localStorage.removeItem(chave);
          } else {
            localStorage.setItem(chave, JSON.stringify(resolvido));
          }
        } catch {
          return resolvido;
        }
        return resolvido;
      });
    },
    [chave]
  );

  return [valor, salvar];
}
