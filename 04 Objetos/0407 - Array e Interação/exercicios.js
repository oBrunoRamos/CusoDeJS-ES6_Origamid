// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


let cursos = document.querySelectorAll('.curso')
cursos = Array.from(cursos)

const arrayAulas = cursos.map((curso, index, array) =>{
  let objeto = {}
  objeto.titulo = curso.querySelector('h1').textContent
  objeto.descricao = curso.querySelector('p').textContent
  objeto.aula = curso.querySelector('.aulas').textContent
  objeto.horas = curso.querySelector('.horas').textContent
  return objeto
})

console.log(arrayAulas)







// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter( x => x > 100)

console.log(maiorQue100)



// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']



const buscaBaixo = instrumentos.some( item => item === 'Baixo')

console.log(buscaBaixo)



// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  },
  {
    item: 'Arroz',
    preco: 'R$ 5,50'
  }
]


let totCompra = compras.reduce((acc, item) =>{

    let preco = +item.preco.slice(3).replace(',', '.')

    acc = acc + preco
    return acc



}, 0)

totCompra = totCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})



console.log(totCompra)
