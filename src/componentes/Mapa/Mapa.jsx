import { useUnlock } from "../../context/DesbloquearSecciones/UnlockSections";
import "./Mapa.css";
import esferaOne from "../../assets/img/life.png";
import esferaTwo from "../../assets/img/lifedos.png";
import esferaThree from "../../assets/img/lifethree.png";
import esferaFour from "../../assets/img/lifetwo.png";
import esferaFive from "../../assets/img/lifecinco.png";
import esferaSix from "../../assets/img/lifeseis.png";
import esferaSeven from "../../assets/img/lifecuatro.png";
import esferaEight from "../../assets/img/lifeocho.png";
import esferaNine from "../../assets/img/lifenine.png";
import esferaTen from "../../assets/img/lifeten.png";
import esferaEleven from "../../assets/img/lifeeleven.png";
import esferaTwelve from "../../assets/img/lifetwelve.png";
import esferaThirten from "../../assets/img/lifethree.png";
import esferaFourten from "../../assets/img/lifecatorce.png";
import esferaFiveten from "../../assets/img/lifequince.png";
import esferaSixten from "../../assets/img/lifedieciseis.png";

import { Seccion } from "./Secciones";

const Mapa = () => {
  const { visible } = useUnlock();
  return (
    <>
      <div className="content-sections">
        <Seccion img={esferaOne} title={"Seccion 1"} rute={"/Preguntas1"} />
        {visible && (
          <Seccion img={esferaTwo} title={"Seccion 2"} rute={"/Preguntas2"} />
        )}
        {visible && (
          <Seccion img={esferaThree} title={"Seccion 3"} rute={"/Preguntas3"} />
        )}
        {visible && (
          <Seccion img={esferaFour} title={"Seccion4"} rute={"/Preguntas4"} />
        )}
        {visible && (
          <Seccion img={esferaFive} title={"Seccion 5"} rute={"/Preguntas5"} />
        )}
        {visible && (
          <Seccion img={esferaSix} title={"Seccion 6"} rute={"/Preguntas6"} />
        )}
        {visible && (
          <Seccion img={esferaSeven} title={"Seccion 7"} rute={"/Preguntas7"} />
        )}
        {visible && (
          <Seccion img={esferaEight} title={"Seccion 8"} rute={"/Preguntas8"} />
        )}
        {visible && (
          <Seccion img={esferaNine} title={"Seccion 9"} rute={"/Preguntas9"} />
        )}
        {visible && (
          <Seccion img={esferaTen} title={"Seccion 10"} rute={"/Preguntas10"} />
        )}
        {visible && (
          <Seccion
            img={esferaEleven}
            title={"Seccion 11"}
            rute={"/Preguntas11"}
          />
        )}
        {visible && (
          <Seccion
            img={esferaTwelve}
            title={"Seccion 12"}
            rute={"/Preguntas12"}
          />
        )}
        {visible && (
          <Seccion
            img={esferaThirten}
            title={"Seccion 13"}
            rute={"/Preguntas13"}
          />
        )}
        {visible && (
          <Seccion
            img={esferaFourten}
            title={"Seccion 14"}
            rute={"/Preguntas14"}
          />
        )}
        {visible && (
          <Seccion
            img={esferaFiveten}
            title={"Seccion 15"}
            rute={"/Preguntas15"}
          />
        )}
        {visible && (
          <Seccion
            img={esferaSixten}
            title={"Seccion 16"}
            rute={"/Preguntas16"}
          />
        )}
      </div>
    </>
  );
};

export default Mapa;
