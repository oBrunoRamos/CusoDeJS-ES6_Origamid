# 0202 - *Tipos de dados*

## 7 tipos de dados

* Todos são primitivos exceto os objetos.

~~~javascript
   var nome = 'André'; // String
   var idade = 28; // Number
   var possuiFaculdade = true; // Boolean
   var time; // Undefined
   var comida = null; // Null
   var simbolo = Symbol() // Symbol
   var novoObjeto = {} // Object
~~~

* *Primitivos são dados imutáveis*

___

## Verificar tipo de dado

~~~javascript
   var nome = 'André';
   console.log(typeof nome);
   // retorna string
~~~

* ***type of null*** *retorna object*

___

## String

* Voce pode somr uma string e assim concatenar as palavras.

~~~javascript
   var nome = 'André';
   var sobrenome = 'Rafael';
   var nomeCompleto = nome + ' ' + sobrenome;
~~~

___

## Aspas duplas, simples e template string

~~~javascript
   'JavaScript é "super" fácil';
   "JavaScript é 'super' fácil";
   "JavaScript é \"super\" fácil";
   `JavaScript é "super" fácil"`;
   "JavaScript é "super" fácil"; // Inválido
~~~

* *Não necessariamente precisamos atribuir valores a uma variável*

___

## Template String

~~~javascript
   var gols = 1000;
   var frase1 = 'Romário fez ' + gols + ' gols';
   var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
~~~

* *Você deve passar expressões / variáveis dentro de* ***${ }***

___
