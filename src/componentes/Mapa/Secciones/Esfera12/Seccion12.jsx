import { Link } from "react-router-dom";
import esferaTwelve from "../../../../assets/img/lifetwelve.png";

const Seccion12 = () => {
  return (
    <Link to="/Preguntas12">
      <div className="btnSections one">
        <img src={esferaTwelve} alt="esfera" />
        <h3>Seccion 12</h3>
      </div>
    </Link>
  );
};

export default Seccion12;
