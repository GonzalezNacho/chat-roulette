
import './App.css'

import io from 'socket.io-client'
import axios from 'axios'
import { useState, useEffect } from 'react'

//Conexion para escuchar y enviar los eventos

const socket = io('http://localhost:4001')
const url = 'http://localhost:4001/api/'

function App() {

  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState('')
  const [disable, setDisable] = useState(false)
  const [messages, setMessages] =useState([])

  const [storedMessages, setStoredMessages] = useState([])
  const [firstTime, setFirstTime] =useState(false)

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
      setStoredMessages(res.data.messages)
    })
    setFirstTime(true)
  }

  const handlerSubmit = e => {
    e.preventDefault()

    if (nickname != '') {
      socket.emit('message', message, nickname)

      const newMessage = {
        body:message,
        from:'Yo'
      }

      setMessages([newMessage,...messages])
      setMessage('')

      //Petición HTTP por POST para guardar el mensaje

      axios.post( url + 'save', {
        message: message,
        from: nickname
      })

    } else {
      alert('Para enviar un mensaje debes establecer un nickname')
    }
  }
  
  const nicknameSubmit = (e) => {
    e.preventDefault()
    setNickname(nickname)
    setDisable(true)
  }

  return (
    <>
      <div className='App'>
        <div className='container mt-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='text-center'>chat</h5>

              {/*Nickname*/}
              <form onSubmit={nicknameSubmit}>
                <div className='d-flex mb-3'>
                  <input type="text" className='form-control' placeholder='Nickname...' id='nickname' onChange={e => setNickname(e.target.value)}/>
                  <button className='btn btn-success mx-3' type='submit' id='btn-nickname'>Establecer</button>
                </div>
              </form>

              {/*Chat form*/}
              <form onSubmit={handlerSubmit}>
                <div className='d-flex'>
                  <input type="text" className='form-control' placeholder='Mensaje...' id='message' onChange={e => setMessage(e.target.value)} value={message}/>
                  <button className='btn btn-success mx-3' type='submit' id='btn-message'>Enviar</button>
                </div>
              </form>
            </div>
          </div>

          {/* Chat messages */}

          <div className='card mt-3 mb-3' id='content-chat'>
              <div className='card-body'>

              </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
