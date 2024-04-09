import Nodo from './Nodo.js';

class ListaEnlazada {

    constructor() {
        this.listHeader = null;
    }

    // agrega nodo con valor al final de la lista
    append(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.listHeader) {
            this.listHeader = nuevoNodo;
            console.log(nuevoNodo);
        } else {
            let actual = this.listHeader;
            while (actual.nextNode) {
                actual = actual.nextNode;
            }
            actual.nextNode = nuevoNodo;
            console.log(nuevoNodo);
        }

    }
    // agrega nodo con valor al inicio de la lista
    prepend(valor) {
        const nuevoNodo = new Nodo(valor);
        nuevoNodo.nextNode = this.listHeader;
        this.listHeader = nuevoNodo;
        console.log(nuevoNodo);

    }
    // retorna el numero total de nodos en la lista
    size() {
        let size = 0;
        let actual = this.listHeader;
        while (actual != null) {
            actual = actual.nextNode;
            size++;
        }
        return size;

    }
    // retorna el primer nodo en la lista
    head() {
        return this.listHeader;

    }
    // retorna el ultimo nodo en la lista
    tail() {
        let actual = this.listHeader;
        while (actual.nextNode) {
            actual = actual.nextNode;
        }
        return actual;
    }
    // retorna el nodo segun el indice pasado
    at(index) {
        let nodoActual = this.listHeader;
        for (let i = 0; i < index; i++) {
            nodoActual = nodoActual.nextNode;
            if (!nodoActual) return 'No se encontro un Nodo';
        }
        if (nodoActual) {
            return nodoActual;
        }
        return 'No se encontro un Nodo';
    }
    // pop elimina el ultimo elemento de la lista
    pop() {

        if (!this.listHeader) {
            console.log('Lista vacia');
            return;
        }

        let actual = this.listHeader;
        let previo = null;
        while (actual.nextNode != null) {
            previo = actual;
            actual = actual.nextNode;
        }
        console.log(previo);
        console.log(actual);

        if (!previo) {
            this.listHeader = null;
        } else {
            previo.nextNode = null;
        }
    }

    contains(valor)
    {
        let nodo = this.listHeader;
        if (valor == nodo.value) return true;
    
        while (nodo.nextNode != null) {
            nodo = nodo.nextNode;
            if(nodo.value == valor) return true;
        }
        return false;
    
    }

    find(valor)
    {
        let nodo = this.listHeader;
        let index = 1;
        if (valor == nodo.value) return 1;
        
        while (nodo.nextNode != null) {
            nodo = nodo.nextNode;
            index++
            if(nodo.value == valor) return index;
        }
       return "No se encuentra el nodo";
        
    }
    
}


export default ListaEnlazada;