import Seccion1 from "./esferasSeccion/Esfera1/Seccion1";
import { useUnlock } from "../../context/DesbloquearSecciones/UnlockSections";
import "./Mapa.css";
import Seccion2 from "./esferasSeccion/Esfera2/Seccion2";

const Mapa = () => {
  const { visible } = useUnlock();
  return (
    <>
      <div className="content-sections">
        <Seccion1></Seccion1>
        {visible && <Seccion2></Seccion2>}
      </div>
    </>
  );
};

export default Mapa;
