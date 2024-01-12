import { Link } from "react-router-dom";
import { useQuestionEight } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas8 = () => {
  const { fetchEight } = useQuestionEight();
  const handleClick = async () => {
    return await fetchEight();
  };
  return (
    <div className="Start StartEight">
      <h2>Tierras de la Programacion Orientada a Objetos</h2>
      <Link to={"/seccion8"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas8;
