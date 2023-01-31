// Exercício 1

let nome;
let idade; 

console.log('Tipo da variável nome', typeof nome)
console.log('Tipo da variável idade', typeof idade)
// Por que não foi atribuido nenhum valor.

nome = prompt('Qual é o seu nome?')
idade = prompt('Qual é a sua idade?')

console.log('Tipo da variável nome', typeof nome)
console.log('Tipo da variável idade', typeof idade)

// Além de ter atribuido um valor para as variaveis, o valor que retorna do prompt sempre vai ser uma string, a não ser que eu faça uma conversão. 
//idade = Number (idade)
//idadeConvertida = Number(idade)

console.log('Olá', nome, 'você tem', idade, 'anos')



// Parte 2


const perguntaA = "Você gosta de sorvete?";
const respostaA = prompt(perguntaA);

const perguntaB = "Você gosta de pizza?";
const respostaB = prompt(perguntaB);

const perguntaC = "Você gosta de chocolate?";
const respostaC = prompt(perguntaC);

console.log(perguntaA,respostaA)
console.log(perguntaB,respostaB)
console.log(perguntaC,respostaC)
