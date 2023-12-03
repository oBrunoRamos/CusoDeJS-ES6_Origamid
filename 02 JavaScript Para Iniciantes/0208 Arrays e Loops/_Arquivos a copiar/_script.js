var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']

for(var i = 0; i < videoGames.length; i++){
    console.log(videoGames[i])
    if(videoGames[i] === 'PS4'){
        break
    }
}


var fruta = ['Maçã', 'Banana', 'Abacaxi', 'Pera', 'Uva']
fruta.forEach(function(item, index, array){ 

    // O primeiro parâmetro na function o "item", vai me retornar o nome do item no array, lembrando que o nome do paâmetro precisa ser item, pode ser qualquer coisa digitada, desde que seja digitada dentro da function tambem.

    // O segundo parâmetro na function o "index", vai me mostrar quantos itrens tem no array, começando sempre de 0, lembrando que o nome do paâmetro precisa ser index, pode ser qualquer coisa digitada, desde que seja digitada dentro da function tambem.

    // o último parâmetro o "array", irá me  mostrar o array completo ao lado, para cada ítem nele, por exemplo, existem 5 itens no array, ele irá me mostrar o array completo 5 vezes, lembrando que o nome do paâmetro precisa ser array, pode ser qualquer coisa digitada, desde que seja digitada dentro da function tambem.

    console.log(item, index, array) // retornará os itens do array, logo após sua posição e depois o array completo, isso para cada item dentro dele.
})