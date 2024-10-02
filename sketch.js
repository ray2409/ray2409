//fantasia, aventura, drama

//a viagem de chihiro, LIVRE, fantasia, aventura
//guardioes da galaxia, 12, fantasia, aventura

//as aventuras de pi, 10, drama, fantasia, aventura
//paddington, LIVRE, fansia, aventura
//ladroes de bicicleta, 12, drama
//o menino que descobriu o vento, 14, drama


function setup() {
  createCanvas(400, 400);
  createInput("15");
}

function draw() {
  background(220);
  let idade = capoIidade;
  let recomendacao = geraRecomendacao(idade);
  text(recomendado, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10){
    return "As aventuras de pi";
  } else {
    return "A viagem de chihiro";
  }
}