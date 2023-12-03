# 0210 - Escopo

## ESCOPO DE FUNÇÃO

*Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

~~~javascript
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined
~~~

* *Escopo evita o conflito entre nomes*

___

## VARIÁVEL GLOBAL (ERRO)

*Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

~~~javascript
function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
~~~

* *'use strict' impede isso.*

___

## ESCOPO DE FUNÇÃO (PAI)

* Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

~~~javascript
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca
~~~

___

## ESCOPO DE BLOCO

* Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

~~~javascript
if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro
~~~

___

## VAR VAZA O BLOCO

* Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

~~~javascript
if(false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined
~~~

___

## CONST E LET NO LUGAR DE VAR

* A partir de agora vamos utilizar apenas const e let para declarmos variáveis.

~~~javascript
if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined
~~~

___

## {} CRIA UM BLOCO

* Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

~~~javascript
{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined
~~~

___

## FOR LOOP

* Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

~~~javascript
for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10
~~~

___

## FOR LOOP COM LET

* Com o let evitamos que o número vaze.

~~~javascript
for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined
~~~

___

## CONST

* Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

~~~javascript
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro
~~~

* *Variáveis com valores constantes devem utilizar o const.*

___

## LET

* Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

~~~javascript
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
~~~

* *Geralmente vamos utilizar o const.*
