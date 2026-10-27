const ATRASO_SIMULADO_MS = 500;

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function enviarMensagem(dados) {
  await esperar(ATRASO_SIMULADO_MS);
  console.log("Mensagem enviada:", dados);
  return { ok: true };
}
