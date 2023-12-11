import { useState, useContext } from "react"
import { UserContext } from '../context/user';
import { ip, port } from '../assets/js/const'
import { Chat } from "./Chat";
import { io } from 'socket.io-client';

//Conexion para escuchar y enviar los eventos
const socket = io(`${ip}:${port}`)


export function Roulette() {

    const [roomSelected, setRoomSelected] = useState(false)
    const { login } = useContext(UserContext)

    const handlerClickUnirse = () => {
        setRoomSelected(true)
        socket.emit('join room')
    }
    
    const handlerClickCrear = () => {
        setRoomSelected(true)
        socket.emit('create room')
    }

    return (
        login.isLogin ?
            roomSelected ?
            <Chat socket={socket}/>
            :
            <>
                <h1>Elige una opicion</h1>    
                <section className="conteiners-divs">
                    <div id="crear-sala" onClick={handlerClickCrear}>
                        <h1>Crear Sala</h1>
                        <p>Seras el unico participante hasta que ingrese otro usuario</p>
                    </div>
                    <div id="unirse" onClick={handlerClickUnirse}>
                        <h1>Unirse</h1>
                        <p>Unirse a una sala ya existente, en caso de no existir ninguna crearas la sala</p>
                    </div>
                </section>
            </>
        :
        <h2>necesita loguearse</h2>
    )
}