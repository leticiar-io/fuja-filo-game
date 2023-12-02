let chao;
let janela;
let capi1, capi2, capi3, capi4;
let ob1, ob2, ob2_1, ob2_2, ob2_3, ob3;

let font;
let jumpSound, dieSound, pointSound;

let tela1, tela2, tela3;

function preload() {
  soundFormats("mp3", "ogg");
  jumpSound = loadSound("assets/jump");
  dieSound = loadSound("assets/die");
  pointSound = loadSound("assets/point");

  chao = loadImage("assets/floor.png");
  capi1 = loadImage("assets/c1.png");
  capi2 = loadImage("assets/c22.png");
  capi3 = loadImage("assets/c3-1.png");
  // capi4 = loadImage("assets/capi_die.png");

  ob1 = loadImage("assets/ob1.png");
  ob2 = loadImage("assets/ob2.png");

  ob2_1 = loadImage("assets/ob2_1.png");
  ob2_2 = loadImage("assets/ob2_2.png");
  ob2_3 = loadImage("assets/ob2_3.png");

  ob3 = loadImage("assets/ob3.png");

  font = loadFont("assets/pixel.TTF");
  
  tela1 = loadImage("assets/telas/F1.png");
  tela2 = loadImage("assets/telas/ta.jpg");
}
