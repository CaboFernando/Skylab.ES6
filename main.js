//                              Classes
// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor(){
//         super();

//         this.usuario = 'Macacudo';
//     }

//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();
//-------------------------------------------------------------------


//                              Const & Let
// class Math {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// console.log(Math.soma(1, 2));

// const usuario = {nome: 'Carlos'};
// usuario.nome = 'Cleiton';
// console.log(usuario);

// function teste(x) {
//     let y = 2

//     if(x > 2) 
//     console.log(x, y);    
// }

// teste(10);
//-------------------------------------------------------------------

//                              Operações em Arrays
// const arr = [1,3,4,5,8,9];
// const newArr = arr.map(function(item, index) {
//     return item + index;
// });
// console.log(newArr);

// const sum = arr.reduce(function(total, next){
//     return total + next;
// });
// console.log(sum);

// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);

// const find = arr.find(function(item){
//     return item === 2;
// });
// console.log(find);
//-------------------------------------------------------------------


//                              Arrow Function
// const arr = [1,3,4,5,6];
// const newArr = arr.map(item => item * 2);
// console.log(newArr);

// const teste = () => ({nome: 'Carlera'});
// console.log(teste());
//-------------------------------------------------------------------


//                              Valores padrão
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());