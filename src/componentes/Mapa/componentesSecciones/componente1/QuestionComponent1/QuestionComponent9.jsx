import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demon9 from "../../../../../assets/img/demon9.gif";
import codigo9 from "../../../../../assets/img/codigo9.jpeg";
import { useEffect, useState } from "react";
import "./QuestionComponent1.css";
import useComponent from "../../../hooks/useComponent";

const QuestionComponent9 = ({ data, PasarSeccion }) => {
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
    setVida,
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
    if (inputValue === "catch") {
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
    if (!reachedEnd && !showCorrection) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [reachedEnd, currentQuestion, showCorrection]);

  useEffect(() => {
    if (timer === 0) {
      handleCorrectionClick();
    }
  }, [timer, PasarSeccion]);

  useEffect(() => {
    const savedVida = localStorage.getItem("vida");
    if (savedVida !== null) {
      setVida(parseInt(savedVida));
    }
  }, [setVida]);

  return (
    <>
      {vida > 0 && (
        <>
          {!showQuestion && (
            <div className="clase1">
              <div className="progreso">
                <p>
                  Tiempo: {timer} Vidas: {vida}
                </p>
              </div>
              <div className="clase2 clase-colors9">
                <img
                  src={data[currentQuestion].attributes.protect}
                  alt="protector uno"
                />
                <p className="enunciado">
                  {data[currentQuestion].attributes.enunciado}
                </p>
              </div>
              <button
                className="clase3 clase9-btn"
                onClick={() =>
                  validateResponse(data[currentQuestion].attributes, 1)
                }
              >
                {data[currentQuestion].attributes.opcion1}
              </button>
              <button
                className="clase3 clase9-btn"
                onClick={() =>
                  validateResponse(data[currentQuestion].attributes, 2)
                }
              >
                {data[currentQuestion].attributes.opcion2}
              </button>
              <button
                className="clase3 clase9-btn"
                onClick={() =>
                  validateResponse(data[currentQuestion].attributes, 3)
                }
              >
                {data[currentQuestion].attributes.opcion3}
              </button>
              <button
                className="clase3 clase9-btn"
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
              <img src={correctionImage} alt="" className="gif-defeat" />
              <p>{data[currentQuestion].attributes.informacion}</p>
              <img
                className="info-correction"
                src={[data[currentQuestion].attributes.imgCorrection]}
                alt=""
              />
              <Link>
                <button
                  className="btnPlay"
                  onClick={handleContinueClick}
                ></button>
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
                <button
                  className="btnPlay"
                  onClick={handleContinueClick}
                ></button>
              </Link>
            </div>
          )}

          {reachedEnd && (
            <div className="demon">
              <img src={demon9} alt="" className="demon-gif" />
              {!last && (
                <div className="demon_info">
                  <p className="dialogo dialogo-nine">
                    Soy Xólotl, guardiana del asincronismo espero que tengas
                    suficientes vidas para mi, tu reina la llevaron los orcos
                    navegando hacia los errores de JavaScript
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
                        <p className="dialogo-nine-last">
                          Con cual metodo atrapo el error de la promesa
                        </p>
                        <img src={codigo9} alt="" />
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
          {vida <= 0 && (
            <div className="vida-cero">
              <h2>¡Tus vidas se han agotado!</h2>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default QuestionComponent9;
