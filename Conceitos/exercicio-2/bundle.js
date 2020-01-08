"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1

var idades = usuarios.map(function (item) {
  return item.idade;
}); //console.log(idades);
//2.2

var colaboradores = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
}); //console.log(colaboradores);
//2.3

var googlers = usuarios.find(function (item) {
  return item.empresa === 'Google';
}); //console.log(googlers);
//2.4

var idadesx2 = usuarios.map(function (item, index) {
  return {
    nome: item.nome,
    idade: item.idade * 2,
    empresa: item.empresa
  };
});
var menorQue50 = idadesx2.filter(function (item) {
  return item.idade <= 50;
});
console.log(menorQue50);
