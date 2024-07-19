import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Oppsss!!, Ruta no encontrada</h2>
      <Link to="/">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
