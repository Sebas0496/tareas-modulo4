import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import "./App.css";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPaginar] = useState(0);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, [pagina]);
  console.log(personajes);



  return (
    <>
      <h1 className="titulo">Personajes de Rick y Morty pagina {pagina}</h1>
      <div className="container">
        {personajes.length !== 0 && personajes.map((personaje) => (
          <CharacterCard key={personaje.id} url={personaje.image} titulo={personaje.name} estado={personaje.status} genero={personaje.gender} />
        ))}
        <button onClick={() => setPaginar(pagina + 1)}>Pagina</button>
        <button onClick={() => setPaginar(pagina - 1)}>Devolver</button>
      </div>
    </>
  );
}

export default App;
