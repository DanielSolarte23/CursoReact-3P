import "../components/inicio.css";

function Inicio(){
    return(
        <section className="seccion-principal">
            <header className="contenidoB">
                <article className="ContenedorImg">
                    <img className="img" src="../img/perfil.jpg" alt="imagen de perfil"/> 
                </article>
                <h1 className="minombre">Daniel Solarte</h1>
                <h2 className="Profesion">DESARROLLADOR FRONTEND</h2>
                <section>
                    <a className="redes"></a>
                    <a className="redes"></a>
                    <a className="redes"></a>
                </section>
            </header>
        </section>
    )
}

export default Inicio;