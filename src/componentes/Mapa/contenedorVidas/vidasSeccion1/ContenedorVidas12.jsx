import "./ContenedorVidas.css";
import Death from "./Death/Death";
import QuestionSection12 from "../../componentesSecciones/componente1/QuestionSection12";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas12 = () => {
  const { vida } = useComponent();

  return (
    <div className="componente_principal twelve_Life">
      {vida <= 0 ? <Death /> : <QuestionSection12 />}
    </div>
  );
};

export default ContenedorVidas12;
