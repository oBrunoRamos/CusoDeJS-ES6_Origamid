// Mude a cor da tela para azul e depois para vermelho a cada 2s.

let c = 0
setInterval(()=>{
    c++
    if(c%2==0){
        document.body.style.background = 'red'
    }
    else if(c%2==1){
        document.body.style.background = 'blue'
    }
},300000)




// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const inicTimer = document.querySelector('[data-timer="iniciar"]')
const fimTimer = document.querySelector('[data-timer="parar"]')
const visor = document.querySelector('[data-timer="visor"]')

let i = 0
function contar(){
    visor.innerText = `${i++}`
}
inicTimer.addEventListener('click', contagem)

function contagem(){
    let contador = setInterval(contar, 200)

    inicTimer.setAttribute('disabled', '')

    fimTimer.addEventListener('click', ()=>{
        clearInterval(contador)
        inicTimer.removeAttribute('disabled')
    })

    fimTimer.addEventListener('dblclick', ()=>{
        i=0;
    })
}







