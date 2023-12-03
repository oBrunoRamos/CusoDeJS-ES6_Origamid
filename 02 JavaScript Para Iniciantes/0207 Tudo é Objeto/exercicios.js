 // nomeie 3 propriedades ou métodos de string


 // .getHours()
 //.toLocateString()
 // .toLowerCase()



// nomeie 5 propriedades ou métodos de elementos do DOM

// addEventListener
// appendChild
// innerHTML
// outerHTML
// id



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

const copyButton = document.querySelector('#copy-button');
const textToCopy = document.querySelector('#text-to-copy');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(textToCopy.textContent)
    .then(() => {
      console.log('Texto copiado com sucesso para a área de transferência!');
    })
    .catch((err) => {
      console.error('Erro ao copiar o texto:', err);
    });
});
