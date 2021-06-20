let peso;
let altura;

const nome01 = prompt('Informe o nome da primeira pessoa: ');
peso = prompt('Informe o peso da primeira pessoa: ');
altura = prompt('Informe a altura (USE . AO INVES DE , EX:1.75) da primeira pessoa: ');

const imc01 = (parseFloat(peso) / (parseFloat(altura)*parseFloat(altura)));

const nome02 = prompt('Informe o nome da segunda pessoa: ');
peso = prompt('Informe o peso da segunda pessoa: ');
altura = prompt('Informe a altura (USE . AO INVES DE , EX:1.75) da segunda pessoa: ');

const imc02 = (parseFloat(peso) / (parseFloat(altura)*parseFloat(altura)));

if (imc01 > imc02){
    console.log(`O IMC de ${nome01} (${imc01}) é maior que o de ${nome02} (${imc02})`);
} else if (imc02 > imc01){
    console.log(`O IMC de ${nome02} (${imc02}) é maior que o de ${nome01} (${imc01})`);
}else{
    console.log(`O IMC de ${nome01} (${imc01}) é igual o de ${nome02} (${imc02})`);
}