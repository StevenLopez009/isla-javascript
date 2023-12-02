import { Link } from "react-router-dom";
import esferaOne from "../../../../assets/img/lifetwo.png";
import "./Seccion2.css";

const Seccion2 = () => {
  return (
    <Link to="/Pregunta2">
      <div className="btnSections one">
        <img src={esferaOne} alt="esfera" />
        <h3>Seccion 2</h3>
      </div>
    </Link>
  );
};

export default Seccion2;
