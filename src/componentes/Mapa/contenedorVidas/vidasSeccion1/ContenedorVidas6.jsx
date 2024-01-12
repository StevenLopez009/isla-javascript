import { useState } from "react";
import "./ContenedorVidas.css";
import lifeImage from "../../../../assets/img/life.png";
import Death from "./Death/Death";
import QuestionSection6 from "../../componentesSecciones/componente1/QuestionSection6";

const vidaInicial = 10;

const ContenedorVidas6 = () => {
  const [vida, setVida] = useState(vidaInicial);

  const decrementLife = () => {
    setVida(vida - 1);
  };

  return (
    <div className="componente_principal six_Life">
      <div>
        <div className="div__life">
          <h3>{vida}</h3>
          <img src={lifeImage} alt="" />
        </div>
      </div>
      {vida <= 0 ? <Death /> : <QuestionSection6 decrement={decrementLife} />}
    </div>
  );
};

export default ContenedorVidas6;
