import './Roulette.css'
import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { ip, port } from '../assets/js/const'
import { Chat } from "./Chat";
import { io } from 'socket.io-client';

//Conexion para escuchar y enviar los eventos
const socket = io(`${ip}:${port}`)


export function Roulette() {

    const [roomSelected, setRoomSelected] = useState(false)
    const { isAuthenticated } = useAuth0();

    const handlerClick = (action) => {
        setRoomSelected(true)
        socket.emit(`${action} room`)
    }

    return (
        isAuthenticated ?
            roomSelected ?
            <Chat socket={socket}/>
            :
            <>
                <h1>Elige una opicion</h1>    
                <section className="conteiners-divs">
                    <div id="crear-sala" onClick={() => handlerClick('create')}>
                        <h1>Crear Sala</h1>
                        <p>Seras el unico participante hasta que ingrese otro usuario</p>
                    </div>
                    <div id="unirse" onClick={ () => handlerClick('join')}>
                        <h1>Unirse</h1>
                        <p>Unirse a una sala ya existente, en caso de no existir ninguna crearas la sala</p>
                    </div>
                </section>
            </>
        :
        <h2>necesita loguearse</h2>
    )
}