import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection8 from "../../componentesSecciones/componente1/QuestionSection8";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas8 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal eight_Life">
      {vida <= 0 ? <Death /> : <QuestionSection8 />}
    </div>
  );
};

export default ContenedorVidas8;
