type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

console.log(marguerita);

const nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4,
}

console.log(nutela);


// exercise 4
type Comum = 'Calabresa' | 'Frango' | 'Peperoni';
type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Doce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface PizzaComum extends Pizza {
  flavor: Comum,
}

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana,
}

interface PizzaDoce extends Pizza {
  flavor: Doce,
  slices: 4,
}

const calabresaComum: PizzaComum = {
  flavor: 'Calabresa',
  slices: 8,
}

console.log(calabresaComum);

const peperoniComum: PizzaComum = {
  flavor: 'Peperoni',
  slices: 4,
}

console.log(peperoniComum);

const frangoComum: PizzaComum = {
  flavor: 'Frango',
  slices: 6,
}

console.log(frangoComum);

const palmitoVegetariana: PizzaVegetariana = {
  flavor: 'Palmito',
  slices: 6,
}

console.log(palmitoVegetariana);

const cogumeloVegetariana: PizzaVegetariana = {
  flavor: 'Cogumelo',
  slices: 6,
}

console.log(cogumeloVegetariana);

const marshmallow: PizzaDoce = {
  flavor: 'Marshmallow',
  slices: 4,
}

console.log(marshmallow);