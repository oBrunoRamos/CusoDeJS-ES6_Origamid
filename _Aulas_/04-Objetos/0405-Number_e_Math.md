# Number e Math

## Number

* É a construtora de números, todo número, possui as propriedades e métodos de prototype de Number. Number também possui alguns métodos. 

~~~javascript
const ano = 2018;
const preco = new Number(99);
~~~

## Number.isNaN() e Number.isInteger()

* isNaN() é um método de Number, ou seja, não fazem parte do prototype. isInteger() verifica se um número é integral.

~~~javascript
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false
~~~

## Number.parseFloat() e Number.parseInt()

* parseFloat() serve para retornarmos um número a partir de uma string. A string deve começar com um número. parseInt() recebe também um segundo parâmetro que é Radix. 10 para decimal.

~~~javascript
parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100
~~~

* *Float possui decimal, Integer não*

## N.toFixed(Decimais)

* Arredonda o núemro com base nop total de casa sdecimais do argumento.

~~~javascript
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499
~~~

## N.toString(radix)

* Transforma o número em uma String com base no radix. Use 10 para o sestema decimal.

~~~javascript
const preco = 2.99;
preco.toString(10); // '2.99'
~~~

## N.toLocateString(lang, options)

* Formata o númeor de acordo com a lingua e opções passadas.

~~~javascript
const preco = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49
~~~

## Math

* É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

~~~javascript
Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303
~~~

* *[https://developer.mozilla.org/en-]*

* *[US/docs/Web/JavaScript/Reference/Global_Objects/Math]*

## Math.abs(), Math.ceil(), Math.floor() e Math.round()

* abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. cell() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o numerointegral mais proximo.

~~~javascript
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
~~~

## Math.max(), Math.min() e Math.random()

* max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

~~~javascript
Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;
~~~