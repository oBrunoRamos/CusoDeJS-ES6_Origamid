/*forEach*/ 

/*
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
   // console.log(item, index, array)
});
*/

/*forEach e Array*/ 

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

//console.log(titulos) - HTMLcolection
//console.log(titulosArray) - NodeList

titulosArray.forEach(function(item, index, array){
  //console.log(item, index, array);
});

/** Arrow Function */


const imgs = document.querySelectorAll('img');


// Se possuir somente um parâmetro não é necessario utilizar () para colocar-lo no codigo.
/*
imgs.forEach( item => {
   console.log(item)
});
*/

// Se não possuir argumento(parâmetros) ou possuir mais de um, é necessário utilizar ()

/*
imgs.forEach( () => {
    console.log(imgs)
});
*/

/*
imgs.forEach( (item, index) => {
    console.log(item,index)
});
*/


//Se possuir somente um linha de codigo não é necesário se usar {}


/*
let i = 0
imgs.forEach( (item) =>  console.log(i++));
*/