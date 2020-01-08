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
});
console.log(googlers);
