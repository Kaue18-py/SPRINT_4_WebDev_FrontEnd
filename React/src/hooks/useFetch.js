import { useCallback, useEffect, useState } from "react";

// Hook genérico para consumir a API.
// Recebe uma função do services/api.js e devolve { data, loading, error, recarregar }.
export default function useFetch(buscar) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    buscar({ signal: controller.signal })
      .then((resultado) => {
        setData(resultado);
        setError(null);
      })
      .catch((erro) => {
        if (erro.name !== "AbortError") setError(erro.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    // Cancela a requisição se o componente sair da tela antes da resposta
    return () => controller.abort();
  }, [buscar, tentativa]);

  const recarregar = useCallback(() => {
    setLoading(true);
    setError(null);
    setTentativa((t) => t + 1);
  }, []);

  return { data, loading, error, recarregar };
}
