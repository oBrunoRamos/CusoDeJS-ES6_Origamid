// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]')
console.log(links)
function handleClick(event){
    event.preventDefault()
    links.forEach((link) =>{
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}
links.forEach((link) =>{
    link.addEventListener('click', handleClick)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
/*
const bodyItens = document.querySelectorAll('body *')

function mostrar(event){
    console.log(event.currentTarget)
}

bodyItens.forEach((item) =>{
    item.addEventListener('click', mostrar)
})
*/
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
const bodyItens = document.querySelectorAll('body *')

function mostrar(event){
    event.currentTarget.remove()
}

bodyItens.forEach((item) =>{
    item.addEventListener('click', mostrar)
})
*/
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumenta(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('tudoGrande')
    }
}

addEventListener('keydown', aumenta)