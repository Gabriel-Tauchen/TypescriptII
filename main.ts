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

// class Produto {
//     constructor(public nome: string,
//     public preco?: number){}// o '?' deixa opcional o ? deixa assim: public preco: number | undefined = undefined
// }
// const note = new Produto("Notebook", 2500);
// console.log(note.nome);
// note.preco=3000;
// const note1 = new Produto("Notebook 1");
// console.log(note1.preco);
// note1.preco=10;

//ASSOCIAÇÃO

// class Aluno {
//     nome: string;
//     curso: Curso | null;
//     constructor(nome:string){
//         this.nome = nome;
//         this.curso = null
//     }
//     //equivalente a isso:
//     //constructor(public nome:string,
//     //public curso: Curso|null = null)
// }
// class Curso{
//     sigla: string;
//     alunos: Aluno[];
//     constructor(sigla:string){
//         this.sigla = sigla;
//         this.alunos = [];
//     }
//     //equivalente a isso:
//     //constructor(public sigla:string,
//     //public alunos: Aluno[] = [])
// }

// const ze = new Aluno("José");
// const maria = new
// Aluno("Maria");
// const c = new Curso("ECO");
// c.alunos.push(ze);
// c.alunos.push(maria);
// console.log(c.alunos[0].nome);
// console.log(c.alunos[1].nome);

//AGREGAÇÃO

// class Jogador{
//     constructor(public nome:string = nome){}
// }
// class Time{
//     constructor(public jogadores:Jogador[]=[]){}
// }

// const sts = new Time();
// sts.jogadores.push(new Jogador("Germán Cano"));
// console.log(sts.jogadores[0].nome);

class Capitulo {
    constructor(public titulo:string){}
}
class Livro {
    constructor(public capitulo:Capitulo[]=[]) {}
}
const meuLivro = new Livro();
meuLivro.capitulo.push(new Capitulo("Introdução"));
console.log(meuLivro.capitulo[0].titulo);