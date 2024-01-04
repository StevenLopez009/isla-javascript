import { Link } from "react-router-dom";
import { useQuestionTwo } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas2 = () => {
  const { fetchTwo } = useQuestionTwo();
  const handleClick = async () => {
    return await fetchTwo();
  };
  return (
    <div className="Start StartTwo">
      <h2>
        Cementerio de las <br />
        Estructuras de Control
      </h2>
      <Link to={"/seccion2"}>
        <button className="btn-play" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas2;
