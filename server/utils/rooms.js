export class Rooms {
    #cant;
    #map;

    constructor() {
        this.#cant = 0;
        this.#map = new Map();
    }

    #getRandomRoom() {
        const numero = Math.floor(Math.random() * this.#cant)
        return 'room' + numero;
    }

    #borrarRoom(room) {
        this.#map.delete(room)
    }

    crear(socket) {
        this.#cant += 1;
        const room = this.#getRandomRoom()
        this.#map.set(room ,new Set([socket]))
        return room;
    }

    unirse(socket) {
        let nombreRoom;
        if (this.#cant == 0 ) {
            nombreRoom = this.crear(socket)
        } else {
            nombreRoom = this.#getRandomRoom();
            this.#map.get(nombreRoom).add(socket)
        }
        return nombreRoom;
    }

    salir(socket,room) {
        console.log( `${room} y el socket ${socket}`)
        const roomObt = this.#map.get(room)
        if (roomObt.has(socket)) {
            this.#map.get(room).delete(socket)
        }
        if (this.#map.get(room).size == 0) {
            this.#borrarRoom(room)
            this.#cant -= 1;
        }
    }
}
