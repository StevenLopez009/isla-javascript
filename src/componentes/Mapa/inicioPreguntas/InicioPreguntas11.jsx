import { Link } from "react-router-dom";
import { useQuestionEleven } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas11 = () => {
  const { fetchEleven } = useQuestionEleven();
  const handleClick = async () => {
    return await fetchEleven();
  };
  return (
    <div className="Start StartEleven">
      <h2>Almacenamiento en el navegador</h2>
      <Link to={"/seccion11"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas11;
