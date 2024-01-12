import { Link } from "react-router-dom";
import { useQuestionFour } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas4 = () => {
  const { fetchFour } = useQuestionFour();
  const handleClick = async () => {
    return await fetchFour();
  };
  return (
    <div className="Start StartFour">
      <h2>Ciudadela de los Objetos</h2>
      <Link to={"/seccion4"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas4;
