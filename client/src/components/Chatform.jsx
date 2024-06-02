import axios from 'axios'
import {PropTypes} from 'prop-types'
import { url } from '../assets/js/const'


export function Chatform ({nickname, socket, message, messages, setMessage, setMessages}) { 

    const handlerSubmit = e => {
            e.preventDefault()
        
            socket.emit('message', message, nickname)
    
            const newMessage = {
                body:message,
                from:'Yo'
            }
    
            setMessages([newMessage,...messages])
            setMessage('')
    
            //Petición HTTP por POST para guardar el mensaje
    
            axios.post( url + 'messages/', {
                messages: message,
                from: nickname
            })
        }

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" placeholder='Mensaje...' id='message-input' onChange={e => setMessage(e.target.value)} value={message}/>
            <button type='submit' id='btn-message'>Enviar</button>
        </form>
    )
}

Chatform.propTypes = {
    nickname: PropTypes.string.isRequired,
    socket: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    setMessage: PropTypes.func.isRequired,
    setMessages: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}
