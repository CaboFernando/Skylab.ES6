"use strict";

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
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma(1));
// console.log(soma());
//-------------------------------------------------------------------
//                              Desestruturação
// const usuario = {
//     nome: 'Carlera',
//     idade: 24,
//     endereco: {
//         cidade: 'Londrina',
//         estado: 'PR'
//     }
// };
// const {nome, idade, endereco: {cidade} }  = usuario;
// console.log(nome, idade, cidade);
// function mostraNome({nome}){
//     console.log(nome);
// }
// mostraNome(usuario);
//-------------------------------------------------------------------
//                              Operadores rest/spread
//Rest Operator
// const usuario = {
//     nome: 'Carlera',
//     idade: 24,
//     empresa: 'Advise'
// };
// const {nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto);
// const arr = [1,2,3,4];
// const [a,b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// function soma(a,b, ...params) {
//     return params.reduce((total, next) => total + next);
//     return params;
// };
// console.log(soma(1,3,4));
// Spread Operator
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const usuario1 = {
//     nome: 'Carlera',
//     idade: 23,
//     empresa: 'Advise'
// };
// const usuario2 = { ...usuario1, nome: 'Macaquera'};
// console.log(usuario2);
//-------------------------------------------------------------------
//                              Template Literals
var nome = 'Carlera';
var idade = 24; //console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos"));
