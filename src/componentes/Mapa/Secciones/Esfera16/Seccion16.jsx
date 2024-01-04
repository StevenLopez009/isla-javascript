import { Link } from "react-router-dom";
import esferaDieciseis from "../../../../assets/img/lifedieciseis.png";

const Seccion16 = () => {
  return (
    <Link to="/Preguntas16">
      <div className="btnSections one">
        <img src={esferaDieciseis} alt="esfera" />
        <h3>Seccion 16</h3>
      </div>
    </Link>
  );
};

export default Seccion16;
