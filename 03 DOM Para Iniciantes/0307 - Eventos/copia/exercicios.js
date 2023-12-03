 // Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


const linksInterno = document.querySelectorAll('a[href^="#"]')

function active(event){
    event.preventDefault()
    linksInterno.forEach((link) =>{
        link.classList.remove('ativo')
    })
    this.classList.add('ativo')
}
linksInterno.forEach((link) =>{
    link.addEventListener('click', active)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados



const todosElementos = document.querySelectorAll('body *')

function ondeClicou(event){
    console.log(event.currentTarget.remove())
}

todosElementos.forEach((item) => {
    item.addEventListener('click', ondeClicou)
})



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function tudoGrande(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('tudoGrande')
    }
}

window.addEventListener('keydown', tudoGrande)