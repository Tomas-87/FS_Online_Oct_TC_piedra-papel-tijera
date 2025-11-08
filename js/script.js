const botonJugada = document.querySelectorAll('.boton-jugada');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');
const resultados = document.getElementById('resultados');

let puntosUsuario = 0;
let puntosOrdenador = 0;

botonJugada.forEach((boton) => {
    boton.addEventListener('click', () => jugar(boton.dataset.jugada));
});



console.log(botonJugada);

const opciones = ['piedra', 'papel', 'tijera'];

function jugar(jugadaUsuario) {
    const jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    let resultado = '';
    if (jugadaUsuario === jugadaMaquina) {
        resultado = 'Empate';
    } else if (jugadaUsuario === 'piedra' && jugadaMaquina === 'tijera' ||
        jugadaUsuario === 'tijera' && jugadaMaquina === 'papel' ||
        jugadaUsuario === 'papel' && jugadaMaquina === 'piedra') {
        resultado = 'HAS GANADO 😆'
        puntosUsuario++
    } else {
        resultado = 'HAS PERDIDO 😒'
        puntosOrdenador++
    }
    contadorOrdenador.innerText = `Puntos del ordenador ${puntosOrdenador}`;
    contadorUsuario.innerText = `Puntos del Usuario ${puntosUsuario}`;
    resultados.innerText = resultado;
    resultados.style.animation = 'none';
    resultados.offsetHeight;
    resultados.style.animation = 'resultado 3s linear';
}



