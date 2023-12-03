// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img')
//console.log(img.offsetTop)

// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll('img')
let soma = 0
imgs.forEach((img) =>{
    let rect = img.getBoundingClientRect()
    let largura = rect.width
    soma = soma + largura  
})
//console.log(soma)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) =>{
    let rect = link.getBoundingClientRect()
    let h = rect.height
    let w = rect.width
    if(w >= 48 && h >= 48){
        console.log(h, w, 'possui boa assecibilidade')
    }else{
        console.log('não possui')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const janela = window.innerWidth
const menu = document.querySelector('.menu')

if(janela < 720){
    menu.classList.add('menu-mobile')
}else{
    menu.classList.remove('menu-mobile')
}
console.log(menu)