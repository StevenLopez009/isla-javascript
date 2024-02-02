import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection2 from "../../componentesSecciones/componente1/QuestionSection2";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas2 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal two_Life">
      {vida <= 0 ? <Death /> : <QuestionSection2 />}
    </div>
  );
};

export default ContenedorVidas2;
