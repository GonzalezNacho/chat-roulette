export function Footer () {
    return (
        <>
            <footer className="footer">
                <div className="footer-links">
                    <a href="#" target="_blank"><img src="src/assets/img/facebook.png" alt="Facebook"/></a>
                    <a href="#" target="_blank"><img src="src/assets/img/instagram.png" alt="Twitter"/></a>
                </div>
                <div className="footer-text">
                    Hecho por <span className="author">Grupo "i"</span>
                </div>
                <div className="subscribe">
                    <p>Suscríbete a nuestro boletín:</p>
                    <div className="subscribe-input">
                        <input type="email" placeholder="Ingresa tu email"/>
                        <button>Enviar</button>
                    </div>
                </div>
            </footer>
        </>
    )
}