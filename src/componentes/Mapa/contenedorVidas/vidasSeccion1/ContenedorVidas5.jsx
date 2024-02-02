import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection5 from "../../componentesSecciones/componente1/QuestionSection5";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas5 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal five_Life">
      {vida <= 0 ? <Death /> : <QuestionSection5 />}
    </div>
  );
};

export default ContenedorVidas5;
