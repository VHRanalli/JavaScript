// par nome/valor

const saudacao = 'Opa' // contexto lexico 1

function exec(){
  const saudacao = 'falaaa' // contexto lexio 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'pedro',
  idade: 90,
  endereço: {
    logradouro: 'rua muito legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)