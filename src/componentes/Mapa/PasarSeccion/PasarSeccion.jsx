import { Link } from "react-router-dom";
import { useQuestion } from "../../../context/ContextSections/ContextOne";
import { useEffect } from "react";

const PasarSeccion = () => {
  const { setVisible, visible } = useQuestion();

  const desbloquearSeccion = () => {
    setVisible(true);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("visible");
    if (storedData) {
      setVisible(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visible", JSON.stringify(visible));
  }, [visible]);

  return (
    <div>
      <h2>Has terminado la sección 1</h2>
      <Link to="/Home" onClick={desbloquearSeccion}>
        Pasar a la siguiente Seccion 2
      </Link>
    </div>
  );
};

export default PasarSeccion;
