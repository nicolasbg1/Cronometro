
const relogio = document.querySelector('.hour');
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");
const timer = document.querySelector("#timer");

let intervalId; // Variável para armazenar o ID do intervalo
let tempo = 0; // Variável para armazenar o tempo decorrido em segundos

function formatarTempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

function iniciarCronometro() {
  intervalId = setInterval(() => {
    tempo++;
    timer.innerHTML = formatarTempo(tempo);
  }, 1000);
  iniciar.disabled = true; // Desabilita o botão "Iniciar" enquanto o cronômetro está em execução
}

function pausarCronometro() {
  clearInterval(intervalId);
  iniciar.disabled = false; // Habilita o botão "Iniciar" novamente
}

function zerarCronometro() {
  clearInterval(intervalId);
  tempo = 0;
  timer.innerHTML = formatarTempo(tempo);
  iniciar.disabled = false; // Habilita o botão "Iniciar"
}

iniciar.addEventListener("click", iniciarCronometro);
pausar.addEventListener("click", pausarCronometro);
zerar.addEventListener("click", zerarCronometro);
