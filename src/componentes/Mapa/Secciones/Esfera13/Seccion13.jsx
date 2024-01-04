import { Link } from "react-router-dom";
import esferaOne from "../../../../assets/img/life.png";

const Seccion13 = () => {
  return (
    <Link to="/Preguntas13">
      <div className="btnSections one">
        <img src={esferaOne} alt="esfera" />
        <h3>Seccion 13</h3>
      </div>
    </Link>
  );
};

export default Seccion13;
