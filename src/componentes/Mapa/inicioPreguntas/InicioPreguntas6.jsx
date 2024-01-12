import { Link } from "react-router-dom";
import { useQuestionSix } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas6 = () => {
  const { fetchSix } = useQuestionSix();
  const handleClick = async () => {
    return await fetchSix();
  };
  return (
    <div className="Start StartSix">
      <h2>Golem del DOM</h2>
      <Link to={"/seccion6"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas6;
