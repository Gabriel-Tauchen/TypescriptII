//Classe
// class Pessoa {
//     nome: string;
//     idade: number;
//     apresentar(): void{
//         console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos`);
//     }
// }
// const pessoa = new Pessoa()
// pessoa.nome = "John Doe";
// pessoa.idade = 30;
// pessoa.apresentar();
//Visibilidade
// class Conta{
//     public nome: string;
//     private saldo: number;
//     constructor(nome: string, saldo: number){
//         this.nome = nome;
//         this.saldo = saldo;
//     }
//     mostrarSaldo(): void{
//         console.log(`Saldo: ${this.saldo}`)
//     }
// }
// const conta = new Conta("Conta Corrente", 1000000);
// console.log(conta.nome);
// //console.log(conta.saldo); //erro
// conta.mostrarSaldo();
//Propriedade sem uso de construtor
// class Produto{
//     public nome: string = "Produto";
//     public preco: number = 0;
// }
// const note = new Produto();
// console.log(note.nome);
//Propriedade com construtor
// class Produto {
//     constructor(public nome: string,
//     public preco: number){}
//     }
//     const note = new Produto("Notebook", 2500);
//     console.log(note.nome()); //dá erro pois não estão inicializados os parâmetros
//Valor Padrão da propriedade no construtor
// class Produto {
//     constructor(public nome: string = '',
//     public preco: number = 0){}
// }
// const note = new Produto("Notebook", 2500);
// const note1 = new Produto("Notebook 1");
// const note2 = new Produto();
// console.log(note.nome);
// note.preco=3000;
// console.log(note.preco);
//Gets e Sets
// class Produto {
//         constructor(public nome: string,
//         private _preco: number){}
//         get preco() : number{
//             console.log("get");
//             return this._preco;
//         }
//         set preco(preco : number) {
//             console.log("set");
//             if(preco>0){
//                 this._preco=preco;
//             }
//         }
//     }
//     const note = new Produto("Notebook", 2500);
//     console.log(note.nome);
//     note.preco=3000;//invoca o set
//     console.log(note.preco);//invoca o get
// Propriedade opcional
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Produto;
}());
var note = new Produto("Notebook", 2500);
console.log(note.nome);
note.preco = 3000;
var note1 = new Produto("Notebook 1");
console.log(note1.preco);
note1.preco = 10;
