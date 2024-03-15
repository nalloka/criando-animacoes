let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setupl() {
  createCanvas(400, 400);
   background(color(200,0,100));
  cor = color(blue(0,255), blue(0,255), blue(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,100);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}
