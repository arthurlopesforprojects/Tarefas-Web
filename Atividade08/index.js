//Funções
const calcularGorjeta = function () {
  if (this.preco < 50 && this.preco > 0) {
    this.gorjeta = this.preco * 0.2;
  } else if (this.preco >= 50 && this.preco < 200) {
    this.gorjeta = this.preco * 0.15;
  } else if (this.preco >= 200) {
    this.gorjeta = this.preco * 0.1;
  }
  return this.gorjeta;
};

const calcularPrecoTotal = function () {
  this.precoTotal = this.preco + this.gorjeta;
  return this.precoTotal;
};

const toString = function () {
  console.log(
    `   ${this.nome} - [Valor: R$ ${this.preco} | Gorjeta: R$ ${this.gorjeta} | Total: R$ ${this.precoTotal}]`
  );
};

//Começo da Lógica

let restaurantes = [];

const qtdRestaurantes = prompt(
  `Insira a quantidade de restaurantes visitados: `
);

for (let i = 0; i < qtdRestaurantes; i++) {
const resNome = prompt(`Insira o nome do ${i + 1} restaurante: `);
const resPreco = parseFloat(
    prompt(`Insira a conta do ${i + 1} restaurante: `)
  );
  const restaurante = {
    nome: resNome,
    preco: resPreco,
    calcularGorjeta,
    calcularPrecoTotal,
    toString,
  };

  restaurante.calcularGorjeta();
  restaurante.calcularPrecoTotal();
  restaurantes.push(restaurante);
}

//Funções
restaurantes.calcularGastoTotal = function () {
  let total = 0;
  for (let i = 0; i < qtdRestaurantes; i++) {
    total = total + restaurantes[i].precoTotal;
  }
  return total;
};

restaurantes.mediaGastoTotal = function () {
  const mediaTotal = restaurantes.calcularGastoTotal();
  const media = mediaTotal / qtdRestaurantes;
  return media;
};

restaurantes.restMaiorPrecoTotal = function () {
  let maiorPreco = 0;
  let restMaiorPreco = 0;
  for (let i = 0; i < qtdRestaurantes; i++) {
    if (maiorPreco < restaurantes[i].precoTotal) {
      restMaiorPreco = i;
      maiorPreco = restaurantes[i].precoTotal;
    }
  }

  return restaurantes[restMaiorPreco];
};

restaurantes.imprimir = function () {
  console.log(`Restaurantes visitados no feriado: ${qtdRestaurantes}`);
  console.log(`Lista de gastos: `);
  for (let i = 0; i < qtdRestaurantes; i++) {
    restaurantes[i].toString();
  }
  console.log(`Total gasto: R$ ${restaurantes.calcularGastoTotal()}`);
  console.log(`Média de gastos: R$ ${restaurantes.mediaGastoTotal()}`);
  const maior = restaurantes.restMaiorPrecoTotal();
  console.log(
    `Restaurante com maior gasto total: ${maior.nome} (R$ ${maior.precoTotal})`
  );
};

restaurantes.imprimir();