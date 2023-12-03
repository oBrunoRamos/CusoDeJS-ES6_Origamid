// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];


let somaTaxa = 0
let somaRecebimento = 0

transacoes.forEach((item) => {

  let valor = item.valor
  valor = valor.slice(3)
  valor = Number(valor)

  if(item.descricao.slice(0, 4) === 'Taxa'){
    somaTaxa += valor
  }
  else{
    somaRecebimento += valor
  }

})

console.log(somaRecebimento  )
console.log(somaTaxa)












//   const arrayTrasacoes = transacoes.split('}, {')

 console.log(transacoes)
  
  // Retorne uma array com a lista abaixo
  let transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

  transportes = transportes.split(';')

  console.log(transportes)








  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  let htmlArray = html.split('span')

  htmlArray = htmlArray.join('a')

  console.log(htmlArray)





  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  
  console.log(frase.charAt(frase.length-1))









  // Retorne o total de taxas

  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  let taxasTotal= 0;

  transacoes2.forEach(item =>{

    item = item.toLocaleLowerCase().trim().slice(0,4)
    if(item === 'taxa'){
      taxasTotal++
    }

    console.log(item);

  })

  console.log(taxasTotal);