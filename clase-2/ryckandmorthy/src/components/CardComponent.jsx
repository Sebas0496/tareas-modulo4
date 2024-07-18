import React from 'react';
import TitleComponent from './TitleComponent';
import ImgComponent from './ImgComponent';
import DetailsComponent from './DetailsComponent';  

function CardComponent({ titulo, url, genero, estado }) {
  return (
    <div className="Card">
      <TitleComponent titulo={titulo} />  
      <ImgComponent url={url} />
      <DetailsComponent genero={genero} estado={estado} />
    </div>
  );
}

export default CardComponent;
