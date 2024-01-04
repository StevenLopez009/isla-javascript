import { Link } from "react-router-dom";
import esferaThree from "../../../../assets/img/lifethree.png";

const Seccion3 = () => {
  return (
    <Link to="/Preguntas3">
      <div className="btnSections one">
        <img src={esferaThree} alt="esfera" />
        <h3>Seccion 3</h3>
      </div>
    </Link>
  );
};

export default Seccion3;
