// Retorne no console todas as imagens do site

const imgs = document.querySelectorAll('img')
console.log(imgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagem = document.querySelectorAll('.animais-lista img')
console.log(imagem)
// Selecione todos os links internos (onde o href começa com #)


const hrefInterno = document.querySelectorAll('a[href^="#"]')
console.log(hrefInterno)
// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)
// Selecione o último p do site

const ultimoP = document.querySelector('.copy p')
console.log(ultimoP)