import "./ContenedorVidas.css";
import QuestionSection1 from "../../componentesSecciones/componente1/QuestionSection1";
import Death from "./Death/Death";
import useComponent from "../../hooks/useComponent";

const ContenedorVidas = () => {
  const { vida } = useComponent();
  console.log("Valor de vida:", vida);

  return (
    <div className="componente_principal one_life">
      {vida <= 0 ? <Death /> : <QuestionSection1 />}
    </div>
  );
};

export default ContenedorVidas;
