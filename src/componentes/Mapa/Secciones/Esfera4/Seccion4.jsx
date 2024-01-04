import { Link } from "react-router-dom";
import esferaFour from "../../../../assets/img/lifecuatro.png";

const Seccion4 = () => {
  return (
    <Link to="/Preguntas4">
      <div className="btnSections one">
        <img src={esferaFour} alt="esfera" />
        <h3>Seccion 4</h3>
      </div>
    </Link>
  );
};

export default Seccion4;
