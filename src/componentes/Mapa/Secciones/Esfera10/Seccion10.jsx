import { Link } from "react-router-dom";
import esferaTen from "../../../../assets/img/lifeten.png";

const Seccion10 = () => {
  return (
    <Link to="/Preguntas10">
      <div className="btnSections one">
        <img src={esferaTen} alt="esfera" />
        <h3>Seccion 10</h3>
      </div>
    </Link>
  );
};

export default Seccion10;
