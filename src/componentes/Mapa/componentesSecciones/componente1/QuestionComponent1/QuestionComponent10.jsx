import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demon10 from "../../../../../assets/img/demon10.gif";
import codigo1 from "../../../../../assets/img/codigo1.jpg";
import { useState } from "react";
import "./QuestionComponent1.css";
import useComponent from "../../../hooks/useComponent";

const QuestionComponent10 = ({ data, PasarSeccion }) => {
  const {
    currentQuestion,
    showQuestion,
    showCorrection,
    showCongratulation,
    reachedEnd,
    validateResponse,
    handleContinueClick,
    decrementLife,
  } = useComponent();
  const [last, setLast] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [final, setFinal] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "//") {
      setFinal(true);
    } else {
      return;
    }
  };

  return (
    <>
      {!showQuestion && (
        <div className="clase1">
          <div className="progreso"></div>
          <div className="clase2 clase-colors10">
            <img
              src={data[currentQuestion].attributes.protect}
              alt="protector uno"
            />
            <p className="enunciado">
              {data[currentQuestion].attributes.enunciado}
            </p>
          </div>
          <button
            className="clase3 clase10-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 1)
            }
          >
            {data[currentQuestion].attributes.opcion1}
          </button>
          <button
            className="clase3 clase10-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 2)
            }
          >
            {data[currentQuestion].attributes.opcion2}
          </button>
          <button
            className="clase3 clase10-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 3)
            }
          >
            {data[currentQuestion].attributes.opcion3}
          </button>
          <button
            className="clase3 clase10-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 4)
            }
          >
            {data[currentQuestion].attributes.opcion4}
          </button>
        </div>
      )}

      {showCorrection && (
        <div className="container-correction">
          <img src={correctionImage} alt="" />
          <p>{data[currentQuestion].attributes.informacion}</p>
          <img
            className="info-correction"
            src={[data[currentQuestion].attributes.imgCorrection]}
            alt=""
          />
          <Link>
            <button className="btnPlay" onClick={handleContinueClick}></button>
          </Link>
        </div>
      )}
      {showCongratulation && (
        <div className="congratulation">
          <img src={victoryImage} alt="" />
          <div>
            <p>Felicidades has respondido bien</p>
          </div>
          <Link>
            <button className="btnPlay" onClick={handleContinueClick}></button>
          </Link>
        </div>
      )}

      {reachedEnd && (
        <div className="demon">
          <img src={demon10} alt="" />
          {!last && (
            <div className="demon_info">
              <p>
                Soy Nokthor, protector del pantano de los errores, la
                información que tengo vale tus vidas o la solución de mi código.
                A cambio, te dire que tu reina fue llevada al desierto del
                almacenamiento.
              </p>
              <button
                className="btnPlay"
                onClick={() => setLast(true)}
              ></button>
            </div>
          )}
          {last && (
            <>
              <div className="contenedor_centrado">
                <div className="demon_codigo">
                  <p>Necesito comentar el console.log que me faltaria</p>
                  <img src={codigo1} alt="" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="btnPlay"
                  onClick={handleButtonClick}
                ></button>
              </div>
            </>
          )}
          {final && <PasarSeccion />}
        </div>
      )}
    </>
  );
};

export default QuestionComponent10;
