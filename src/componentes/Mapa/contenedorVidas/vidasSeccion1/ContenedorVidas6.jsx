import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection6 from "../../componentesSecciones/componente1/QuestionSection6";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas6 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal six_Life">
      {vida <= 0 ? <Death /> : <QuestionSection6 />}
    </div>
  );
};

export default ContenedorVidas6;
