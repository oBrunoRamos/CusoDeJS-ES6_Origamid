/* objeto

const carro = {
    marca: 'marca',
    preco: 0,
}
const honda = carro
honda.marca = 'Honda'
honda.preco = 2000

const fiat = carro
fiat.marca = 'Fiat'
fiat.preco = 4000
*/

/* Constructor Function 
function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido
}
const honda = new Carro()
honda.marca = 'Honda'
honda.preco = 3000

const fiat = new Carro()
fiat.marca = 'Fiat'
fiat.preco = 2000

const nissan = new Carro('Nissan', 5000)
*/
/*
function Carro2(marca, precoInicial){
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca;
    this.preco = precoFinal
}
const mazdra = new Carro2('Mazdra', 5000)
*/