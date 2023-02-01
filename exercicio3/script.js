let nomeCompleto     = prompt ('nome completo:')
let dataDeNascimento = prompt ('digite sua data de nascimento:')
let cpf              = prompt ('digite seu cpf')
let endereco         = prompt ('digite seu endereço')
let escolaridade     = prompt ('digite sua escolaridade')
let cnh              = confirm('você possui cnh?')
let admissão         = prompt ('informe o ano de admissão')
let cargoAtual       = prompt ('digite seu cargo atual')
let salario          = Number (prompt (' digite seu salario atual'))
let comissao         = Number (prompt ('você recebe comissao? Se sim, informe a porcentagem, caso não, responda com zero'))
let filho            = Number (prompt ('quantos filhos você tem?'))

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof cpf, 
typeof endereco, typeof escolaridade, typeof cnh, typeof admissao, typeof cargoAtual, 
typeof salario, typeof comissao, typeof filho)

console.log(`nomeCompleto: ${nomeCompleto}
dataDenascimento: ${dataDeNascimento}
cpf: ${cpf}
endereco: ${endereco}
escolaridade: ${escolaridade}
cnh: ${cnh}
admissao: ${admissão}
cargoAtual: ${cargoAtual}
salario: ${salario}
comissao: ${comissao}
filho: ${filho}`)




