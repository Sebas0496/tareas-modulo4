import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";

function App() {
  const [charactersList, setcharactersList] = useState([]);
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const filterParams = new URLSearchParams({
      name: nameFilter,
      status: statusFilter,
      page: page,
    }).toString();

    fetch(`https://rickandmortyapi.com/api/character/?${filterParams}`)
      .then(response => response.json())
      .then(data => {
        setcharactersList(data.results);
        // console.log(data.results);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [page, nameFilter, statusFilter]);

  const nextPage = () => {
    setPage(page => page + 1);
  };

  const previousPage = () => {
    if (page > 1) setPage(page => page - 1);
  };

  const handleSearch = () => {
    setPage(1); 
  };

  return (
    <>
      <div className="Container">
        <div className="filters">
          <label>
            Name:
            <input 
              type="text" 
              value={nameFilter} 
              onChange={(e) => setNameFilter(e.target.value)} 
            />
          </label>
          <label>
            Status:
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </label>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="characters-list">
          {charactersList.length > 0 ? (
            charactersList.map((character) => (
              <CardComponent
                key={character.id}
                titulo={character.name}
                url={character.image}
                genero={character.gender}
                estado={character.status}
              />
            ))
          ) : (
            <p>No characters found</p>
          )}
        </div>
        <div className="pagination">
          <button onClick={previousPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
