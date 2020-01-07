"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var usuario = {
  nome: 'Carlera',
  idade: 24,
  empresa: 'Advise'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); // console.log(nome);
// console.log(resto);


var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2); // console.log(a);
// console.log(b);
// console.log(c);

function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  //return params.reduce((total, next) => total + next);
  return params;
}

; //console.log(soma(1,3,4));
//Spread Operator

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2); //console.log(arr3);

var usuario1 = {
  nome: 'Carlera',
  idade: 23,
  empresa: 'Advise'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Macaquera'
}); //console.log(usuario2);
//-------------------------------------------------------------------
