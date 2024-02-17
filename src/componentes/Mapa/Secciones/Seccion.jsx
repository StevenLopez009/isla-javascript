import { Link } from "react-router-dom";
import "./Seccion1.css";

const Seccion = ({ img, title, rute }) => {
  return (
    <Link to={rute}>
      <div className="btnSections one">
        <img src={img} alt="esfera" />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default Seccion;
