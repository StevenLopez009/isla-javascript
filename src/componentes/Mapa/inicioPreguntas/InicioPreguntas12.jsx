import { Link } from "react-router-dom";
import { useQuestionTwelve } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas12 = () => {
  const { fetchTwelve } = useQuestionTwelve();
  const handleClick = async () => {
    return await fetchTwelve();
  };
  return (
    <div className="Start StartTwelve">
      <h2>Armas y Herramientas</h2>
      <Link to={"/seccion12"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas12;
