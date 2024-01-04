import { Link } from "react-router-dom";
import { useQuestion } from "../../../context/ContextSections/ContextOne";
import "./inicioPreguntas.css";

const InicioPreguntas12 = () => {
  const { fetchOne } = useQuestion();
  const handleClick = async () => {
    return await fetchOne();
  };
  return (
    <div className="Start ">
      <h2>------</h2>
      <Link to={"/seccion2"}>
        <button className="btn-play btnThree" onClick={handleClick}></button>
      </Link>
    </div>
  );
};

export default InicioPreguntas12;
