// Classes

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Paulo';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

// Const & Let

const usuario = { nome: 'Paulo'};

usuario.nome = 'Diego';

console.log(usuario);

function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4;
    
    console.log(x, y);
  }
}

teste(10);

// Operações em Array

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 == 0;
});

console.log(filter);

const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);

// Arrow Functions

const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);
console.log(newArr);

const teste = () => { // === function teste() { }
  return 'teste';
}
console.log(teste());

const teste2 = () => [1, 2, 3];
console.log(teste2());

const teste3 = () => ({ nome: 'Paulo' });
console.log(teste3());

// Valores padrão

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

// Desestruturação

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);

// Operadores rest/spread

// REST

const usuario = {
  nome: 'Paulo',
  idade: '23',
  empresa: 'Cacique'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, c) {
  return a + b + c;
}

console.log(soma(1, 3, 4));

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

function soma(a, b, ...params) {
  return params;
}

console.log(soma(1, 3, 4, 5, 6, 7));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ... arr2 ];

console.log(arr3);

const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

const usuario2 = { ...usuario1, nome: 'Paulo' };

console.log(usuario2);

// Template Literals

const nome = 'Diego';
const idade = 23;

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Object Short Syntax

const nome = 'Paulo';
const idade = 23;

const usuario = {
  nome,
  idade,
  empresa: 'Cacique'
}

console.log(usuario);



