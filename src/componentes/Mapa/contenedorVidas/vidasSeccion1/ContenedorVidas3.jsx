import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection3 from "../../componentesSecciones/componente1/QuestionSection3";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas3 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal three_Life">
      {vida <= 0 ? <Death /> : <QuestionSection3 />}
    </div>
  );
};

export default ContenedorVidas3;
