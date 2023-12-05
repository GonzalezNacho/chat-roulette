export function Roulette({socket}) {

    const handlerClickUnirse = () => {
        socket.emit('join room')
    }
    
    const handlerClickCrear = () => {
        socket.emit('create room')
    }

    return (
        <>
            <h1>Elige una opicion</h1>    
            <section className="conteiners-divs">
                <div id="crear-sala" onClick={handlerClickCrear}>
                    <h1>Crear Sala</h1>
                    <p>Seras el unico participante hasta que ingrese otro usuario</p>
                </div>
                <div id="unirse" onClick={handlerClickUnirse}>
                    <h1>Unirse</h1>
                    <p>Unirse a una sala ya existente</p>
                </div>
            </section>
        </>
    )
}