
# 0207 - *Tudo é objeto*

## Tudo é objeto-

* Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

~~~javascript
   var nome = 'André';

   nome.length; // 5
   nome.charAt(1) // 'n'
   nome.replace('ré', 'rei') // 'Andrei'
   nome; // 'André'
~~~

* *Uma string herda propriedades e métodos do construtor String()*

___

## Números - 0207

~~~javascript
   var altura = 1.8;

   altura.toString(); //'1.8'
   altura.toFixed(); //' '2'
   
~~~

* *Por um breve momento o números está envolvido em um Objeto (coerção), tendo acesso assim às suas propriedades e métodos*

___

## Funçãoes

~~~javascript
   function areaQuadrado(lado){
      return lado * lado
   }

   areaQuadrado.toString();

   // function areaQuadrado(lado){
   //    return lado * lado
   // }

   areaQuadrado.lenght; // 1
   
~~~

___

## Elementos do DOM

~~~HTML
   <a class="btn"> Clique </a>
~~~

~~~javascript
   var btn = document.querySelector('.btn');

   btn.classList.add('azul') //adiciona a classe azul
   btn.innerText; // 'Clique'
   btn.addEventListener('click', function(){
      console.log('clicou')
   })
~~~

* *Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM*

___

## Objetos revulocionaram a programação

* Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

___
