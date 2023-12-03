# Comandos

## Objetos

### Métodos de console

* Propriedades de console

~~~javascript

    console.assert() // Exibe uma mensagem de erro no console se a afirmação passada for falsa.

    console.clear() // Limpa o console.
    
    console.count() // Registra o número de vezes que esse método é chamado com um rótulo específico no argumento ('Método').
    
    console.countReset() // Reinicia o contador associado a um rótulo específico ('Método').
    
    console.debug() // Exibe uma mensagem de depuração no console, é equivalente a console.log(data)
    
    console.dir() // Exibe uma representação de um objeto JavaScript.
    
    console.dirxml() // Exibe uma representação em formato XML de um objeto JavaScript no console.
    
    console.error() // Exibe mensagens de erro no console.
    
    console.group() // Agrupa mensagens no console.
    
    console.groupCollapsed() //  Funciona como console.group(), mas o grupo de mensagens é inicialmente exibido contraído no console.
    
    console.groupEnd() // Encerra um grupo de mensagens criado por console.group() ou console.groupCollapsed().
    
    console.info() // Exibe mensagens de informação no console.
    
    console.log() // Exibe mensagens de informação no console.
    
    console.memory() // Uma propriedade que fornece informações sobre o uso de memória.

    console.table() // Exibe dados em formato de tabela no console.
    
    console.time() //  Medem o tempo de execução até timeEnd().
    
    console.timeEnd() //  Medem o tempo de execução de time() até timeEnd().
    
    console.timeLog() // Exibe o tempo decorrido desde o início da medição do tempo, com base no rótulo fornecido por console.time()
    
    console..timeStamp() //  Registra um rótulo com uma marca de data e hora no console para fins de análise e auditoria.
    
    console.trace() //  Medem o tempo de execução entre esses pontos.
    
    console.warn() // Exibe mensagens de aviso no console.

~~~

### Math

* É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

~~~javascript

    Math.abd() // Retorna o valor absoluto, ou seja, transforma negativo em positivo.

    Math.cell() // Arredonda para cima, retornando sempre uma integral.

    Math.floor() // Arredonda para baixp, retornando sempre uma integral.

    Math.round() // Arredonda para o numerointegral mais proximo.

    Math.min() // Retorna o menor número de uma lista de argumentos

    Math.max() // Retorna o maior número de uma lista de argumentos

    math.random() // Retorna um número aleatório entre 0 e 1.

~~~

## Palavras chave

### Var, Let, Const

~~~javascript
    var = '' // Plavra chavepara declaração de variaveis, usada mais comumente antes da atualização ES6.

    const = '' // Plavra chavepara declaração de variaveis, usada para variáveis que não irão mudar nunca.

    let = '' // Plavra chavepara declaração de variaveis
~~~

### Typeof

~~~javascript

    // Palavra chave usada para descobrir o tipo da variavel

    let string = 'Palavra'
    let numero = 10
    let verdade = true

    console.log(typeof string) // Retorna String
    console.log(typeof numero) // Retorna Number
    console.log(typeof verdade) // Retorna Boolean
~~~

### Break

~~~javascript

    // Palavra chave para parar um loop. Geralmente usado para para o loop caso uma condição seja atendida.

 
 for(let i = 0; i <= 10; i++){

    if(i === 4){
        break // o loop se encerra aqui
    }

 }

~~~

### New

~~~javascript
    // A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

    const honda = new Carro();

    // 1 Cria um novo objeto
    honda = {};

    // 2 Define o protótipo
    honda.prototype = Carro.prototype;

    // 3 Aponta a variável this para o objeto
    this = honda;

    // 4 Executa a função, substituindo this pelo objeto
    honda.marca = 'Marca';
    honda.preco = 0;

    // 5 Retorna o novo objeto
    return honda = {
    marca: 'Marca',
    preco: 0,
    }

~~~

## Prototype's

### Métodos do construtor String

~~~javascript

    String.charAt() // Retorna o caractere de acordo co o index de (n)

    String.concat() // Concatena as strings e retorna o resultado.

    String.includes() // Procura pela string exata dentro de outra string. A procura é case sensitive.

    String.startsWith() // Procura se uma string começa com as strings pedidas Procura pela string exata dentro de outra string. A procura é case sensitive. Retorna true ou false.
    String.endsWith() // Procura se uma string termina com as strings pedidas. Procura pela string exata dentro de outra string. A procura é case sensitive. Retorna true ou false.

    String.slice(start, end) // Corta a string de acordo com os valores de start e end.

    String.substring(start, end) // Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.

    String.indexOf() // Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
    String.lastIndexOf() // Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

    String.padStart(number, string) // Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento
    String.padEnd(number, string) // Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento

    String.repeat(n) // Repete a string (n) vezes.

    String.replace() // Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

    String.split() // Divide a string de acordo com o padrão passado e retorna uma array.

    String.toLowerCase() // Retrona a string em letras MINUSCULAS.
    String.toUpperCase() // Retrona a string em letras MAIUSCULAS.

    String.trim() // Remove espaço em branco de uma string
    String.trimStart() // Remove espaço em branco do inicio de uma string
    String.trimEnd() // Remove espaço em branco do final de uma string
~~~

### Métodos do construtor Number

~~~javascript

    Number.insNaN() // Verifica se o nùmero no argumento é um NaN

    Number.Integer() // Verifica se o núemro no argumeento é integral, ou  seja, inteiro.

    Number.parseFloat() // Serve para retornarmos um número a partir de uma string. A string deve começar com um número.

    Number.parseInt() // Recebe também um segundo parâmetro que é Radix. 10 para decimal.

    let preco = 2.99

    preco.toFixed() // Arredonda o núemro com base nop total de casa sdecimais do argumento.

    Number.toString() // Transforma o número em uma String com base no radix. Use 10 para o sestema decimal.

    Number.toLocateString(lang, options) // Formata o númeor de acordo com a lingua e opções passadas.
~~~