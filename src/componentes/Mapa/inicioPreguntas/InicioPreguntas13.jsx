import { Link } from "react-router-dom";
import { useQuestionThirteen } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas13 = () => {
  const { fetchThirteen } = useQuestionThirteen();
  const handleClick = async () => {
    return await fetchThirteen();
  };
  return (
    <div className="Start StartThirteen">
      <h2>Frameworks y LIbrerias</h2>
      <Link to={"/seccion13"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas13;
