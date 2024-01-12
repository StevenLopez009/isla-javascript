import { Link } from "react-router-dom";
import { useQuestionSeven } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas7 = () => {
  const { fetchSeven } = useQuestionSeven();
  const handleClick = async () => {
    return await fetchSeven();
  };
  return (
    <div className="Start StartSeven">
      <h2>Ajax y Peticiones Fetch</h2>
      <Link to={"/seccion7"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas7;
