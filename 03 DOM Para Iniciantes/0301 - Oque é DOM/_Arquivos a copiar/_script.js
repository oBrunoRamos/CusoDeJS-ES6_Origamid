/* 0301 */

const href = window.location.href
console.log(href)

if(href === 'http://127.0.0.1:5500/03%20DOM%20Para%20Iniciantes/0301%20-%20Oque%20%C3%A9%20DOM/_Arquivos%20a%20copiar/_index.html'){
    console.log('é igual')
}

const divSelecionada = document.querySelector('div.ativo')

/* 0302 */ 

const divClasses = divSelecionada

function callBackh1(){
    console.log('clicou em', divSelecionada.innerText)
}

const h1Selecionado = document.querySelector('h1')
h1Selecionado.addEventListener('click', callBackh1/*function(){
    console.log('clicou em', divSelecionada.innerText)
}*/)