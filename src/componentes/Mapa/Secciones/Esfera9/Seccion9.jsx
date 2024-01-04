import { Link } from "react-router-dom";
import esferaNine from "../../../../assets/img/lifenine.png";

const Seccion9 = () => {
  return (
    <Link to="/Preguntas9">
      <div className="btnSections one">
        <img src={esferaNine} alt="esfera" />
        <h3>Seccion 9</h3>
      </div>
    </Link>
  );
};

export default Seccion9;
