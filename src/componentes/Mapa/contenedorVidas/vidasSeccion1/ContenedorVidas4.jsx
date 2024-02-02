import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection4 from "../../componentesSecciones/componente1/QuestionSection4";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas4 = () => {
  const { vida } = useComponent();
  return (
    <div className="componente_principal four_Life">
      {vida <= 0 ? <Death /> : <QuestionSection4 />}
    </div>
  );
};

export default ContenedorVidas4;
