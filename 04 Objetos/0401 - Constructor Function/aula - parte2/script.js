// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor);
//     },
//     ativar(){
//         this.element().classList.add('ativo')
//     },
// }

function Dom(seletor){   
    this.element = function(){
        return document.querySelector(seletor);
    }
    this.ativar = function(classe){
        return this.element().classList.add(classe);
    }
}
const li = new Dom('li')
li.ativar('aqui')