import { Link } from "react-router-dom";
import esferaTwo from "../../../../assets/img/lifedos.png";

const Seccion2 = () => {
  return (
    <Link to="/Preguntas2">
      <div className="btnSections one">
        <img src={esferaTwo} alt="esfera" />
        <h3>Seccion 2</h3>
      </div>
    </Link>
  );
};

export default Seccion2;
