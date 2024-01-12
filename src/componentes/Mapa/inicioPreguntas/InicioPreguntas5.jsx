import { Link } from "react-router-dom";
import { useQuestionFive } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas5 = () => {
  const { fetchFive } = useQuestionFive();
  const handleClick = async () => {
    return await fetchFive();
  };
  return (
    <div className="Start StartFive">
      <h2>Castillo de los Arreglos</h2>
      <Link to={"/seccion5"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas5;
