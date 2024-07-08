import React, { useEffect, useState } from "react";
import CardComponent from './components/CardComponent';
import './App.css';

function App() {
  const rickAndMortyCharacterId = 1;
  const [personaje, setpersonaje] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId)
      .then(response => response.json())
      .then(data => {
        setpersonaje(data);
        console.log(data)
      })
  }, [])

  const imagen = personaje ? personaje.image : '';

  return (
    <>
      {personaje ? (
        <CardComponent titulo={personaje.name} url={imagen} genero={personaje.gender} estado={personaje.status}></CardComponent>
      ) :
        (<p>cargando</p>)
      }
    </>
  );
}

export default App;
