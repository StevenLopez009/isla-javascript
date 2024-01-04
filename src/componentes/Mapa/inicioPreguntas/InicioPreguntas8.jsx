import { Link } from "react-router-dom";
import { useQuestion } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas8 = () => {
  const { fetchOne } = useQuestion();
  const handleClick = async () => {
    return await fetchOne();
  };
  return (
    <div className="Start StartEight">
      <h2>Tierras de la Programacion Orientada a Objetos</h2>
      <Link to={"/seccion2"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas8;
