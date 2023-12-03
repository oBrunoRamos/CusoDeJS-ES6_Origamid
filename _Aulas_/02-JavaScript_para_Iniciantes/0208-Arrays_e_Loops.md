# 0208 - Arrays e Loops

## Variedade

* É um grupo de valores geralmente relacioandos. Servem para guardarmos diferentes valores em uma única variável.

~~~javascript
   var videoGames = ['Switch', 'PS4', 'Xbox']
   
   videoGames[0] // 'Switch'
   videogames[2] // 'Xbox'
~~~

* *Acesse um elemento da matriz utilizando [n]*

___

## Métodos e propriedades de um Array

~~~javascript
   var videoGames = ['Switch', 'PS4', 'Xbox']

   videoGames.pop(); // Remove o último item e retorna ele
   videoGames.push('3DS'); // Adiciona ao final da array
   videogames.legth; // '3'
~~~

* *Existem diversos outos métodos com map, reduce, forEach e mais que veremos mais à frente*

___

## For Loop

* Fazem algo repetidaamnete até que uma condição seja atingida.

~~~javascript
   for(var numero = 0; numero < 10; número++){
         console.log(numero);
   }
   // Retorna  de 0 a 9 no console
~~~

* *O loop for possui 3 partes, início condição e incremento.*

___

## Loop enquanto

~~~javascript
   var i = 0;
   while (i < 10){
      console.log(i);
      i++;
   }
~~~

* *O for loop é mais comum*

___

## Arrays e Loops

~~~javascript
   var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'] 
   for (var i = 0 ; i < videogame.length; i++){
      console.log(videoGames[i]);
   }
~~~

* *O for loop é o mais comum*

___

## Quebrar

* O loop irá parar caso encontre a palavra break

~~~javascript
   var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'] 
   for (var i = 0 ; i < videogame.length; i++){
      console.log(videoGames[i]);
      if(videoGames[i] === 'PS4'){
         break;
      }
   }
~~~

___

## Para cada

* forEach é um método que executa uma função para cada item da Array. É uma froma mais simples de utilizarmos um loop com arrays (ou array-like).

~~~javascript
   var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'] 
   videoGames.forEach(function(item){
      console.log(item)
   })
~~~

* *Podemos passar os seguintes parâmetros item, index, array.*

___
