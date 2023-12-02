let gameStart = 3; // Variavel que cuida das telas
let tempoGame; // tempo do jogo

let d, v, tempo, ac; // velocidade da capivara

function setup() {
  createCanvas(1200, 500);

  textFont(font); // roda a fonte pixelada

  tempoGame = 0;
  tempo = 0;
  v = 0.2;
  ac = 0.2;
  d = 0;

  sorteioTipoObstaculo = int(random(0, 3)); // sorteador do obstáculo

  xCJ = width;
  xTangerina = width;
  xCaixa = width;
}

function draw() {
  background("#FCD9E0");
  
  world();
  elementos();
  obstaculos();
  capivara(gameStart);
  colisoes();

  if (gameStart == 3) {
    image(tela1, 0, 0, width, height);

    fill("#FFFFFF00");
    noStroke();
    rect(716, 250, 412, 62);

    if (
      gameStart == 3 &&
      mouseIsPressed &&
      mouseX > 716 &&
      mouseX < 1128 &&
      mouseY > 250 &&
      mouseY < 312
    ) {
      gameStart = 0;
    }

    rect(716, 339, 412, 62);

    if (
      mouseIsPressed &&
      mouseX > 716 &&
      mouseX < 1128 &&
      mouseY > 339 &&
      mouseY < 401
    ) {
      gameStart = 4;
    }
  }

  if (gameStart === 4) {
    image(tela2, 0, 0, width, height);

    fill("#FFFFFF00");
    noStroke();

    rect(50, 42, 254, 52);

    fill("#F3AAB9");
    
    if (
      mouseIsPressed &&
      mouseX > 50 &&
      mouseX < 304 &&
      mouseY > 42 &&
      mouseY < 94
    ) {
      gameStart = 3;
    }
  }
}

function elementos() {
  if (gameStart == 1) {
    tempo += 0.05;
    d = MRUV(v, ac, tempo);

    tempoGame++;
    xCJ -= d;
    xTangerina -= d;
    xCaixa -= d;
  }

  criaLoop();

  if (tempoGame > 600) {
    v = 0.5;
  } else if (tempoGame > 1000) {
    v = 0.6;
  } else if (tempoGame > 1600) {
    v = 0.8;
  }
}

function criaLoop() {
  if (xCJ < -150 || xTangerina < -150 || xCaixa < -150) {
    tempo = 0;
    sorteioTipoObstaculo = int(random(0, 3));

    xCJ = width;
    xTangerina = width;
    xCaixa = width;

    estadoCJ = cJaula1;
  }
}
