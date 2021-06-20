const calcularGorjeta = (preco) =>{
    if(preco < 50 && preco > 0) {
        return ((preco / 100) * 20);
    } else if(preco >= 50 && preco < 200){
        return ((preco / 100) * 15);
    } else if(preco >= 200){
        return ((preco / 100) * 10);
    } else if(preco < 0){
        return -1;
    } else{
        return 0;
    }
};

const verRecibo = (listRestaurantes = [], listPrecos = [], listGorjetas) => {
    for (let i = 0; i < 3; i++) {
        console.log(`${listRestaurantes[i]} - [Valor: R$ ${listPrecos[i]} | Gorjeta: R$ ${listGorjetas[i]} | Total: R$ ${listPrecos[i] + listGorjetas[i]}]`);
    }
};

let restaurantes = [];
let precos = [];
let gorjetas = [];
let flag, flag2;

for (let i = 0; i < 3; i++) {
    restaurantes[i] = prompt(`Insira o nome do ${i+1} restaurante: `);
    precos[i] = parseFloat(prompt(`Insira a conta do ${i+1} restaurante: `));
    gorjetas[i] = calcularGorjeta(precos[i]);
    if(gorjetas[i] == 0){
        flag = true;
    }else if(gorjetas[i] == -1){
        flag2 = true;
    }
}

verRecibo(restaurantes, precos, gorjetas);

if(flag == true){console.log('Em alguma das contas vc digitou uma palavra ao invés de um número.');}
if(flag2 == true){console.log('Em alguma das contas vc digitou um número negativo.');}