import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection16 from "../../componentesSecciones/componente1/QuestionSection16";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas16 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal sixteen_Life">
      {vida <= 0 ? <Death /> : <QuestionSection16 />}
    </div>
  );
};

export default ContenedorVidas16;
