import { Link } from "react-router-dom";
import esferaSeven from "../../../../assets/img/lifecuatro.png";

const Seccion7 = () => {
  return (
    <Link to="/Preguntas7">
      <div className="btnSections one">
        <img src={esferaSeven} alt="esfera" />
        <h3>Seccion 7</h3>
      </div>
    </Link>
  );
};

export default Seccion7;
