// Crie uma função para verificar se um valor é Truthy
function verificar(valor){
  return !!valor
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lados){
  return lados * 4    // certo
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`
}
// Crie uma função que verifica se um número é par
function parImp(num){
  if(num % 2 === 0){
    return 'par'
  }else{                                            //certo
    return 'impar'
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(argum){
  return typeof argum           // certo
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){
  console.log('Bruno Ramos');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {

    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;          // certo
  }

  console.log(precisoVisitar(20))
  console.log(jaVisitei(20))
  