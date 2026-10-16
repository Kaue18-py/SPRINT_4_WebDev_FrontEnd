import { useCallback, useState } from "react";

// Liga/desliga um valor booleano (usado no menu mobile do Header)
export default function useToggle(inicial = false) {
  const [ligado, setLigado] = useState(inicial);

  const alternar = useCallback(() => setLigado((v) => !v), []);
  const desligar = useCallback(() => setLigado(false), []);

  return [ligado, alternar, desligar];
}
