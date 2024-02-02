import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection10 from "../../componentesSecciones/componente1/QuestionSection10";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas10 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal ten_Life">
      {vida <= 0 ? <Death /> : <QuestionSection10 />}
    </div>
  );
};

export default ContenedorVidas10;
