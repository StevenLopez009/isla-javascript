import { Link } from "react-router-dom";
import esferaEight from "../../../../assets/img/lifeocho.png";

const Seccion8 = () => {
  return (
    <Link to="/Preguntas8">
      <div className="btnSections one">
        <img src={esferaEight} alt="esfera" />
        <h3>Seccion 8</h3>
      </div>
    </Link>
  );
};

export default Seccion8;
