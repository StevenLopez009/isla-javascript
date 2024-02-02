import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection9 from "../../componentesSecciones/componente1/QuestionSection9";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas9 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal nine_Life">
      {vida <= 0 ? <Death /> : <QuestionSection9 />}
    </div>
  );
};

export default ContenedorVidas9;
