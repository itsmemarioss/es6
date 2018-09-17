"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 01
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
//02

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
}, {
  nome: 'Mario',
  idade: 27,
  empresa: 'Google'
}];
var idades = usuarios.map(function (u) {
  return u.idade;
});
console.log(idades);
var rocketUsers = usuarios.filter(function (u) {
  return u.idade > 18 && u.empresa === 'Rocketseat';
});
console.log(rocketUsers);
var googleEmployee = usuarios.find(function (u) {
  return u.empresa === 'Google';
});
console.log(googleEmployee);
var multiplyingAges = usuarios.map(function (u) {
  u.idade *= 2;
  return u;
}).filter(function (u) {
  return u.idade <= 50;
});
console.log(multiplyingAges); //03

var arr = [1, 2, 3, 4, 5]; //3.1 arr.map(function(item) { return item + 10;});

var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr);
var usuario = {
  nome: 'Diego',
  idade: 23
}; //3.2 function mostraIdade(usuario) {  return usuario.idade;}

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); //3.3

var nome = "Diego";
var idade = 23; //function mostraUsuario(nome = 'Diego', idade = 18) {  return { nome, idade };}

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // 3.4
//4 desestruturação

var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // TODO: desetruturar

var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(name); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
//4.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); //5 rest/spread
//5.1 rest

var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

var soma = function soma() {
  for (var _len = arguments.length, b = new Array(_len), _key = 0; _key < _len; _key++) {
    b[_key] = arguments[_key];
  }

  return b.reduce(function (total, prox) {
    return total + prox;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
//5.2 spread

var user = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var user1 = _objectSpread({}, user, {
  nome: 'Gabriel'
});

console.log(user1);

var user2 = _objectSpread({}, user, {
  endereco: _objectSpread({}, user.endereco, {
    cidade: 'Lontras'
  })
});

console.log(user2); // 6 template literals

var u = 'Diego';
var i = 23;
console.log("O usu\xE1rio ".concat(u, " possui ").concat(i, " anos")); //7 object short syntax

var user5 = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log(user5);
