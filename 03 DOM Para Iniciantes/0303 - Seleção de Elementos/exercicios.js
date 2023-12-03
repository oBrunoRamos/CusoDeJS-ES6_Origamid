// Retorne no console todas as imagens do site
let fotos = document.querySelectorAll('img')
console.log(fotos)




// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgs = document.querySelectorAll('img[src^="img/imagem"]')

    console.log(imgs)


// Selecione todos os links internos (onde o href começa com #)
const lk = document.querySelectorAll('[https^="#"]')
console.log(lk)



// Selecione o primeiro h2 dentro de .animais-descricao
let h2 = document.querySelector('.animais-descricao h2')
console.log(h2)


// Selecione o último p do site

let paragrafo = document.querySelectorAll('p')
console.log(paragrafo[--paragrafo.length])