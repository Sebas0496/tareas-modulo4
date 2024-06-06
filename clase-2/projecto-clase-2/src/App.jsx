import React from "react";
import CharacterCard from "./components/CharacterCard";
import "./App.css";
import foto1 from "./assets/rick.jpg";
import foto2 from "./assets/morthhy.jpg";
import foto3 from "./assets/rick_malo.jpg";
import foto4 from "./assets/tony.jpg";
function App(){
  return(
    <>
    <h1>Personajes de rick y morthy</h1>
    <div className="container">
      <CharacterCard url={foto1} titulo="Rick Sanchez" genero="masculino" estado="vivo"/>
      <CharacterCard url={foto2} titulo="morthy Smith " genero="masculino" estado="vivo"/>
      <CharacterCard url={foto3} titulo="Rick Prime " genero="masculino" estado="muerto"/>
      <CharacterCard url={foto4} titulo="tony " genero="masculino" estado="muerto"/>
    </div>
    </>
  ) 
}
export default App;