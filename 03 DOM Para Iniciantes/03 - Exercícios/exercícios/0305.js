// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu li')

menu.forEach((item) =>{
    item.classList.add('ativo')
    console.log(item)
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro


menu.forEach((item, index) =>{
    if(index > 0){
        item.classList.remove('ativo')
    }
})

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((img) =>{
    let alt = img.hasAttribute('alt')
    if(alt){
        console.log('tem')
    }else{
        console.log('nao tem')
    }
    console.log(img)
})

// Modifique o href do link externo no menu

const href = document.querySelector('a[href^="https://"]')

href.setAttribute('href', 'www.youtube.com')



console.log(href)