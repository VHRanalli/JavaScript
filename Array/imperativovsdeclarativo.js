const alunos = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 9.2}
]

// Imperativo
// reuso menor nas funções imperativos
let total1 = 0
for (let i = 0; i < alunos.length; i++){
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativa
// mais reuso e mais praticidade
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// select codigo, nome, emal from clientes where ativo = 1 / Imperativo || Declarativo
// SQL é uma linguagem mais declarativa voce esta mais preocupado em dizer o que vc quer do que como o banco tem que fazer para trazer os dados
