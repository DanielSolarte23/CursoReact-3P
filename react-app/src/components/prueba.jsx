import { useState } from "react";

function Prueba() {
    const [tema, setTema] = useState(true)
    const TemaOscuro = () => {
        setTema(false);
        console.log(tema);
        let body = document.querySelector('body');
        body.style.backgroundColor='black';
        body.style.color='white';
    }
    const cambiarClaro = () => {
        setTema(true);
        console.log(tema);
        let body = document.querySelector('body');
        body.style.backgroundColor='white';
        body.style.color='red';
    }

    return (<div>
        <h1>likes {tema}</h1>
        <button id="claro" onClick={TemaOscuro}>Cambiar Tema</button>
        <button onClick={cambiarClaro}>Cambiar Tema</button>
    </div>)
}

export default Prueba;

