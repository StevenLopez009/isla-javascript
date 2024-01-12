import { useState } from "react";
import "./ContenedorVidas.css";
import lifeImage from "../../../../assets/img/life.png";
import Death from "./Death/Death";
import QuestionSection12 from "../../componentesSecciones/componente1/QuestionSection12";

const vidaInicial = 10;

const ContenedorVidas12 = () => {
  const [vida, setVida] = useState(vidaInicial);

  const decrementLife = () => {
    setVida(vida - 1);
  };

  return (
    <div className="componente_principal twelve_Life">
      <div>
        <div className="div__life">
          <h3>{vida}</h3>
          <img src={lifeImage} alt="" />
        </div>
      </div>
      {vida <= 0 ? <Death /> : <QuestionSection12 decrement={decrementLife} />}
    </div>
  );
};

export default ContenedorVidas12;
