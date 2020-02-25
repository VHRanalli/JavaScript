const pessoa = {
  saudacao: 'bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcionais e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

