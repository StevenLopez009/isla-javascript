import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection13 from "../../componentesSecciones/componente1/QuestionSection13";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas13 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal thirteen_Life">
      {vida <= 0 ? <Death /> : <QuestionSection13 />}
    </div>
  );
};

export default ContenedorVidas13;
