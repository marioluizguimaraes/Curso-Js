/* VARIÁVEIS */

//Constantes = Valores que n serão mudados ao longo do código
const nome = 'Mário';
const ano = 2004;

//Let = Valores que podem sofrer alturações durante o código
let filhos = 2;

console.log(nome,'nasceu em', ano, '.');
console.log(nome, 'teve ', filhos, 'filhos.');

console.log(`--------------------------------`);

//${} = Templat String
console.log(`${nome} nasceu em ${ano}.`);
console.log(`${nome} teve ${filhos} filhos.`);

console.log(`--------------------------------`);

//typeof() é a função que indentifica o tipo primitivo da variavel
console.log(`A variável ano é do tipo: ${typeof(ano)}`)
console.log(`A variável nome é do tipo: ${typeof(nome)}`)