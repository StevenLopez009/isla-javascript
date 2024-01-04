import { useUnlock } from "../../context/DesbloquearSecciones/UnlockSections";
import "./Mapa.css";
import Seccion1 from "./Secciones/Esfera1/Seccion1";
import Seccion2 from "./Secciones/Esfera2/Seccion2";
import Seccion3 from "./Secciones/Esfera3/Seccion3";
import Seccion4 from "./Secciones/Esfera4/Seccion4";
import Seccion5 from "./Secciones/Esfera5/Seccion5";
import Seccion6 from "./Secciones/Esfera6/Seccion6";
import Seccion7 from "./Secciones/Esfera7/Seccion7";
import Seccion8 from "./Secciones/Esfera8/Seccion8";
import Seccion9 from "./Secciones/Esfera9/Seccion9";
import Seccion10 from "./Secciones/Esfera10/Seccion10";
import Seccion11 from "./Secciones/Esfera11/Seccion11";
import Seccion12 from "./Secciones/Esfera12/Seccion12";
import Seccion13 from "./Secciones/Esfera13/Seccion13";
import Seccion14 from "./Secciones/Esfera14/Seccion14";
import Seccion15 from "./Secciones/Esfera15/Seccion15";
import Seccion16 from "./Secciones/Esfera16/Seccion16";

const Mapa = () => {
  const { visible } = useUnlock();
  return (
    <>
      <div className="content-sections">
        <Seccion1></Seccion1>
        {visible && <Seccion2></Seccion2>}
        {visible && <Seccion3></Seccion3>}
        {visible && <Seccion4></Seccion4>}
        {visible && <Seccion5></Seccion5>}
        {visible && <Seccion6></Seccion6>}
        {visible && <Seccion7></Seccion7>}
        {visible && <Seccion8></Seccion8>}
        {visible && <Seccion9></Seccion9>}
        {visible && <Seccion10></Seccion10>}
        {visible && <Seccion11></Seccion11>}
        {visible && <Seccion12></Seccion12>}
        {visible && <Seccion13></Seccion13>}
        {visible && <Seccion14></Seccion14>}
        {visible && <Seccion15></Seccion15>}
        {visible && <Seccion16></Seccion16>}
      </div>
    </>
  );
};

export default Mapa;
