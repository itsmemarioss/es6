// 01

class Usuario {

  constructor(email, senha){
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin(){
    return this.admin;
  }
}

class Admin extends Usuario{
  constructor(email, senha){
      super(email,senha);
      this.admin=true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//02

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  { nome: 'Mario', idade: 27, empresa: 'Google' },
];

const idades = usuarios.map( u => u.idade);
console.log(idades);

const rocketUsers = usuarios.filter( u => u.idade > 18 && u.empresa === 'Rocketseat');
console.log(rocketUsers);

const googleEmployee = usuarios.find( u => u.empresa === 'Google');
console.log(googleEmployee);

const multiplyingAges = usuarios.map(u => {
  u.idade *=2;
  return u;
}).filter(u => u.idade <= 50);

console.log(multiplyingAges);

//03

const arr = [1, 2, 3, 4, 5];

//3.1 arr.map(function(item) { return item + 10;});
let newArr = arr.map(item => item + 10);
console.log(newArr);

const usuario = { nome: 'Diego', idade: 23 };

//3.2 function mostraIdade(usuario) {  return usuario.idade;}
const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));
//3.3
const nome = "Diego";
const idade = 23;

//function mostraUsuario(nome = 'Diego', idade = 18) {  return { nome, idade };}
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4

//4 desestruturação

const empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

// TODO: desetruturar
const {name,endereco:{cidade, estado}} = empresa;


console.log(name); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2

function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//5 rest/spread

//5.1 rest

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...b) => {
  return b.reduce( (total, prox) => total + prox);
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2 spread
const user = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const user1 = {...user, nome: 'Gabriel'};
console.log(user1);

const user2 = {...user, endereco:{...user.endereco, cidade: 'Lontras'}} ;
console.log(user2);

// 6 template literals

const u = 'Diego';
const i = 23;

console.log(`O usuário ${u} possui ${i} anos`);

//7 object short syntax

const user5 = {
  nome,
  idade,
  cidade: 'Rio do Sul',
};

console.log(user5);
