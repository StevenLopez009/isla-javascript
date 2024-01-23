import { useState } from "react";
import Mapa from "./Mapa";
import "./Mapa.css";

const IntroMapa = () => {
  const [ver, setVer] = useState(false);

  const handleVisually = () => {
    setVer(true);
  };
  return (
    <>
      {ver ? (
        <Mapa></Mapa>
      ) : (
        <div className="intro-mapa">
          <h2>Mapa</h2>
          <button className="btn-play" onClick={handleVisually}></button>
        </div>
      )}
    </>
  );
};

export default IntroMapa;
