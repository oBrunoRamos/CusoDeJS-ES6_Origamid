//            * Function *


// const perimetro = new Function('lado', 'return lado * 4')

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.name)
// console.log(somar.length)





//      * Prorpiedades *

// function darOi(){
//   return console.log('Oi pra você')
// }


// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro(){
//   console.log(this.marca + ' ' + this.ano)
// }

// descricaoCarro.call(carro)




// const carros = ['Ford', 'Fiat', 'VW', 'honda'];
// const frutas = ['Banana', 'Uva', 'Pera',]

// frutas.forEach.call(carros, (carro) =>{
//   console.log(carro)
// })




// function Dom(seletor){
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe){
//   this.element.classList.add(classe)
// }

// const ul = new Dom('ul')

// const li = {
//   element: document.querySelector('li'),
// }


// ul.ativo.call(li, 'ativarNovamente')
// ul.ativo('ativar')
// console.log(ul)

// const frutas = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.mostrarThis = function(){
//   console.log(this)
// }

// const li = document.querySelectorAll('li')

// const filtro = Array.prototype.filter.call(li, (item) =>{
//   return item.classList.contains('ativo')
// })




// console.log(filtro)



//      *Apply*

// const numeros = [3,4,6,1,34,44,32];


const $ = document.querySelectorAll.bind(document)


const li = $('li')
const ul = $('ul')