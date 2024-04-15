/*const rooms = {
    total:0,
    arr:new Map()
}
rooms.arr.set('room0',['prueba'])
rooms.arr.set('room1',['prueba 1'])
rooms.arr.set('room0',[...rooms.arr.get('room0'),'prueba 2'])


console.log(rooms.arr.get('room0'))
console.log(rooms.arr.get('room1'))*/

class Rooms {
    #cant;
    #arr;

    constructor() {
      this.#cant = 0;
      this.#arr = new Map();
    }

    #getRandomRoom() {
        const numero = Math.floor(Math.random() * this.#cant)
        return 'room' + numero;
    }
  
    crear(socket) {
        this.#cant += 1;
        const room = this.#getRandomRoom()
        this.#arr.set(room ,[socket])
    }

    unirse(socket) {
        const nombreRoom = this.#getRandomRoom();
        this.#arr.set(nombreRoom,[...this.#arr.get(nombreRoom), socket])
    }

    obtenerRooms(room) {
        return this.#arr.get(room);
    }
}

const rooms = new Rooms()
rooms.crear('pruebaasd')
rooms.unirse('prueba')

console.log(rooms.obtenerRooms('room0'))