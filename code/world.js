let pontosCJ = 0; // Você ganha pontos ao salvar uma Filó!
let pontos = 0;
let metros = 0;

let piscaTempo = 0;

let gameOverSoundPlayed = false; // Variável para controlar se o som já foi reproduzido

function world() {
  image(chao, -10, 425);

  textWorld();
}

function textWorld() {
  fill("#E6748B");

  if (gameStart == 0) {
    textSize(15);
    text(`E aperte "UP" para pular :)`, width / 2 - 140, 200);
    
    textSize(35);
    text(`Aperte "space" para jogar!`, width / 2 - 350, 150);
    piscaTempo += 1;

    if (piscaTempo > 30) {
      fill("#F3AAB9");
      text(`Aperte "space" para jogar!`, width / 2 - 350, 150);
      piscaTempo = 0;
    }
  } else if (gameStart == 1) {
    // escolheFundo(janelaX);

    textSize(25);
    text(`Capivaras Salvas: ${pontosCJ}`, 50, 50);
    text(`PT: ${pontos}`, width - 400, 50);
    text(`00${int(tempoGame * 0.05)}`, width - 200, 50);
  } else if (gameStart == 2) {
    background("#fff");

    if (!gameOverSoundPlayed) {
      dieSound.play();
      gameOverSoundPlayed = true;
    }

    textSize(45);
    text(`Game Over!`, width / 2 - 150, 150);
    textSize(20);
    text(`Aperte "R" para tentar novamente!`, width / 2 - 235, 190);

    textSize(15);
    text(`Capivaras Salvas: ${pontosCJ}`, width / 2 - 180, 240);
    text(`PT: ${pontos}`, width / 2 + 150, 240);
  }

  if (gameStart == 0 && keyIsPressed && key == " ") {
    console.log("O Jogo começou!");
    gameStart = 1;
  }
}

function keyTyped() {
  if (key === "r") {
    console.log("O Jogo recomeçou!");
    gameStart = 1;
    tempoGame = 0;
    tempo = 0;
    sorteioTipoObstaculo = 2;
    xCJ = width;
    xTangerina = width;
    xCaixa = width;
    pontos = 0;
    pontosCJ = 0;
    metros = 0;
    gameOverSoundPlayed = false;
  } else if (key === "R") {
    console.log("O Jogo recomeçou!");
    gameStart = 1;
    tempoGame = 0;
    tempo = 0;
    sorteioTipoObstaculo = 2;
    xCJ = width;
    xTangerina = width;
    xCaixa = width;
    pontos = 0;
    pontosCJ = 0;
    gameOverSoundPlayed = false;
    metros = 0;
  }
}
