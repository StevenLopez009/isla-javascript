import { Link } from "react-router-dom";
import esferaCatorce from "../../../../assets/img/lifecatorce.png";

const Seccion14 = () => {
  return (
    <Link to="/Preguntas14">
      <div className="btnSections one">
        <img src={esferaCatorce} alt="esfera" />
        <h3>Seccion 14</h3>
      </div>
    </Link>
  );
};

export default Seccion14;
