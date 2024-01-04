import { Link } from "react-router-dom";
import esferaLife from "../../../../assets/img/lifeeleven.png";

const Seccion11 = () => {
  return (
    <Link to="/Preguntas11">
      <div className="btnSections one">
        <img src={esferaLife} alt="esfera" />
        <h3>Seccion 11</h3>
      </div>
    </Link>
  );
};

export default Seccion11;
