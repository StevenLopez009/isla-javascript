import { Link } from "react-router-dom";
import esferaFive from "../../../../assets/img/lifecinco.png";

const Seccion5 = () => {
  return (
    <Link to="/Preguntas5">
      <div className="btnSections one">
        <img src={esferaFive} alt="esfera" />
        <h3>Seccion 5</h3>
      </div>
    </Link>
  );
};

export default Seccion5;
