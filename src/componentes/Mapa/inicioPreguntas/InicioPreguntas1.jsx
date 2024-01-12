import { Link } from "react-router-dom";
import { useQuestionOne } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas1 = () => {
  const { fetchOne } = useQuestionOne();
  const handleClick = async () => {
    return await fetchOne();
  };
  return (
    <div className="Start StartOne">
      <h2>Llegada a la Isla</h2>
      <Link to={"/seccion1"}>
        <button className="btn-play" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas1;
