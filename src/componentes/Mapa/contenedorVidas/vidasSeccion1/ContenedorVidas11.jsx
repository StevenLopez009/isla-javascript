import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection11 from "../../componentesSecciones/componente1/QuestionSection11";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas11 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal eleven_Life">
      {vida <= 0 ? <Death /> : <QuestionSection11 />}
    </div>
  );
};

export default ContenedorVidas11;
