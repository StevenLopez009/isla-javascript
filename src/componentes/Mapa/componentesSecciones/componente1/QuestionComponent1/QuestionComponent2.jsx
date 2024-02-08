import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demonTwo from "../../../../../assets/img/demon2.gif";
import codigo2 from "../../../../../assets/img/codigo2.png";
import { useEffect, useState } from "react";
import "./QuestionComponent1.css";
import useComponent from "../../../hooks/useComponent";

const QuestionComponent2 = ({ data, PasarSeccion }) => {
  const {
    currentQuestion,
    showQuestion,
    showCorrection,
    showCongratulation,
    reachedEnd,
    validateResponse,
    handleCorrectionClick,
    handleContinueClick,
    vida,
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
    if (inputValue === "2,4,6,8,10") {
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
              {" "}
              Tiempo: {timer} Vidas: {vida}
            </p>
          </div>
          <div className="clase2 clase-colors2">
            <img
              src={data[currentQuestion].attributes.protect}
              alt="protector uno"
            />
            <p className="enunciado">
              {data[currentQuestion].attributes.enunciado}
            </p>
          </div>
          <button
            className="clase3 clase2-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 1)
            }
          >
            {data[currentQuestion].attributes.opcion1}
          </button>
          <button
            className="clase3 clase2-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 2)
            }
          >
            {data[currentQuestion].attributes.opcion2}
          </button>
          <button
            className="clase3 clase2-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 3)
            }
          >
            {data[currentQuestion].attributes.opcion3}
          </button>
          <button
            className="clase3 clase2-btn"
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
          <img src={correctionImage} alt="" className="img-calavera" />
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
          <img src={demonTwo} alt="" />
          {!last && (
            <div className="demon_info">
              <p className="dialogo dialogo-two">
                Has ayudado a mis demonios en su trabajo , pero si no respondes
                bien te quedaras en mi cementerio para siempre, La reina Elfa
                cruzo por este cementerio llevaba a sus subditos hacia las tierras del fuego 
                y las funciones
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
                    <p className="dialogo-two-last">
                      ¿Ques se muestra en este console.log?, no olvides las
                      comas
                    </p>
                    <img src={codigo2} alt="" />
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

export default QuestionComponent2;
