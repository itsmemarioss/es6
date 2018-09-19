import * as funcs from './functions';
//classes

//const e let

//arrow functions

//valores padrão em parâmetros

//desestruturação

//rest
const arr = [1,2,3,4];

const [a,b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);


function soma (a, b, ...c){
  return a+b;
}

console.log(soma(1,3,4,5));

//spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
  nome: 'mario',
  idade: 23,
  empresa: 'cactus'
};

const usuario2 = {...usuario1, nome:'arkson'};

console.log(usuario2);

//template literals
const nome = "Diego";
const idade = 26;

//console.log('meu nome é :'+ nome+' e tenho '+idade+' ano(s)');
//usa crase ao invés de aspas
console.log(`meu nome é ${nome} e tenho ${idade} anos.`);

//object short syntax

const user = {
  nome,
  idade,
  empresa : 'Eres'
};

console.log(user);


console.log(funcs.sub(100,1));
