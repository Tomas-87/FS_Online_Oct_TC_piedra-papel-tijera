const botonJugada = document.querySelectorAll('.boton-jugada');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');
const resultados = document.getElementById('resultados');

let puntosUsuario = 0;
let puntosOrdenador = 0;

botonJugada.forEach((boton) => {
    boton.addEventListener('click', () => {
        let jugadaUsuario = boton.dataset.jugada
        jugadaConsola(jugadaUsuario)
    });
})

console.log(botonJugada);

const opciones = ['piedra', 'papel', 'tijera'];

function jugadaConsola(eleccion) {
    const makina = Math.floor(Math.random() * opciones.length);
    const jugadaMaquina = opciones[makina];
    let resultado = '';
    if (eleccion === jugadaMaquina) {
        resultado = 'Empate';
    } else if (eleccion === 'piedra' && makina === 'papel' ||
        eleccion === 'tijera' && makina === 'piedra' ||
        eleccion === 'papel' && makina === 'tijera') {
        resultado = 'Has Ganado'
        puntosUsuario++
    } else {
        resultado = 'Has Perdido';
        puntosOrdenador++
    }
    resultados.innerText = resultado
    contadorOrdenador.innerText = `Puntos del ordenador ${puntosOrdenador}`;
    contadorUsuario.innerText = `Puntos del Usuario ${puntosUsuario}`;
}


