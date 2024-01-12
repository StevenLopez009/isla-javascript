import { Link } from "react-router-dom";
import { useQuestionSixteen } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas16 = () => {
  const { fetchSixteen } = useQuestionSixteen();
  const handleClick = async () => {
    return await fetchSixteen();
  };
  return (
    <div className="Start StartSixteen">
      <h2>Optimizacion</h2>
      <Link to={"/seccion16"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas16;
