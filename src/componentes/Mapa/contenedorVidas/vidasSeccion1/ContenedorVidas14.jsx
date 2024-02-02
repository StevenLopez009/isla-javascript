import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection14 from "../../componentesSecciones/componente1/QuestionSection14";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas14 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal fourteen_Life">
      {vida <= 0 ? <Death /> : <QuestionSection14 />}
    </div>
  );
};

export default ContenedorVidas14;
