// Crie uma função que verifique
// corretamente o tipo de dado


function verificar(valor){
    return Object.prototype.toString.call(valor)
}

console.log(verificar(9))





// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        configurable: false,
        writable: false,
        enumerable: true
    }
})

console.log(quadrado)




// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
  
  Object.freeze(configuracao)

console.log(configuracao)




  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array
  
 
let listaString = Object.getOwnPropertyNames(String.prototype)
let listaArray = Object.getOwnPropertyNames(Array.prototype)
console.log(listaString)
console.log(listaArray)
