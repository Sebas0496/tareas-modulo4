function DetailsComponent({ genero, estado }) {
    return (
      <div className="Details">
        <p>
          <b>Genero</b>: {genero}
        </p>
        <p>
          <b>Estado:</b> {estado}
        </p>
      </div>
    );
  }
  
  export default DetailsComponent;
  