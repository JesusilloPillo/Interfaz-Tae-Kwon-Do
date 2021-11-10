const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');
const Marcador1 = document.getElementById('marcador1');
const Marcador2 = document.getElementById('marcador2');
const Faltas1 = document.getElementById('faltas1');
const Faltas2 = document.getElementById('faltas2');
const Rondas = document.getElementById('rondas');
const Jugador1 = document.getElementById('Participante1');
const Jugador2 = document.getElementById('Participante2');
const R1J1 = document.getElementById('P1Num1');
const R1J2 = document.getElementById('P2Num1');
const R2J1 = document.getElementById('P1Num2');
const R2J2 = document.getElementById('P2Num2');
const R3J1 = document.getElementById('P1Num3');
const R3J2 = document.getElementById('P2Num3');
const FP1 = document.getElementById('P1F');
const FP2 = document.getElementById('P2F');

let stopwatchInterval;
let runningTime = 0;
let puntop1 = 0;
let puntop2 = 0;
let faltap1 = 0;
let faltap2 = 0;
let rondas = 1;

const punto1 = () => {
    puntop1 ++;
    Marcador1.textContent = ''+puntop1;
}

const punto2 = () => {
    puntop2 ++;
    Marcador2.textContent = ''+puntop2;
}

const puntoNegativo1 = () => {
    faltap1 ++;
    Faltas1.textContent = ''+faltap1;
}

const puntoNegativo2 = () => {
    faltap2 ++;
    Faltas2.textContent = ''+faltap2;
}

const reinicio = () => {
    puntop1 = 0;
    Marcador1.textContent = ''+puntop1;
    puntop2 = 0;
    Marcador2.textContent = ''+puntop2;
    faltap1 = 0;
    Faltas1.textContent = ''+faltap1;
    faltap2 = 0;
    Faltas2.textContent = ''+faltap2;
    rondas = 1;
    Rondas.textContent = ''+rondas;
}

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(120px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}

function Ingresar(){
    var NombrePar1=(document.getElementById('Jugador1').value);
    Jugador1.textContent = ''+NombrePar1;
    var NombrePar2=(document.getElementById('Jugador2').value);
    Jugador2.textContent = ''+NombrePar2;
}

function siguienteRonda(){
    puntop1 = 0;
    Marcador1.textContent = ''+puntop1;
    puntop2 = 0;
    Marcador2.textContent = ''+puntop2;
    rondas ++;
    Rondas.textContent = ''+rondas;
}

function LlenarTabla() {
    if (rondas == 1) {
        R1J1.textContent = ''+puntop1;
        R1J2.textContent = ''+puntop2;
    }
    if (rondas == 2) {
        R2J1.textContent = ''+puntop1;
        R2J2.textContent = ''+puntop2;
    }
    if (rondas == 3) {
        R3J1.textContent = ''+puntop1;
        R3J2.textContent = ''+puntop2;
    }
    FP1.textContent = ''+faltap1;
    FP2.textContent = ''+faltap2;
}

function Limpiar(){
    Jugador1.textContent = 'Nombre del 1er. Jugador';
    Jugador2.textContent = 'Nombre del 2do. Jugador';
    R1J1.textContent = 'Puntos 1era. Ronda';
    R1J2.textContent = 'Puntos 1era. Ronda';
    R2J1.textContent = 'Puntos 2da. Ronda';
    R2J2.textContent = 'Puntos 2da. Ronda';
    R3J1.textContent = 'Puntos 3era. Ronda';
    R3J2.textContent = 'Puntos 3era. Ronda';
    FP1.textContent = 'Numero Total de Faltas';
    FP2.textContent = 'Numero Total de Faltas';
}