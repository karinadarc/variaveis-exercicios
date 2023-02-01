// Exercício 1

let nome;
let idade; 

console.log('Tipo da variável nome', typeof nome)
console.log('Tipo da variável idade', typeof idade)
// Por que não foi atribuido nenhum valor.

nome = prompt('Qual é o seu nome?')
idade = Number(prompt('Qual é a sua idade?'))

console.log('Tipo da variável nome', typeof nome)
console.log('Tipo da variável idade', typeof idade)

/* Além de ter atribuido um valor para as variaveis, 
o valor que retorna do prompt sempre vai ser uma string, 
a não ser que seja feito uma conversão. */
//idade = Number (idade)
//idadeConvertida = Number(idade)

console.log('Olá', nome, 'você tem', idade, 'anos')



// Parte 2


let perguntaA = "Você gosta de sorvete?";
let respostaA = prompt(perguntaA);

let perguntaB = "Você gosta de pizza?";
let respostaB = prompt(perguntaB);

let perguntaC = "Você gosta de chocolate?";
let respostaC = prompt(perguntaC);

console.log(perguntaA,respostaA)
console.log(perguntaB,respostaB)
console.log(perguntaC,respostaC)
