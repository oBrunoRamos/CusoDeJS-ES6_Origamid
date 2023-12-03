// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((item, index, array) =>{
//     array[index]= 'Teste'
//     console.log(item.toUpperCase(), index, array)
// })


// const li = document.querySelectorAll('li')

// li.forEach( i => i.classList.add('ativa'))


// const carros = ['Ford', 'Fiat', 'Honda']

// const novaArray = carros.map((item, index, array) =>{

//     console.log(index, array)
//     return item.toUpperCase()
// })

// console.log(novaArray)


// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]


//   const tempoAulas = aulas.map( i => i.min)

//   const arrayNomeAulas = aulas.map(nomeAulas)
//   console.log(tempoAulas)


// const aulas = [10, 25, 30]

// const reduceAulas = aulas.reduce((acumulador, item, index, array)=>{


// console.log(acumulador, item, index, array)
// return item


// }, 0)

// const numeros = [10, 25, 30, 3, 54, 33, 22]

// const maiorNumero = numeros.reduce((acc, atual) => acc > atual ? acc:atual, 0)

// console.log(maiorNumero)

// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
// ]

// const listaAulas = aulas.reduce((acc, aula, index) =>{
//     acc[index] = aula.nome
//     return acc
// }, {})

// console.log(listaAulas)


// const frutas = ['Banana', 'Pera', 'Uva']

// const temUva = frutas.some((item, index, array) =>{
//     console.log(item)
//     return item === 'Uva'
// })

// console.log(temUva)




// const frutas = ['Banana', '',  'Pera', 'Uva']

// const every = frutas.every((item, index, array) =>{

//     console.log(item)
//     return item

// })

// console.log(every)




// const numeros = [10, 25, 30, 54, 33, 22]

// const maoirQue3= numeros.every( n => n > 3)

// console.log(maoirQue3)



// const frutas = ['Banana', 'Pera', 'Uva']

// const findUva = frutas.findIndex(item => item === 'Uva')

// console.log(findUva)




// const numeros = [10, 25, 30, 54, 33, 22]

// const findX = numeros.find(item => item > 20)

// console.log(findX)



// const frutas = ['Banana', undefined, null, '', 'Uva', 0
// , 'Maçã'];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta; 
// })

// console.log(arrayLimpa)


const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const aulasMaiores = aulas.filter((aula) => { 
    return aula.min > 15;
  });
  console.log(aulasMaiores)