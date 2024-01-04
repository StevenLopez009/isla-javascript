import { Link } from "react-router-dom";
import esferaSix from "../../../../assets/img/lifeseis.png";

const Seccion6 = () => {
  return (
    <Link to="/Preguntas6">
      <div className="btnSections one">
        <img src={esferaSix} alt="esfera" />
        <h3>Seccion 6</h3>
      </div>
    </Link>
  );
};

export default Seccion6;
