import countdown from './countdown.js';

const tempoParaNatal = new countdown('24 December 2021 23:59:59 GMT-0300');

const contadorDias = document.createElement("div");
const contadorHoras = document.createElement("div");
const contadorMinutos = document.createElement("div");
const contadorSegundos = document.createElement("div");

document.body.appendChild(contadorDias);
document.body.appendChild(contadorHoras);
document.body.appendChild(contadorMinutos);
document.body.appendChild(contadorSegundos);

contadorDias.classList.add("clock");
contadorHoras.classList.add("clock");
contadorMinutos.classList.add("clock");
contadorSegundos.classList.add("clock");

const diasFaltantes = document.createElement("span");
contadorDias.appendChild(diasFaltantes);
const txtDias = document.createElement("div");
contadorDias.appendChild(txtDias);
txtDias.classList.add("smalltext");
txtDias.innerText = "DIA(S)";

const horasFaltantes = document.createElement("span");
contadorHoras.appendChild(horasFaltantes);
const txtHoras = document.createElement("div");
contadorHoras.appendChild(txtHoras);
txtHoras.classList.add("smalltext");
txtHoras.innerText = "HORA(S)";

const minutosFaltantes = document.createElement("span");
contadorMinutos.appendChild(minutosFaltantes);
const txtMinutos = document.createElement("div");
contadorMinutos.appendChild(txtMinutos);
txtMinutos.classList.add("smalltext");
txtMinutos.innerText = "MINUTO(S)";

const segundosFaltantes = document.createElement("span");
contadorSegundos.appendChild(segundosFaltantes);
const txtSegundos = document.createElement("div");
contadorSegundos.appendChild(txtSegundos);
txtSegundos.classList.add("smalltext");
txtSegundos.innerText = "SEGUNDO(S)";

setInterval(() => {
  diasFaltantes.innerText = tempoParaNatal.total.days;
  horasFaltantes.innerText = tempoParaNatal.total.hours;
  minutosFaltantes.innerText = tempoParaNatal.total.minutes;
  segundosFaltantes.innerText = tempoParaNatal.total.seconds;
}, 1000)





