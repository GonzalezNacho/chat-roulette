import { useMessages } from '../hooks/useMessages'
import { Chatform } from '../components/Chatform'
import { Messages } from '../components/Messages'
import { useAuth0 } from "@auth0/auth0-react";
import { url } from '../assets/js/const'

export function Chat ({ socket }) {

    const { user, isAuthenticated } = useAuth0();
    const { message, messages, storedMessages, setMessage, setMessages } = useMessages({socket})
    return (
        isAuthenticated ?
            <div>
                <div className='container mt-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='text-center'>Chat</h2>
                            <Chatform nickname={user.name} socket={socket} message={message} messages={messages} setMessage={setMessage} setMessages={setMessages} url={url}/>
                        </div>
                    </div>

                    {/* Chat messages */}

                    <div className='card mt-3 mb-3' id='content-chat'>
                        <Messages messages={messages} />
                        <small className='text-center text-muted p-3'>... Mensajes guardados ...</small>
                        <Messages messages={storedMessages} nickname={user.name}/>
                    </div>
                </div>
            </div>
            :
            <h3>Esperando la autenticacion</h3>
    )
}