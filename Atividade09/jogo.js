let jogo;

const elementos = {
  telaCadastro: document.getElementById('cadastro'),
  telaInicial: document.getElementById('inicial'),
  telaJogo: document.getElementById('jogo'),
  telaMensagem: document.querySelector('.mensagem'),
  textoMensagem: document.querySelector('.mensagem .texto'),
  teclado: document.querySelector('.teclado'),
  dica: document.querySelector('.dica .pista'),
  palavra: document.querySelector('.palavra'),
  formulario: {
    formularioId: document.querySelector('#formulario'),
    dificuldades: document.querySelectorAll('[name="dificuldade"]'),
    palavra: document.getElementById('cadastroPalavra'),
    dica: document.getElementById('cadastroDica'),
    botaoCadastro: document.getElementById('cadastroBotao'),
    dificuldadeSelecionada: function () {
      for (const dificuldade of this.dificuldades) {
        if (dificuldade.checked) {
          return dificuldade.value;
        }
      }
    },
    limparRadios: function () {
      for (const dificuldade of this.dificuldades) {
        dificuldade.checked = false;
      }
    },
  },
  botoes: {
    facil: document.querySelector('.botao-facil'),
    medio: document.querySelector('.botao-medio'),
    dificil: document.querySelector('.botao-dificil'),
    reiniciar: document.querySelector('.reiniciar'),
    cadastrar: document.querySelector('.botao-cadastrar'),
  },
  boneco: [
    document.querySelector('.boneco-cabeca'),
    document.querySelector('.boneco-corpo'),
    document.querySelector('.boneco-braco-esquerdo'),
    document.querySelector('.boneco-braco-direito'),
    document.querySelector('.boneco-perna-esquerda'),
    document.querySelector('.boneco-perna-direita'),
  ],
};

const palavras = {
  facil: [
    { nome: 'série', dica: 'nao sei 1' },
    { nome: 'avaro', dica: 'nao sei 2' },
    { nome: 'maior', dica: 'nao sei 3' },
    { nome: 'noite', dica: 'nao sei 4' },
    { nome: 'ímpar', dica: 'nao sei 5' },
    { nome: 'salvo', dica: 'nao sei 6' },
    { nome: 'vetor', dica: 'nao sei 7' },
    { nome: 'prado', dica: 'nao sei 8' },
    { nome: 'pecha', dica: 'nao sei 9' },
    { nome: 'diana', dica: 'nao sei 10' },
  ],
  medio: [
    { nome: 'cônjuge', dica: 'nao sei 1' },
    { nome: 'exceção', dica: 'nao sei 2' },
    { nome: 'efêmero', dica: 'nao sei 3' },
    { nome: 'prolixo', dica: 'nao sei 4' },
    { nome: 'idílico', dica: 'nao sei 5' },
    { nome: 'análogo', dica: 'nao sei 6' },
    { nome: 'caráter', dica: 'nao sei 7' },
    { nome: 'genuíno', dica: 'nao sei 8' },
    { nome: 'estória', dica: 'nao sei 9' },
    { nome: 'sublime', dica: 'nao sei 10' },
  ],
  dificil: [
    { nome: 'concepção', dica: 'nao sei 1' },
    { nome: 'plenitude', dica: 'nao sei 2' },
    { nome: 'essencial', dica: 'nao sei 3' },
    { nome: 'hipócrita', dica: 'nao sei 4' },
    { nome: 'corolário', dica: 'nao sei 5' },
    { nome: 'paradigma', dica: 'nao sei 6' },
    { nome: 'dicotomia', dica: 'nao sei 7' },
    { nome: 'hegemonia', dica: 'nao sei 8' },
    { nome: 'ratificar', dica: 'nao sei 9' },
    { nome: 'propósito', dica: 'nao sei 10' },
  ],
};

