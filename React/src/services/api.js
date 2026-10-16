// Camada de serviço: toda comunicação com a API fica aqui, separada dos componentes.
// A API é mockada: os dados ficam em /public/api/*.json e são buscados com fetch,
// do mesmo jeito que seria com uma API real (MockAPI, back-end próprio etc.).

const BASE_URL = "/api";
const ATRASO_SIMULADO_MS = 500; // simula o tempo de resposta de um servidor

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function request(recurso, { signal } = {}) {
  await esperar(ATRASO_SIMULADO_MS);

  const resposta = await fetch(`${BASE_URL}/${recurso}.json`, { signal });

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao buscar "${recurso}"`);
  }

  return resposta.json();
}

export function getMaterias(options) {
  return request("materias", options);
}

export function getFotos(options) {
  return request("fotos", options);
}

// Autenticação mockada: busca os usuários e confere e-mail e senha.
// Em um projeto real essa verificação seria feita no back-end.
export async function login(email, senha) {
  const usuarios = await request("usuarios");

  const usuario = usuarios.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.senha === senha
  );

  if (!usuario) {
    throw new Error("E-mail ou senha inválidos.");
  }

  // Nunca devolvemos a senha para o restante da aplicação
  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    curso: usuario.curso,
  };
}

// Envio do formulário de contato (simulado)
export async function enviarMensagem(dados) {
  await esperar(ATRASO_SIMULADO_MS);
  console.log("Mensagem enviada:", dados);
  return { ok: true };
}
