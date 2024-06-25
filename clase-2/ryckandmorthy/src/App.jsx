import React from 'react';
import CardComponent from './components/CardComponent';
import Img from './assets/thebest.jpg';
import Img2 from './assets/messi.jpg';
import Img3 from './assets/kyliam.jpg';
import './App.css';

function App() {
  return (
    <div className="Container">
      <CardComponent titulo="Cristiano Ronaldo" url={Img} genero="masculino" estado="Vivo" />
      <CardComponent titulo="Leonel Messi" url={Img2} genero="masculino" estado="Vivo" />
      <CardComponent titulo="Kyliam mbappe" url={Img3} genero="masculino" estado="Vivo" />
    </div>
  );
}

export default App;
