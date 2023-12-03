function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

let obj = {
    nome: 'Bruno',
    idade: 33,
}
obj.teste ='isso'

Pessoa.prototype.andar = function(){
    console.log('Andou')
}

const andre = new Pessoa('André', 28)
//console.log(Pessoa.prototype)




const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']




const lista = document.querySelectorAll('li');
console.log(lista)

const listaArray = Array.prototype.slice.call(lista);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar(){
        return true;
    },
}