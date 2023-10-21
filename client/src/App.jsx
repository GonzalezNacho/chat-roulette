
import './App.css'

import io from 'socket.io-client'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Nickname } from './Components/Nickname'
import { Chatform } from './Components/Chatform'
import { Messages } from './Components/Messages'

//Conexion para escuchar y enviar los eventos

const socket = io('http://localhost:4001')

function App() {

  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const [storedMessages, setStoredMessages] = useState([])
  const [firstTime, setFirstTime] = useState(false)

  const url = 'http://localhost:4001/api/'

  useEffect(()=> {
    const receivedMessage = (message) => {
      setMessages([message, ...messages])
    }

    socket.on('message', receivedMessage)

    return () => {
      socket.off('message', receivedMessage)
    }
  }, [messages])

  if(!firstTime) {
    axios.get(url +'messages').then(res => {
      let messagesDb = res.data.messages
      setStoredMessages(messagesDb)
    })
    setFirstTime(true)
  }

  return (
    <>
      <div className='App'>
        <div className='container mt-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='text-center'>chat</h5>
              <Nickname nickname={nickname} setNickname={setNickname}/>
              <Chatform nickname={nickname} message={message} messages={messages} setMessage={setMessage} setMessages={setMessages} socket={socket} url={url}/>
            </div>
          </div>

          {/* Chat messages */}

          <div className='card mt-3 mb-3' id='content-chat'>
                <Messages messages={messages}/>
                <small className='text-center text-muted p-3'>... Mensajes guardados ...</small>
                <Messages messages={storedMessages} nickname={nickname}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
