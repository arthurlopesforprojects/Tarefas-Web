const nome = prompt('Digite seu nome: ');
const idade = prompt('Digite a sua idade: ');

calcularIdade(nome, idade);

function calcularIdade(nome, n1){
    const idade = parseInt(n1);
    if (idade >= 65) {
        console.log(`${nome} você já pode se aposentar!`);
    } else if(idade < 0){
        console.log(`${nome} por favor digite uma idade válida!`);
    } else if(idade >= 0 && idade < 65){
        console.log(`${nome} falta ${65 - idade} anos pra que vc possa se aposentar!`)
    } else{
        console.log(`${nome} por favor digite um número!`);
    }
}
