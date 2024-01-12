import { Link } from "react-router-dom";
import { useQuestionThree } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas3 = () => {
  const { fetchThree } = useQuestionThree();
  const handleClick = async () => {
    return await fetchThree();
  };
  return (
    <div className="Start StartThree">
      <h2>Fuego y Funciones</h2>
      <Link to={"/seccion3"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas3;
