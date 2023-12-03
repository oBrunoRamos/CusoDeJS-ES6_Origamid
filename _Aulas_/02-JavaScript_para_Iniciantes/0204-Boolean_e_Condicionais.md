# 0204 - *Boolean e Condicionais*

## Boolean

* Existem dois valores booleanos **false** e **true**

~~~javascript
   var possuiGraduacao = true;
   var possuiDoutorado = false;
~~~

___

## Condicionais if e else

* Verifcar se uma expressão é verdadeira com **if**, caso contrário o **else** é ativado.

~~~javascript
   var possuiGraduacao = true;

   if(possuiGraduacao) {
   console.log('Possui graduação');
   } else {
   console.log('Não possui graduação');
   }
   // retorna Possui Graduação e não executa o else
~~~

* *O valor dentro dos parênteses sempre será avaliado em* **false** *ou* **true**

___

## Condicionais else if

* Se o **if** não for verdadeiro ele testa o **else if**

~~~javascript
   var possuiGraduacao = true;
   var possuiDoutorado = false;

   if(possuiDoutorado) {
   console.log('Possui graduação e doutorado');
   } else if(possuiGraduacao) {
   console.log('Possui graduação, mas não possui doutorado');
   } else {
   console.log('Não possui graduação');
   }
   // retorna Possui Graduação, mas não possui doutorado
~~~

___

## Switch

* Como o **switch** você pode verificar se uma variável é igual à diferentes valores utilizando o **case**. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave **break;** para cancelar a continuação. O valor de defult ocorrerá caso nenhuma das anteriores seja verdadeira.

~~~javascript
   var corFavorita = 'Azul';

   switch (corFavorita) {
   case 'Azul':
      console.log('Olhe para o céu.');
      break;
   case 'Vermelho':
      console.log('Olhe para rosas.');
      break;
   case 'Amarelo':
      console.log('Olhe para o sol.');
      break;
   default:
      console.log('Feche os olhos');
   }
~~~

___

## Truthy e Falsy

* Existem valores que retornam **true** e outros que retornam **false** quando verificamos em uma expressão booleana.

Falsy

~~~javascript
   // Falsy
   if(false)
   if(0) // ou -0
   if(NaN)
   if(null)
   if(undefined)
   if('') // ou "" ou ``
~~~

* *Todo o resto é truthy*

Truthy

~~~javascript
   // Truthy
   if(true)
   if(1)
   if(' ')
   if('andre')
   if(-5)
   if({})
~~~

___

## Operador lógico de negação **!**

* O operador **!**, nega uma operação booleana. Ou seja, **!true** é igual a **false**

~~~javascript
   // Truthy
   if(!true) // false
   if(!1) // false
   if(!'') // true
   if(!undefined) // true
   if(!!' ') // true
   if(!!'') // false
~~~

* *Dica, você pode utilizar o* **!!** *para verificar se uma expressão é Truthy ou Falsy*

## Operadores de comparação

* O **==** faz uma comparação não tão estrita e o **===** faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos **===**

~~~javascript
   10 == '10'; // true
   10 == 10; // true
   10 === '10'; // false
   10 === 10 // true
   10 != 15 // true
   10 != '10' // false
   10 !== '10' // true
~~~

## Operadores lógicos &&

* **&&** compara se uma expressão **e** a outra é verdadeira

~~~javascript
   true && true; // true
   true && false; // false
   false && true; // false
   'Gato' && 'Cão'; // 'Cão'
   (5 - 5) && (5 + 5); // 0
   'Gato' && false; // false
   (5 >= 5) && (3 < 6); // true
~~~

* *Se ambos os valores form true ele irá retornar o ultimo valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.*

## Operadores lógicos  | |

* **| |** compara se uma expressão **ou** outra é verdadeira.

~~~javascript
   true || true; // true
   true || false; // true
   false || true; // true
   'Gato' || 'Cão'; // 'Gato'
   (5 - 5) || (5 + 5); // 10
   'Gato' || false; // Gato
   (5 >= 5) || (3 < 6); // true
~~~

* *Retorna o primeiro valor true que encontar*

___
