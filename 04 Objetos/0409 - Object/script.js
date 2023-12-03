// const pessoa = new Object({
//     nome: "André"
// })

// console.log(pessoa);

// const carro = {
//     rodas: 4,
//     init(valor){
//         this.marca = valor;
//         return this;
//     },
//     acelerar(){
//         return this.marca + ' acelerou';
//     },
//     buzinar(){
//         return this.marca + ' buzinou';
//     }
// }

// const honda = Object.create(carro).init('honda');

// console.log(honda);

// const ferrari = Object.create(carro).init('Ferrari');

// console.log(ferrari);




// const funcaoAutomovel = {
//     acelerar(){
//         return 'acelerou';
//     },
//     buzinar(){
//         return 'buzinou';
//     }
// }

// const moto = {}

// // Object.assign(moto, funcaoAutomovel, carro)

// // console.log(moto)


// Object.defineProperties(moto, {
//     rodas: {
//         // value: 2,   
//         // configurable: false, - permite configurar ou deletar
//         // writable: false, - permite sebre escrver, receber nova informação
//         // enumerable: false, - 
//         get(){
//             return this._rodas;
//         },
//         set(valor){
//             this._rodas = valor * 4
//         }

//     }

// })

// console.log(moto)