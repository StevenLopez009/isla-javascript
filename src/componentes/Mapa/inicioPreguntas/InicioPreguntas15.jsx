import { Link } from "react-router-dom";
import { useQuestionFifteen } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas15 = () => {
  const { fetchFifteen } = useQuestionFifteen();
  const handleClick = async () => {
    return await fetchFifteen();
  };
  return (
    <div className="Start StartFifteen">
      <h2>Seguridad</h2>
      <Link to={"/seccion15"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas15;
