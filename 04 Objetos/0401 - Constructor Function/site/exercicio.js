// Transforme o objeto abaixo em uma Constructor Function

function Pessoa(nome, idade){
    this.nome = nome
    this.idade =idade
    this.andar = function(passos){
        console.log(`${nome} que tem ${idade} anos, andou ${passos} passos.`)
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)

console.log(joao, maria, bruno)
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
function Dom(selector){
    let elementList = document.querySelectorAll(selector)
    this.elemento = elementList
    this.adicionar = function(classe){
        elementList.forEach((item) =>{
            item.classList.add(classe)
        })
    };
    this.remover = function(classe){
        elementList.forEach((item) => {
            item.classList.remove(classe)
        })
    };
}
let item = new Dom('p')
item.adicionar('nova-classe')
