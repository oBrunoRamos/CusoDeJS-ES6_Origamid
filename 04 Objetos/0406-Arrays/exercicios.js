const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

// __________________________

// let remvIni = comidas.shift()
// console.log(remvIni)

// let remvFim = comidas.pop()
// console.log(remvFim)


// comidas.push('Arroz')
// comidas.unshift('Peixe', 'Batata')


// console.log(comidas)

// __________________________



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes


// ______________________________
// estudantes.sort()

// estudantes.reverse()


// if(estudantes.includes('Joana')){
//   console.log('Joana faz parte dos estudantes')
// }else{
//   console.log('Joana não faz parte dos estudantes') 
// }

// if(estudantes.includes('Juliana')){
//   console.log('Juliana faz parte dos estudantes')
// }else{
//   console.log('Juliana não faz parte dos estudantes') 
// }


// console.log(estudantes)

// ___________________________________



// let html = `<section>
//               <div>Sobre</div>
//               <div>Produtos</div>
//               <div>Contato</div>
//             </section>`
// // Substitua section por ul e div com li,
// // utilizando split e join

// html = html.split('section').join('ul').split('div').join('li')

// console.log(html)




const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável


const cloneCarros = carros.slice()

carros.pop()

console.log(carros)
console.log(cloneCarros)