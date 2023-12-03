// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 20
let idadeJuju = 17
if(minhaIdade > idadeJuju){
  console.log('É maior')
} else if(minhaIdade === idadeJuju){
  console.log('É igual')
}else{
  console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //true 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome)
console.log(!!idade)
console.log(!!empregoFuturo)
console.log(!!dinheiroNaConta)
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(china > brasil){
   console.log('A china é enorme')
}



// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // Esse
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // Esse
} else {
  console.log('Falso');
} 