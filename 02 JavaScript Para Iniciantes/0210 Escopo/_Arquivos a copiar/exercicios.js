 // Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat'; //Porque var é uma palavra chave, e seu valor vaza do bloco, as demais não vazam então não irão mostrar nada no console.
    let portas = 4;

    console.log(cor, marca, portas);
  
  }
    
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    const dois = 2
    return x + dois;
  }
  console.log(somarDois(4))
  console.log(dividirDois(6))
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  