import { Link } from "react-router-dom";
import { useQuestionNine } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas9 = () => {
  const { fetchNine } = useQuestionNine();
  const handleClick = async () => {
    return await fetchNine();
  };
  return (
    <div className="Start StartNine">
      <h2>Portal Asyncrono</h2>
      <Link to={"/seccion9"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas9;
