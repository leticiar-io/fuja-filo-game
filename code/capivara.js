// Estados da Capivara
const PARADO = 1;
const PASSO1 = 0;
const PASSO2 = 2;
const PASSO3 = 3;
const DIE = 4;

let cx = 150;

let tempoParado = 0;
let tempoC1 = 0; // PASSO1
let tempoC2 = 0; // PASSO2
let tempoC3 = 0; // PASSO3

let estado = PARADO;
let tempoDePulo = 0;
let puloSoundPlayed = false; // Variável para controlar se o som de pulo já foi reproduzido

let cy = 300;

function capivara() {
  capivaraEstados(estado);
  MEF();
  saltoMEF();
}

function capivaraEstados(estado) {
  if (estado == PARADO) {
    image(capi2, cx, cy, 200, 150);
  } else if (estado == PASSO1) {
    image(capi1, cx, cy, 200, 150);
  } else if (estado == PASSO2) {
    image(capi3, cx, cy, 200, 150);
  } else if (estado == PASSO3) {
    image(capi1, cx, cy, 200, 150);
  }
}

function MEF() {
  // PARADO - PASSO1 - PASSO3 - PASSO2 - PARADO

  if (gameStart == 1) {
    if (estado == PARADO) {
      tempoParado++;
      if (tempoParado >= 40) {
        tempoParado = 0;
        estado = PASSO1;
      }
    }

    if (estado == PASSO1) {
      tempoC2++;
      if (tempoC2 >= 40) {
        tempoC2 = 0;
        estado = PARADO;
      }
    }

    if (estado == PASSO3) {
      tempoC3++;
      if (tempoC3 >= 40) {
        tempoC3 = 0;
        estado = PASSO2;
      }
    }

    if (estado == PASSO2) {
      tempoC1++;
      if (tempoC1 >= 40) {
        tempoC1 = 0;
        estado = PARADO;
      }
    }
  }
}

function saltoMEF() {
  const gravidade = 0.5;
  const velocidadeInicial = 15;

  if (keyIsPressed && keyCode == UP_ARROW && tempoDePulo === 0) {
    tempoDePulo = 2; // 1
    frameRate(40);

    if (!puloSoundPlayed) {
      jumpSound.play();
      puloSoundPlayed = true;
    }
  }

  if (tempoDePulo > 0) {
    let alturaPulo = MRUV(velocidadeInicial, -gravidade, tempoDePulo);
    cy = height - 200 - alturaPulo;

    tempoDePulo++;

    if (tempoDePulo > 60) { // Ajuste conforme necessário
      tempoDePulo = 0;
      cy = height - 200;
      puloSoundPlayed = false;
      frameRate(60); // Restaura a taxa de quadros padrão
    }
  }
}

function MRUV(v0, a, t) {
  return v0 * t + (a * t * t) / 2.0;
}
