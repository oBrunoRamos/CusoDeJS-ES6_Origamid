# 0304 - forEach e Arrow Function

## FOREACH

* Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

~~~javascript
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});
~~~

___

## PARÂMETROS DO FOREACH

* O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

~~~javascript
const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});
~~~

___

## FOREACH E ARRAY

* forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

~~~javascript
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});
~~~

___

## ARROW FUNCTION

* Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

~~~javascript
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});
~~~

___

## PARÂMETROS E PARÊNTESES

~~~javascript
const imgs = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
~~~

* *É melhor utilizar os parênteses*

___

## RETURN

* É possível omitir as chaves {} para uma função que retorna uma linha.

~~~javascript
const imgs = document.querySelectorAll('img');

imgs.forEach(item => 
  console.log(item)
);

imgs.forEach(item => console.log(item));
~~~

* *Não é permitido fechar a linha com ;*
