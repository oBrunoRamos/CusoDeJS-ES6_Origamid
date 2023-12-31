# 0203 - *Números e Operadores*

## Números

~~~javascript
   var idade = 28;
   var gols = 1000;
   var pi = 3.14; // ponto para decimal
   var exp = 2e10; // 20000000000
~~~

* *Precisão para até 15 dígitos*

___

## Operadores aritiméticos

~~~javascript
   var soma = 100 + 50; // 150
   var subtracao = 100 - 50; // 50
   var multiplicacao = 100 * 2; // 200
   var divisao = 100 / 2; // 50
   var expoente = 2 ** 4; // 16
   var modulo = 14 % 5; // 4
~~~

* *Lembrando que soma* **+** em Strings serve para concatenar.

___

## Operadores aritiméticos (Strings)

~~~javascript
   var soma = '100' + 50; // 10050
   var subtracao = '100' - 50; // 50
   var multiplicacao = '100' * '2'; // 200
   var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
~~~

* *É possível verificar se uma váriavel é NaN ou não com a função* ***isNaN( )***

___

## NaN = Not a number

~~~javascript
   var numero = 80;
   var unidade = 'kg';
   var peso = numero + unidade; // '80kg'
   var pesoPorDois = peso / 2 // NaN (Not a Number)
~~~

___

## A ordem importa

* Começa por multiplicação e divisão, depois soma e subtração.

~~~javascript
   var total1 = 20 + 5 * 2; // 30
   var total2 = (20 + 5) * 2; // 50
   var total3 = 20 / 2 * 5; // 50
   var total4 = 10 + 10 * 2 + 20 / 2; // 40
~~~

* *Parentêses para priorisar uma expressão*

___

## Operadores aritiméticos unários

~~~javascript
var incremento = 5;
   console.log(incremento++); // 5
   console.log(incremento); // 6

   var incremento2 = 5;
   console.log(++incremento2); // 6
   console.log(incremento2); // 6
~~~

* *Mesma coisa para o decremento* ***___x***.

___

## Operadores aritiméticos unários *

* O **+** e **-** tenta transformar o valor seguinte em número

~~~javascript
   var frase = 'Isso é um teste';
   +frase; // NaN
   -frase; // NaN

   var idade = '28';
   +idade; // 28 (número)
   -idade; // -28 (número)
   console.log(+idade + 5); // 33 

   var possuiFaculdade = true;
   console.log(+possuiFaculdade); // 1
~~~

* *O* **-** *antes de um número torna ele negativo*

___
