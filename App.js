import ListaEnlazada from './ListaEnlazada.js';


let lista = new ListaEnlazada();

lista.append('Bulbasaur');
lista.append('Ivysaur');
lista.append('Venusaur');
 lista.toString();
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
console.log(lista.find('Charizard'));

lista.toString();
console.log(lista.size());


let lista_2 = new ListaEnlazada();
 
 lista_2.append('Azul');
lista_2.append('Rojo');
lista_2.append('Amarillo1');  
lista_2.append('Amarillo2');  
lista_2.append('Amarillo3');  

lista_2.toString();

lista_2.insertAt('Blanco', 4);

lista_2.toString();

lista_2.removeAt(3);

lista_2.toString();