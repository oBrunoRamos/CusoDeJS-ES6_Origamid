// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
    this.name = nome;
    this.surname = sobrenome;
    this.age = idade;
}
Pessoa.prototype.nomeCompleto = function(){
    return `Seu nome é ${this.name} ${this.surname}`
}

const bruno = new Pessoa('Bruno', 'Ramos', 20)
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// console.log(Object.getOwnPropertyNames(NodeList.prototype))
// console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
// console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLiElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
