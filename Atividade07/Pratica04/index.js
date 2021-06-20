const N = prompt('Informe um número: ');
let array = [];

for (let i = 0; i < parseInt(N); i++) {
    const palavra = prompt('Digite uma palavra: ');
    array[i] = palavra;
}

for (let i = parseInt(N) - 1; i >= 0; i--) {
   console.log(`Palavra ${i} = ${array[i]}`);
}