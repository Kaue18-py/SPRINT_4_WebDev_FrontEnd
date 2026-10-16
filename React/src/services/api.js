const BASE_URL = "/api";
const ATRASO_SIMULADO_MS = 500;

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

export async function login(email, senha) {
  const usuarios = await request("usuarios");

  const usuario = usuarios.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.senha === senha
  );

  if (!usuario) {
    throw new Error("E-mail ou senha inválidos.");
  }

  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    curso: usuario.curso,
  };
}

export async function enviarMensagem(dados) {
  await esperar(ATRASO_SIMULADO_MS);
  console.log("Mensagem enviada:", dados);
  return { ok: true };
}
