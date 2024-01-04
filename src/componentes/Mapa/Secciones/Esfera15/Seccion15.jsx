import { Link } from "react-router-dom";
import esferaQuince from "../../../../assets/img/lifequince.png";

const Seccion15 = () => {
  return (
    <Link to="/Preguntas15">
      <div className="btnSections one">
        <img src={esferaQuince} alt="esfera" />
        <h3>Seccion 15</h3>
      </div>
    </Link>
  );
};

export default Seccion15;
