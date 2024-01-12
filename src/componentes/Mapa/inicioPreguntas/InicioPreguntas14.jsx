import { Link } from "react-router-dom";
import { useQuestionFourteen } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas14 = () => {
  const { fetchFourteen } = useQuestionFourteen();
  const handleClick = async () => {
    return await fetchFourteen();
  };
  return (
    <div className="Start StartFourteen">
      <h2>Hidra de los Modulos</h2>
      <Link to={"/seccion14"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas14;
