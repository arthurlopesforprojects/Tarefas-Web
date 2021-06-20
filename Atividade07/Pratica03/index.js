const login = prompt('Informe seu login: ');
const senha = prompt('Informe seu senha: ');

if (login == 'aluno' && senha == '123' || login == 'professor' && senha == '456') {
    console.log(`O procedimento foi um sucesso`);
} else {
    console.log(`O procedimento deu errado`);
}