import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection7 from "../../componentesSecciones/componente1/QuestionSection7";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas7 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal seven_Life">
      {vida <= 0 ? <Death /> : <QuestionSection7 />}
    </div>
  );
};

export default ContenedorVidas7;
