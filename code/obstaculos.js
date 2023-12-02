let sorteioTipoObstaculo;

let xCJ, xTangerina, xCaixa;

let tempoCJ1 = 0;
let tempoCJ2 = 0;
let tempoCJ3 = 0;

const cJaula1 = 0;
const cJaula2 = 1;
const cJaula3 = 2;
const cJaula4 = 3;

let estadoCJ = cJaula1;

function obstaculos() {
  if (sorteioTipoObstaculo === 0) {
    mostraTangerinas(xTangerina);
  } else if (sorteioTipoObstaculo === 1) {
    mefCapivaraJaula();
    capivaraNaJaulaEstados(estadoCJ, xCJ);
  } else if (sorteioTipoObstaculo === 2) {
    mostraCaixaDeTangerinas(xCaixa);
  }
}

// Obstáculo 01 - Capivaras para serem salvas
function capivaraNaJaulaEstados(estado, x) {
  if (estado == cJaula1) {
    image(ob2, x, 295, 150, 150);
  } else if (estado == cJaula2) {
    image(ob2_1, x, 295, 150, 150);
  } else if (estado == cJaula3) {
    image(ob2_2, x, 295, 150, 150);
  } else if (estado == cJaula4) {
    image(ob2_3, x, 295, 150, 150);
  }
}

function mefCapivaraJaula() {
  if (bateuCJ == true) {
    if (estadoCJ == cJaula1) {
      tempoCJ1++;
      if (tempoCJ1 >= 10) {
        tempoCJ1 = 0;
        estadoCJ = cJaula2;
      }
    } else if (estadoCJ == cJaula2) {
      tempoCJ2++;
      if (tempoCJ2 >= 10) {
        tempoCJ2 = 0;
        estadoCJ = cJaula3;
      }
    } else if (estadoCJ == cJaula3) {
      tempoCJ3++;
      if (tempoCJ3 >= 10) {
        tempoCJ3 = 0;
        estadoCJ = cJaula4;
      }

      setTimeout(() => {
        estadoCJ = cJaula1;
      }, 1000);
    }
  }
}

// Obstáculo 02 - Tangerinas
function mostraTangerinas(x) {
  image(ob1, x, 385, 60, 50);
}

// Obstáculo 03 - Caixa de Tangerinas
function mostraCaixaDeTangerinas(x) {
  image(ob3, x, 322, 120, 120);
}
