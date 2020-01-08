const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//2.1
let idades = usuarios.map(item => item.idade);
//console.log(idades);

//2.2
let colaboradores = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18)
//console.log(colaboradores);

//2.3
let googlers = usuarios.find(item => item.empresa === 'Google');
console.log(googlers);
