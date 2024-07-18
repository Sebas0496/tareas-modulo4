import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";


function App() {
  const rickAndMortyCharacterId = 1;
  const [charactersList, setcharactersList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setcharactersList(data.results);
        //console.log(data.results)
      })
  }, [page])

  const nexPage = () => {
    setPage(page => page + 1);
  };

  const afterPage = () => {
    if (page > 1) return setPage(page => page - 1);
  }


  return (
    <>
      <div className="Container">
        {charactersList.map((character) => (
          <CardComponent
            key={character.id}
            titulo={character.name}
            url={character.image}
            genero={character.gender}
            estado={character.status}>

          </CardComponent>
        ))

        }
        <button onClick={nexPage}>Next</button>
        <button onClick={afterPage}>After</button>
      </div>
    </>
  );
}

export default App;
