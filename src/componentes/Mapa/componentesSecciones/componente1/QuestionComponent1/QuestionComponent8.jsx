import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demon8 from "../../../../../assets/img/demon8.gif";
import codigo1 from "../../../../../assets/img/codigo1.jpg";
import { useEffect, useState } from "react";
import "./QuestionComponent1.css";
import useComponent from "../../../hooks/useComponent";

const QuestionComponent8 = ({ data, PasarSeccion }) => {
  const {
    currentQuestion,
    showQuestion,
    showCorrection,
    showCongratulation,
    reachedEnd,
    validateResponse,
    handleContinueClick,
    vida,
    handleCorrectionClick,
  } = useComponent();
  const [last, setLast] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [final, setFinal] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showContenedor, setShowContenedor] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "//") {
      setFinal(true);
      setShowContenedor(false);
    } else {
      return;
    }
  };
  useEffect(() => {
    setTimer(30);
  }, [currentQuestion]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, [currentQuestion]);

  useEffect(() => {
    if (timer === 0) {
      handleCorrectionClick();
    }
  }, [timer, PasarSeccion]);

  return (
    <>
      {!showQuestion && (
        <div className="clase1">
          <div className="progreso">
            <p>
              Tiempo: {timer} Vidas: {vida}
            </p>
          </div>
          <div className="clase2 clase-colors8">
            <img
              src={data[currentQuestion].attributes.protect}
              alt="protector uno"
            />
            <p className="enunciado">
              {data[currentQuestion].attributes.enunciado}
            </p>
          </div>
          <button
            className="clase3 clase8-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 1)
            }
          >
            {data[currentQuestion].attributes.opcion1}
          </button>
          <button
            className="clase3 clase8-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 2)
            }
          >
            {data[currentQuestion].attributes.opcion2}
          </button>
          <button
            className="clase3 clase8-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 3)
            }
          >
            {data[currentQuestion].attributes.opcion3}
          </button>
          <button
            className="clase3 clase8-btn"
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
          <img src={demon8} alt="" />
          {!last && (
            <div className="demon_info">
              <p className="dialogo-eight">
                Soy Morgoth, protector de la tierra de la programación orientada
                a objetos, resuelve mi problema a cambio, te daré esta
                información. Tu reina fue llevada por los orcos al portal
                asincrono ya estas a medio camino
              </p>
              <button
                className="btnPlay"
                onClick={() => setLast(true)}
              ></button>
            </div>
          )}
          {last && (
            <>
              {showContenedor && (
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
              )}
            </>
          )}
          {final && <PasarSeccion />}
        </div>
      )}
    </>
  );
};

export default QuestionComponent8;
