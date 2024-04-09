import ListaEnlazada from './ListaEnlazada.js';


let lista = new ListaEnlazada();

lista.append('Bulbasaur');
lista.append('Ivysaur');
lista.append('Venusaur');
console.log(lista.size());
lista.prepend('Ditto');
console.log(lista.size());
// cabecera y cola
console.log("*******");
console.log(lista.head());
console.log(lista.tail());

console.log('***');
// busqueda por index
console.log(lista.at(2));
console.log(lista.at(10));
console.log('*** aplica pop *** ');
lista.pop();
console.log(lista.size());
console.log(lista.contains('Ivysaur'));
console.log('*** indice ***');
console.log(lista.find('Ivysaur'));
