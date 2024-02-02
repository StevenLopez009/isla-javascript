import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection15 from "../../componentesSecciones/componente1/QuestionSection15";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas15 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal fifteen_Life">
      {vida <= 0 ? <Death /> : <QuestionSection15 />}
    </div>
  );
};

export default ContenedorVidas15;
