//String

// const comida = 'Pizza'; //Retorna string
// const agua = new String('Agua'); //Retorna o objeto string
//Porém os dois são iguais em metodos e prorpiedades





//charAt

// const frase = 'A melhor comida';
// console.log(frase[frase.length-1])
// console.log(frase.charAt(frase.length-1))





//concat

// const frase = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';

// //const fraseFinal = frase + linguagem
// const fraseFinal = frase.concat(linguagem, '!!')

// console.log(fraseFinal)





//includes

// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// listaFrutas.includes(fruta) // true
// fruta.includes(listaFrutas); // false
// console.log(listaFrutas.includes(fruta, 11)) // O index passado depois da virgula é onde vai começar a procurar, contanto letras e espaços.






//startsWith endsWith

// const fruta = 'Banana';

// fruta.endsWith('nana'); // true
// fruta.startsWith('Ba'); // true
// fruta.startsWith('ba'); // false






// slice()

// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// transacao1.slice(0, 3); // Dep
// transacao2.slice(0, 3); // Dep
// transacao3.slice(0, 3); // Tax

// transacao1.slice(12); // cliente
// transacao1.slice(-4); // ente // numeros negativos retornam a partir do final da string
// transacao1.slice(0, -4) // Depósito de cli  // numeros negativos depois da virgula retiram do final da string e antes da virgula os positivos retiram do inicio. se ouver dois numeros negativos o primeiro antes da virgula, deve ser menor que o segundo. Ex.: transacao1.slice(-6, -3)









// substring() 
// funciona igual o slice, mas não funciona direito com numeros negativos

// const linguagem = 'JavaScript';

// linguagem.substring(3,5); // aS
// linguagem.substring(0,4); // Java
// linguagem.substring(4); // Script
// linguagem.substring(-3); // JavaScript









// indexOf()   lastIndexOf()

// const fruta = 'Banana';
// console.log(fruta.indexOf('a'))
// console.log(fruta.lastIndexOf('a'))







// repeat()

// const frase = 'Ta'

// console.log(frase.repeat(3))









// // str.replace()

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

//  listaItens = listaItens.replace(/[ ]+/g , ', ')

// // console.log(listaItens)










// // split()

// const arrayLista = listaItens.split(', ')

// console.log(arrayLista)