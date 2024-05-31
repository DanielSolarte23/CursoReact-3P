import { useState, useEffect } from "react";

function Prueba() {
    const [likes, setLikes] = useState(0)
    const countLIkes = () => {
        setLikes(likes + 1);
        console.log(likes);
    };
    useEffect(countLIkes, [])

    return (
        <div>
            <h1>likes {likes}</h1>
            <button id="claro" onClick={countLIkes}>👍</button>

        </div>)
}

export default Prueba;

