import { Link } from "react-router-dom";
import { useQuestion } from "../../../context/ContextSections/ContextOne";
import { useEffect } from "react";

const PasarSeccion = () => {
  return (
    <div>
      <h2>Has terminado la sección </h2>
      <Link to="/Mapa">Pasar a la siguiente Seccion </Link>
    </div>
  );
};

export default PasarSeccion;
