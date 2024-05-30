import "./card.css";

const pokemon = [
    {
        id: 1,
        nombre: "Pikachu",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3iIiDJQW4HYJk2osK19O3RQ4Hs4MDSF8PQ&s" // Cambia esto a una URL válida de la imagen
    },
    {
        id: 2,
        nombre: "Charizard",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS-hbht2xO9KdT31EUmYwpAJS2HwD2xplxQ&s" // Cambia esto a una URL válida de la imagen
    }
];

function Card() {
    return (
        pokemon.map((item) => (
            <div key={item.id} className="card">
                <h1>{item.nombre}</h1>
                <img className="image" src={item.imagen} alt={item.nombre} />
            </div>
        ))
    );
}

export default Card;
