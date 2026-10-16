import { useMemo, useState } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";
import { getFotos, getMaterias } from "../services/api";

// Toda a lógica da Área do Estudante fica aqui:
// buscar matérias e fotos na API, filtrar por matéria, pesquisar e favoritar.
// A página AreaEstudante.jsx só recebe os dados prontos e desenha a tela.
export default function useModoEstudante(usuarioId) {
  const materiasApi = useFetch(getMaterias);
  const fotosApi = useFetch(getFotos);

  const [materiaSelecionada, setMateriaSelecionada] = useState(null); // null = todas
  const [busca, setBusca] = useState("");
  const [favoritas, setFavoritas] = useLocalStorage(
    `jovi:favoritas:${usuarioId}`,
    []
  );

  const materias = useMemo(() => materiasApi.data ?? [], [materiasApi.data]);
  const fotos = useMemo(() => fotosApi.data ?? [], [fotosApi.data]);

  // Junta cada foto com os dados da matéria dela (nome, cor, ícone)
  const fotosComMateria = useMemo(() => {
    const porId = Object.fromEntries(materias.map((m) => [m.id, m]));
    return fotos
      .map((foto) => ({
        ...foto,
        materia: porId[foto.materiaId],
        favorita: favoritas.includes(foto.id),
      }))
      .sort((a, b) => b.data.localeCompare(a.data));
  }, [fotos, materias, favoritas]);

  // Quantidade de fotos em cada matéria (para os botões de filtro)
  const contagemPorMateria = useMemo(() => {
    const contagem = {};
    fotos.forEach((f) => {
      contagem[f.materiaId] = (contagem[f.materiaId] ?? 0) + 1;
    });
    return contagem;
  }, [fotos]);

  const fotosFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return fotosComMateria.filter((foto) => {
      const passaMateria =
        materiaSelecionada === null ||
        (materiaSelecionada === "favoritas"
          ? foto.favorita
          : foto.materiaId === materiaSelecionada);
      const passaBusca =
        termo === "" ||
        foto.titulo.toLowerCase().includes(termo) ||
        foto.materia?.nome.toLowerCase().includes(termo);
      return passaMateria && passaBusca;
    });
  }, [fotosComMateria, materiaSelecionada, busca]);

  function alternarFavorita(fotoId) {
    setFavoritas((atuais) =>
      atuais.includes(fotoId)
        ? atuais.filter((id) => id !== fotoId)
        : [...atuais, fotoId]
    );
  }

  function recarregar() {
    materiasApi.recarregar();
    fotosApi.recarregar();
  }

  return {
    materias,
    fotos: fotosFiltradas,
    totalFotos: fotos.length,
    totalFavoritas: favoritas.length,
    contagemPorMateria,
    materiaSelecionada,
    setMateriaSelecionada,
    busca,
    setBusca,
    alternarFavorita,
    loading: materiasApi.loading || fotosApi.loading,
    error: materiasApi.error || fotosApi.error,
    recarregar,
  };
}
