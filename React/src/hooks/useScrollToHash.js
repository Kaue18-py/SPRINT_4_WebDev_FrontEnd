import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const elemento = document.getElementById(decodeURIComponent(hash.slice(1)));
    elemento?.scrollIntoView({ behavior: "smooth" });
  }, [hash, key]);
}