const novoJogo = () => {
  jogo = {
    dificuldade: undefined,
    palavra: {
      original: undefined,
      semAcentos: undefined,
      tamanho: undefined,
      dica: undefined,
    },
    acertos: undefined,
    jogadas: [],
    chances: 6,
    definirPalavra: function (palavra) {
      this.palavra.original = palavra.nome;
      this.palavra.tamanho = palavra.nome.length;
      this.palavra.dica = palavra.dica;
      this.acertos = '';
      this.palavra.semAcentos = this.palavra.original.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      for (let i = 0; i < this.palavra.tamanho; i++) {
        this.acertos += ' ';
      }
    },
    jogar: function (letraJogada) {
      let acertou = false;
      for (let i = 0; i < this.palavra.tamanho; i++) {
        const letra = this.palavra.semAcentos[i].toLowerCase();
        if (letra === letraJogada.toLowerCase()) {
          acertou = true;
          this.acertos = replace(this.acertos, i, this.palavra.original[i]);
        }
      }
      if (!acertou) {
        this.chances--;
      }
      return acertou;
    },
    ganhou: function () {
      return !this.acertos.includes(' ');
    },
    perdeu: function () {
      return this.chances <= 0;
    },
    acabou: function () {
      return this.ganhou() || this.perdeu();
    },
  };

  elementos.telaInicial.style.display = 'flex';
  elementos.telaCadastro.style.display = 'none';
  elementos.telaJogo.style.display = 'none';
  elementos.telaMensagem.style.display = 'none';
  elementos.telaMensagem.classList.remove('mensagem-vitoria');
  elementos.telaMensagem.classList.remove('mensagem-derrota');
  for (const parte of elementos.boneco) {
    parte.classList.remove('escondido');
    parte.classList.add('escondido');
  }

  criarTeclado();
};

const criarTeclado = () => {
  const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  elementos.teclado.textContent = '';
  for (const letra of letras) {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(letra.toUpperCase()));
    button.classList.add(`botao-${letra}`);

    elementos.teclado.appendChild(button);

    button.addEventListener('click', () => {
      if (!jogo.jogadas.includes(letra) && !jogo.acabou()) {
        const acertou = jogo.jogar(letra);
        jogo.jogadas.push(letra);
        button.classList.add(acertou ? 'certo' : 'errado');
        mostrarPalavra();

        if (!acertou) {
          mostrarErro();
        }

        if (jogo.ganhou()) {
          mostrarMensagem(true);
        } else if (jogo.perdeu()) {
          mostrarMensagem(false);
        }
      }
    });
  }
};

const mostrarErro = () => {
  const parte = elementos.boneco[5 - jogo.chances];
  parte.classList.remove('escondido');
};

const mostrarMensagem = vitoria => {
  const mensagem = vitoria ? '<p>Parabéns!</p><p>Você GANHOU!</p>' : '<p>Que pena!</p><p>Você PERDEU!</p>';
  elementos.textoMensagem.innerHTML = mensagem;
  elementos.telaMensagem.style.display = 'flex';
  elementos.telaMensagem.classList.add(`mensagem-${vitoria ? 'vitoria' : 'derrota'}`);
};

const sortearPalavra = () => {
  const i = Math.floor(Math.random() * palavras[jogo.dificuldade].length);
  const palavra = palavras[jogo.dificuldade][i];
  jogo.definirPalavra(palavra);

  console.log(jogo.palavra.original);

  return jogo.palavra.original;
};

const mostrarPalavra = () => {
  elementos.palavra.textContent = '';
  elementos.dica.innerHTML = jogo.palavra.dica;
  for (let i = 0; i < jogo.acertos.length; i++) {
    const letra = jogo.acertos[i].toUpperCase();
    elementos.palavra.innerHTML += `<div class="letra-${i}">${letra}</div>`;
  }

};

const iniciarJogo = dificuldade => {
  jogo.dificuldade = dificuldade;
  elementos.telaInicial.style.display = 'none';
  elementos.telaJogo.style.display = 'flex';

  sortearPalavra();
  mostrarPalavra();
};

const cadastrarPalavra = () => {
  elementos.telaInicial.style.display = 'none';
  elementos.telaCadastro.style.display = 'block';

  elementos.formulario.palavra.value = '';
  elementos.formulario.dica.value = '';

  elementos.formulario.formularioId.addEventListener('submit', e => {
    e.preventDefault();

    const dificuldade = elementos.formulario.dificuldadeSelecionada();

    palavras[dificuldade].push({
      nome: elementos.formulario.palavra.value,
      dica: elementos.formulario.dica.value,
    });
    novoJogo();
  });
};

const replace = (str, i, newChar) => str.substring(0, i) + newChar + str.substring(i + 1);

elementos.botoes.facil.addEventListener('click', () => iniciarJogo('facil'));
elementos.botoes.medio.addEventListener('click', () => iniciarJogo('medio'));
elementos.botoes.dificil.addEventListener('click', () => iniciarJogo('dificil'));
elementos.botoes.cadastrar.addEventListener('click', () => cadastrarPalavra());

elementos.botoes.reiniciar.addEventListener('click', () => novoJogo());

novoJogo();
