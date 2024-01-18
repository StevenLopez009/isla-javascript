import { useState } from "react";
import premiounoImg from "../../assets/img/premiouno.png";
import premiodosImg from "../../assets/img/premiodos.png";
import premiotresImg from "../../assets/img/premiotres.png";
import premiocuatroImg from "../../assets/img/premiocuatro.png";
import "./Taberna.css";

const Taberna = () => {
  const [ver, setVer] = useState(false);
  const [premiouno, setPremiouno] = useState(true);
  const [premiodos, setPremiodos] = useState(true);
  const [premiotres, setPremiotres] = useState(true);
  const [premiocuatro, setPremiocuatro] = useState(true);

  const handleVisually = () => {
    setVer(true);
  };
  return (
    <>
      {ver ? (
        <div className="contenedor-secundario-taberna">
          <div className="contenedor-perfil">
            <img src="" alt="" />
          </div>
          <div className="contenedor-premios">
            {premiouno ? (
              <div className="premio premio-1">
                <img src={premiounoImg} alt="" />
                <h4>Premio Basico</h4>
              </div>
            ) : null}
            {premiodos ? (
              <div className="premio premio-2">
                <img src={premiodosImg} alt="" />
                <h4>Premio Intermedio</h4>
              </div>
            ) : null}
            {premiotres ? (
              <div className="premio premio-3">
                <img src={premiotresImg} alt="" />
                <h4>Premio Avanzado</h4>
              </div>
            ) : null}
            {premiocuatro ? (
              <div className="premio premio-4">
                <img src={premiocuatroImg} alt="" />
                <h4>Premio Legenda</h4>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="container-principal-taberna">
          <h2>Taberna</h2>
          <button className="btn-play" onClick={handleVisually}></button>
        </div>
      )}
    </>
  );
};

export default Taberna;
