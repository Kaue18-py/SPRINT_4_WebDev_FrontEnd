import { useCallback, useState } from "react";

export default function useToggle(inicial = false) {
  const [ligado, setLigado] = useState(inicial);

  const alternar = useCallback(() => setLigado((v) => !v), []);
  const desligar = useCallback(() => setLigado(false), []);

  return [ligado, alternar, desligar];
}
