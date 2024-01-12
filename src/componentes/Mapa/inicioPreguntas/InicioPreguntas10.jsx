import { Link } from "react-router-dom";
import { useQuestionTen } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas10 = () => {
  const { fetchTen } = useQuestionTen();
  const handleClick = async () => {
    return await fetchTen();
  };
  return (
    <div className="Start StartTen">
      <h2>Pantano de los Errores</h2>
      <Link to={"/seccion10"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas10;
