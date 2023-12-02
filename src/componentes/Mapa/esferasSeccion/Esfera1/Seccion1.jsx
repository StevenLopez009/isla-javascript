import { Link } from "react-router-dom";
import esferaOne from "../../../../assets/img/life.png";
import "./Seccion1.css";

const Seccion1 = () => {
  return (
    <Link to="/Preguntas1">
      <div className="btnSections one">
        <img src={esferaOne} alt="esfera" />
        <h3>Seccion 1</h3>
      </div>
    </Link>
  );
};

export default Seccion1;
