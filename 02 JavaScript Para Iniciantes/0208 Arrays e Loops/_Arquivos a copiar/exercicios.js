// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var ganhouCopa= [1965, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(let c = 0; c < ganhouCopa.length; c++){
    console.log(`O brasil ganhou a copa de ${ganhouCopa[c]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let c = 0; c < frutas.length; c++){
    console.log(frutas[c])
    if(frutas[c] === 'Pera'){
        break
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length -1]
console.log(ultimaFruta)