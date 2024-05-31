import "../components/header.css"

function Header(){
    return(
    <header  className="header">
        <section className="container-img">
            <h1>Daniel Solarte</h1>
        </section>

        <ul className="lista">
            <li>Inicio</li>
            <li>Sobre mi</li>
            <li>Habilidades</li>
            <li>Portafolio</li>
            <li>Contacto</li>
        </ul>
    </header>
)
}

export default Header;