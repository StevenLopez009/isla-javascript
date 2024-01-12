import { useState } from "react";
import "./ContenedorVidas.css";
import lifeImage from "../../../../assets/img/life.png";
import Death from "./Death/Death";
import QuestionSection15 from "../../componentesSecciones/componente1/QuestionSection15";

const vidaInicial = 10;

const ContenedorVidas15 = () => {
  const [vida, setVida] = useState(vidaInicial);

  const decrementLife = () => {
    setVida(vida - 1);
  };

  return (
    <div className="componente_principal fifteen_Life">
      <div>
        <div className="div__life">
          <h3>{vida}</h3>
          <img src={lifeImage} alt="" />
        </div>
      </div>
      {vida <= 0 ? <Death /> : <QuestionSection15 decrement={decrementLife} />}
    </div>
  );
};

export default ContenedorVidas15;
