let bateuCJ = false;
let tangerinaContabilizada = false;
let bateuCaixa = false;
let pointSoundPlayed = false;

// LÓGICA DA COLISÃO
// x de quem está indo + largura do mesmo > x do segundo
// y de quem está indo + altura do mesmo > y so segundo
// y de quem esta indo < y do segundo + altura do mesmo
// x de quem esta indo < x do segundo + largura do mesmo

function colisoes() {
  colisaoNaCapivaraNaJaula();
  colisaoTangerina();
  colisaoCaixaTangerina();
  
}

function colisaoButtonJogar() {
  if (
    gameStart === 3 &&
    mouseX + 50 > 200 &&
    mouseY + 50 > 200 &&
    mouseY < 200 + 35 &&
    mouseX < 200 + 50
  ) {
    console.log("Você salvou uma Filó!");
  }
}

function colisaoNaCapivaraNaJaula() {
  if (
    sorteioTipoObstaculo === 1 &&
    !bateuCJ &&
    xCJ + 120 > cx &&
    295 + 120 > cy &&
    295 < cy + 100 &&
    xCJ < cx + 100
  ) {
    console.log("Você salvou uma Filó!");
    bateuCJ = true;
    pontosCJ++;

    if (!pointSoundPlayed) {
      pointSound.play();
      pointSoundPlayed = true;
    }

    setTimeout(() => {
      bateuCJ = false;
      pointSoundPlayed = false;
    }, 1000);
  }
}

function colisaoTangerina() {
  if (
    sorteioTipoObstaculo === 0 &&
    !tangerinaContabilizada &&
    xTangerina + 50 > cx &&
    385 + 50 > cy &&
    385 < cy + 120 &&
    xTangerina < cx + 120
  ) {
    console.log("Oh não! Você perdeu!");
    gameStart = 2;
  } else {
    if (xTangerina < -100) {
      if (!tangerinaContabilizada && sorteioTipoObstaculo === 0) {
        pontos++;
        if (!pointSoundPlayed) {
          pointSound.play();
          pointSoundPlayed = true;
        }

        tangerinaContabilizada = true;
        setTimeout(() => {
          tangerinaContabilizada = false;
          pointSoundPlayed = false;
        }, 1000);
      }
    }
  }
}

function colisaoCaixaTangerina() {
  if (
    sorteioTipoObstaculo === 2 &&
    !bateuCaixa &&
    xCaixa + 100 > cx &&
    322 + 90 > cy &&
    322 < cy + 100 &&
    xCaixa < cx + 100
  ) {
    console.log("Oh não! Você perdeu!");
    gameStart = 2;
  } else {
    if (xCaixa < -100) {
      if (!bateuCaixa && sorteioTipoObstaculo === 2) {
        pontos++;
        if (!pointSoundPlayed) {
          pointSound.play();
          pointSoundPlayed = true;
        }
        bateuCaixa = true;
        setTimeout(() => {
          bateuCaixa = false;
          pointSoundPlayed = false;
        }, 1000);
      }
    }
  }
}
