
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <div className='container mt-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='text-center'>chat</h5>

              {/*Nickname*/}
              <form action="">
                <div className='d-flex mb-3'>
                  <input type="text" className='form-control' placeholder='Nickname...' id='nickname'/>
                  <button className='btn btn-success mx-3' type='submit' id='btn-nickname'>Establecer</button>
                </div>
              </form>

              {/*Chat form*/}
              <form action="">
                <div className='d-flex'>
                  <input type="text" className='form-control' placeholder='Mensaje...' id='message'/>
                  <button className='btn btn-success mx-3' type='submit' id='btn-message'>Enviar</button>
                </div>
              </form>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
