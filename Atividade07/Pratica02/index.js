const nome = prompt("Informe seu nome: ");
const peso = prompt("Informe seu peso: ");
const altura = prompt(
  "Informe sua altura (USE '.' AO INVES DE ',' EX:1.75): "
);

const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

console.log(imc);
if (imc < 17) {
  //Muito abaixo do peso
  console.log(`${nome}! Você está muito abaixo do peso.`);
  console.log(`Dica: procure um médico.`);
} else if (imc >= 17 && imc < 18.5) {
  //Abaixo do peso
  console.log(`${nome}! Você está abaixo do peso.`);
  console.log(`Dica: tente comer mais.`);
} else if (imc >= 18.5 && imc < 25) {
  //Normal
  console.log(`${nome}! Você está peso normal.`);
  console.log(`Dica: continue assim.`);
} else if (imc >= 25 && imc < 30) {
  //Acima do Peso
  console.log(`${nome}! Você está acima do peso.`);
  console.log(`Dica: tente fazer alguns exercícios.`);
} else if (imc >= 30 && imc < 35) {
  //Obesidade I
  console.log(`${nome}! Você está obeso.`);
  console.log(`Dica: vá a um nutricionista.`);
} else if (imc >= 35 && imc < 40) {
  //Obsesidade II (severa)
  console.log(`${nome}! Você está com obesidade severa.`);
  console.log(`Dica: procure um médico o quanto antes.`);
} else {
  //Obesidade III (mórbida)
  console.log(`${nome}! Você está com obesidade mórbida.`);
  console.log(
    `Dica: procure um médico, esse peso pode te causar muitas doenças e complicações.`);
}