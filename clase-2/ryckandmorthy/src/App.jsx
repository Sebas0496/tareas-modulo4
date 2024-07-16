import React, { useEffect, useState } from "react";
import CardComponent from './components/CardComponent';
import './App.css';

function App() {
  const rickAndMortyCharacterId = 1;
  const [charactersList, setcharactersList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then(response => response.json())
      .then(data => {
        setcharactersList(data.results);
        console.log(data.results)
      })
  }, [])

  return (
    <>
      <div className="Container">
        {charactersList.map((character) => (
          <CardComponent
            key={character.id}
            titulo={character.name}
            url={character.image}
            genero={character.gender}
            estado={character.status}></CardComponent>
        ))

        }
      </div>
    </>
  );
}

export default App;
