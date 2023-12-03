// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

let paragrafos = document.querySelectorAll('p')

const totalCaractere = Array.prototype.reduce.call(paragrafos,(acc, item) => acc + item.innerText.length, 0)

console.log(totalCaractere)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function newElement(tag, classe, content){
    const element = document.createElement(tag);
    classe ? element.classList.add(classe): null;
    content ? element.innerHTML = content : null;
    return element
}

console.log(newElement('div', 'ativo', 'Helo WOrld'))

innerHTML = newElement('h1', '', 'Exemplo de H!')

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


const h1Titulo = newElement.bind(null, 'h1', 'titulo')

console.log(h1Titulo('Ola de novo'))