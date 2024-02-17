import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demonTwo from "../../../../../assets/img/demon2.gif";
import codigo2 from "../../../../../assets/img/codigo2.png";
import { useEffect, useState } from "react";
import "./QuestionComponent1.css";
import useComponent from "../../../hooks/useComponent";
import calavera from "../../../../../assets/img/calavera.png";
import reloj from "../../../../../assets/img/reloj.png";
import vela from "../../../../../assets/img/deathimg.png";

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
    setVida,
  } = useComponent();

  const [last, setLast] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [final, setFinal] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showContenedor, setShowContenedor] = useState(true);
  const tiempoInicial = 20 * 60; // 20 minutos en segundos
  const [segundos, setSegundos] = useState(tiempoInicial);

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

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((segundos) => segundos - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  return (
    <>
      {vida > 0 && (
        <>
          {!showQuestion && (
            <div className="clase1">
              <div className="progreso">
                <img src={reloj} alt="" className="reloj" />
                <div className="progreso-div-time">{timer}</div>
                <div className="progreso-div-live"> {vida}</div>
                <img src={calavera} className="calavera" alt="" />
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
              <img src={demonTwo} alt="" className="demon-gif" />
              {!last && (
                <div className="demon_info">
                  <p className="dialogo dialogo-two">
                    Has ayudado a mis demonios en su trabajo , pero si no
                    respondes bien te quedaras en mi cementerio para siempre, La
                    reina Elfa cruzo por este cementerio llevaba a sus subditos
                    hacia las tierras del fuego y las funciones
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
      )}
      {vida <= 0 && (
        <div className="contenedor-death">
          <div className="contenedor-death-mensage">
            <div>
              <img src={vela} alt="" />
            </div>
            <div className="contenedor-tiempo">
              <p>¡Tus vidas se han agotado!</p>
              Deberas esperar: {minutos}:{segundosRestantes < 10 ? "0" : ""}
              {segundosRestantes} para que regrese tus vidas
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionComponent2;
