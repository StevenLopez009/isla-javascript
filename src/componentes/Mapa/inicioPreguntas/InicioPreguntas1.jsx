import { Link } from "react-router-dom";
import { useQuestion } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas1.css";

const InicioPreguntas1 = () => {
  const { fetchOne } = useQuestion();
  const handleClick = async () => {
    return await fetchOne();
  };
  return (
    <div className="Start StartOne">
      <h2>Seccion 1 Introduccion</h2>
      <Link to={"/seccion1"}>
        <button className="btn-play" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas1;
