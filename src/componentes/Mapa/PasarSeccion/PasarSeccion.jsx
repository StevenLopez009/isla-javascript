import { Link } from "react-router-dom";
import "./PasarSeccion.css";

const PasarSeccion = () => {
  return (
    <div className="pasar-seccion-container">
      <h2 className="pasar-seccion-title">¡Has terminado la sección!</h2>
      <Link to="/Mapa" className="pasar-seccion-link">
        Pasar a la siguiente Sección
      </Link>
    </div>
  );
};

export default PasarSeccion;
