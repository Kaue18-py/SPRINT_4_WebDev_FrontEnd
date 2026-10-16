import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Com React Router, links como "/#solucao" trocam a rota mas não rolam a página.
// Este hook rola até a seção do "#" sempre que a URL muda.
export default function useScrollToHash() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Página nova sem "#": vai direto para o topo, sem animação
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const elemento = document.getElementById(decodeURIComponent(hash.slice(1)));
    elemento?.scrollIntoView({ behavior: "smooth" });
  }, [hash, key]);
}
