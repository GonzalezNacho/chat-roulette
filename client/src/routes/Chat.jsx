import { useMessages } from '../hooks/useMessages'
import { Chatform } from '../components/Chatform'
import { Messages } from '../components/Messages'
import { useAuth0 } from "@auth0/auth0-react";
import { url } from '../assets/js/const'
import './Chat.css'

export function Chat ({ socket }) {

    const { user, isAuthenticated } = useAuth0();
    const { message, messages, storedMessages, setMessage, setMessages } = useMessages({socket})
    return (
        isAuthenticated ?
            <div className='content-chat'>
                <div className='chat-form'>
                    <h2>Chat</h2>
                    <Chatform nickname={user.name} socket={socket} message={message} messages={messages} setMessage={setMessage} setMessages={setMessages} url={url}/>
                </div>
                

                {/* Chat messages */}

                <div className='chat-form' id='content-chat'>
                    <Messages messages={messages} />
                    <small >... Mensajes guardados ...</small>
                    <Messages messages={storedMessages} nickname={user.name}/>
                </div>
            </div>
            :
            <h3>Esperando la autenticacion</h3>
    )
}