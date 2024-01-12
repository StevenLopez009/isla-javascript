import { Link } from "react-router-dom";
import esferaThree from "../../../../assets/img/lifethree.png";

const Seccion13 = () => {
  return (
    <Link to="/Preguntas13">
      <div className="btnSections one">
        <img src={esferaThree} alt="esfera" />
        <h3>Seccion 13</h3>
      </div>
    </Link>
  );
};

export default Seccion13;
