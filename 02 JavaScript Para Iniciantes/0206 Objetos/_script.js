// OBJETO

var pessoa = {
    nome: 'Bruno', 
    idade: 20,
    temUniversidade: true,
}

pessoa.nome // Bruno
pessoa.idade // 20
console.log(pessoa)

//  MÉTODOS

var quadrado = {
    lado: 4,
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lado * lado
    },
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

// DOT NOTATION GET

var menu ={
    width: 800,
    heigth: 50,
    backGroundColor: '#84E',
}

menu.color = '#fff' // Podemos adicionar novos valores dentro de objetos mesmo ao decorrer do código.

menu.esconder = function(){ // Assima como podemos adicionar funções também.
    console.log('escondi')
}


var bg = menu.backGroundColor