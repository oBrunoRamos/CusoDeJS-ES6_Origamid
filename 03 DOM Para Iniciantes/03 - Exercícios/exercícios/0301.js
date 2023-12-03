// Retorne o url da página atual utilizando o objeto window

const url = window.location
console.log(url)
// Seleciona o primeiro elemento da página que
// possua a classe ativo

let ul = document.querySelector('ul')
ul.classList.add('ativo')

const primeiroItem = document.querySelector('.ativo')
console.log(primeiroItem)

// Retorne a linguagem do navegador

const ling = window.navigator.language
console.log(ling)

// Retorne a largura da janela 

console.log(window.innerWidth)