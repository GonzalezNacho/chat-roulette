export function Contacto () {
    return (
        <>
            <h1>Contactenos</h1>
            <section className="content">
                <div className="container">
                    <form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comentarios">Comentarios:</label>
                        <textarea id="comentarios" name="comentarios" required></textarea>
                    </div>
                    
                    <div className="form-group">
                        <button type="submit">Enviar</button>
                    </div>
                    </form>
                </div>
            </section>
        </>
    )
}