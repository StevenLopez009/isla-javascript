import { useState } from "react";
import "./ContenedorVidas.css";
import lifeImage from "../../../../assets/img/life.png";
import QuestionSection1 from "../../componentesSecciones/componente1/QuestionSection1";
import Death from "./Death/Death";

const vidaInicial = 5;

const ContenedorVidas = () => {
  const [vida, setVida] = useState(vidaInicial);

  const decrementLife = () => {
    setVida(vida - 1);
  };

  return (
    <div className="componente_principal one_life">
      <div>
        <div className="div__life">
          <h3>{vida}</h3>
          <img src={lifeImage} alt="" />
        </div>
      </div>
      {vida <= 0 ? <Death /> : <QuestionSection1 decrement={decrementLife} />}
    </div>
  );
};

export default ContenedorVidas;
