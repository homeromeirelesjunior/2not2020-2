/*
    Deque = Double-Ended Queue (Fila de duas pontas)
    Permite inserções e remoções em qualquer um dos seus lados
*/
module.exports = class Deque {
    constructor() {         // Igual ao do Queue2
        this.data = {}
        this.head = 0
        this.tail = -1
    }

    // Inserção no início
    insertFront(value) {
        this.head--
        this.data[this.head] = value
    }

    // Inserção no fim
    insertRear(value) {    // Igual ao enqueue() do Queue2
        this.tail++
        this.data[this.tail] = value
    }

    // Remoção do início
    removeFront() {        // Igual ao dequeue() do Queue2
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // Remoção do fim
    removeRear() {         // Igual ao peek() do Queue2      
       let value = this.data[this.tail]              
       delete this.data[this.tail]
       this.tail--
       return value
    }

    // "Olhadinha" no início
    peekFront() {
        return this.data[this.head]
    }

    // "Olhadinha" no final
    peekRear() {
        return this.data[this.tail]
    }

    size() {              // Igual ao size() do Queue2
        return this.tail - this.head + 1    
    }
}