import { Link } from "react-router-dom";
import "./Splash.css";

const Splash = () => {
  return (
    <div className="div-splash">
      <h1 className="titulo-inicio">Isla JavaScript</h1>
      <Link to={"/Inicio"} className="link-inicio">
        <button className="btn-inicio"></button>
      </Link>
    </div>
  );
};

export default Splash;
