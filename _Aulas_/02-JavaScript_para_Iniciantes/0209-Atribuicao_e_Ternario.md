# 0209 - Arbuição e Ternário

## COMENTÁRIOS

* Servem para explicar o código

~~~javascript
// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

// var nome = 'André';
~~~

* *Comentar uma linha de código desativa a mesma. Não deixe linhas de código comentadas no arquivo final.*

___

## - OPERADORES DE ATRIBUIÇÃO

* Podem funcionar como formas abreviadas

~~~javascript
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
~~~

___

## OPERADOR TERNÁRIO

* Abreviação de condicionais com if e else

~~~javascript
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false
~~~

* *Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição*

___

## IF ABREVIADO

*Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

~~~javascript
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');
~~~

* *Eu particularmente prefiro a segunda opção aqui.*

___
