# 0201 - *Variáveis*

## Váriaveis

* Responsáveis por guardar dados na memória.
* Inicia coma a palavra ***var***, ***let*** ou ***const***.

~~~javascript
   var nome = 'André';
   let idade = 28;
   const possuiFaculdade = true;
~~~

___

## Evitam Repetições

* DRY (Don't repeat yourself)

~~~javascript
   var preco = 20;
   var totalComprado = 5;
   var precoTotal = preco * totalComprado;
~~~

___

## Sintaxe

* Palavra chave ***var*** seguida do nome, sinal de igual e o valor.

~~~javascript
   var nome = 'André';
   var idade = 28;
   var possuiFaculdade = true;
~~~

___

## Sem valor

* Pode declarar ela e não atribuir valor inicialmente.

~~~javascript
   var precoAplicativo;
   // retorna undefined
~~~

___

## Nome

* Os nomes podem iniciar com $, _, ou letras. - ***Podem conter números mas não iniciar com eles***

* Case sensitive - ***nome é diferente de Nome***

* Não utilizar palavras reservadas

* Camel case. - ***É comum nomearmos assim: abrirModa***

~~~javascript
   // Inválido
   var §nome;
   var function;
   var 1possuiFaculdade;

   // Válido
   var $selecionar;
   var _nome;
   var possuiFaculdadeNoExterior;
~~~

___

## Declarar

* Erro ao tentar utilizar uma variável qu não foi declarada.

~~~javascript
   console.log(nome);
   // retorna nome is not defined
~~~

___

## Hosting

* São movidas para cima do código, porém o valor atrobuido não é movido.

~~~javascript
   console.log(nome);
   var nome = 'André';
   // Retorna undefined

   var profissao = 'Designer';
   console.log(profissao);
   // Retornar Designer
~~~

___

## Mudar o valor atribuido

* è possível mudar o valor atribuídos a variáveis declaradas como ***var*** e ***let***. Porém não é possível modificar os valores das declaradas com ***const***.

~~~javascript
   var idade = 28;
   idade = 29;

   let preco = 50;
   preco = 25;

   const possuiFaculdade = true;
   possuiFaculdade = false;
   // Retorna um erro
~~~

___
