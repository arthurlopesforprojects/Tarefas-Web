# Atividade 4 - Formulários HTML + CSS

## Equipe

- Arthur Lopes dos Santos
- Weslley Moro

## Descrição da Atividade

Considerando o seu site do IFPR produzido na Atividade 3 (Layout com CSS), faça o seguinte:

- Adicione o formulário de login da prática da última aula. O mesmo deve aparecer (discretamente) junto ao cabeçalho.
- Faça uma página com um formulário de Contato
  - Invente alguns atributos, de forma que seja possível usar os diversos elementos de formulário aprendidos (seja criativo).
- Crie uma página contendo (em seu corpo) um formulário de cadastro, com os mesmos campos da imagem abaixo.

![Formulário de cadastro](images/form.png)

## Observações

- O formulário deve ser submetido (e validado com sucesso), via método POST, para: http://infoprojetos.com.br:8233/exemplo/cadastro.php.
- Os nomes esperados para **cada um dos campos** são:
  - nome
  - endereco
  - cidade
  - estado
  - cargo
  - area[]
  - curriculo
- Os valores esperados para a **Natureza do Cargo** são:
  - gerencia
  - financeiro
  - recepcao
  - administrativo
  - juridico
- Os nomes esperados para a **Área de Interesse** são:
  - computacao
  - biologia
  - meioambiente
  - engenhariahistoria
- Para o **Estado**, enviar apenas a UF do estado (em minúsculo -> sp, pr, sc, ...) e não o texto com o nome completo.
- O campo **Estado** deve apresentar todas as opções de estados brasileiros, agrupados por região.

**Não esqueça de estilizar TUDO com CSS e de manter os layouts de cada página do site compatíveis.**