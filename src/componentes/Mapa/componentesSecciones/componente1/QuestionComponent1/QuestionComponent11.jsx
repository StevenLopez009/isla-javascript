import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demon11 from "../../../../../assets/img/demon11.gif";
import codigo11 from "../../../../../assets/img/codigo11.jpeg";
import { useEffect, useState } from "react";
import "./QuestionComponent1.css";
import useComponent from "../../../hooks/useComponent";
import calavera from "../../../../../assets/img/calavera.png";
import reloj from "../../../../../assets/img/reloj.png";
import vela from "../../../../../assets/img/deathimg.png";

const QuestionComponent11 = ({ data, PasarSeccion }) => {
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
  const tiempoInicial = 20 * 60; // 20 minutos en segundos
  const [segundos, setSegundos] = useState(tiempoInicial);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "getItem") {
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
              <div className="clase2 clase-colors11">
                <img
                  src={data[currentQuestion].attributes.protect}
                  alt="protector uno"
                />
                <p className="enunciado">
                  {data[currentQuestion].attributes.enunciado}
                </p>
              </div>
              <button
                className="clase3 clase11-btn"
                onClick={() =>
                  validateResponse(data[currentQuestion].attributes, 1)
                }
              >
                {data[currentQuestion].attributes.opcion1}
              </button>
              <button
                className="clase3 clase11-btn"
                onClick={() =>
                  validateResponse(data[currentQuestion].attributes, 2)
                }
              >
                {data[currentQuestion].attributes.opcion2}
              </button>
              <button
                className="clase3 clase11-btn"
                onClick={() =>
                  validateResponse(data[currentQuestion].attributes, 3)
                }
              >
                {data[currentQuestion].attributes.opcion3}
              </button>
              <button
                className="clase3 clase11-btn"
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
              <img src={demon11} alt="" className="demon-gif" />
              {!last && (
                <div className="demon_info">
                  <p className="dialogo dialogo-eleven">
                    Bienvenido, valeroso viajero. Tus pasos en la arena del
                    almacenamiento son evidencia de tu determinación y coraje.
                    tu reina a sido llevada por estas mismas tierras de dunas
                    cambiantes hacia las herrerias de las herramientas
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
                        <p className="dialogo-eleven">
                          Necesito recuperar clave de localstorage que me
                          faltaria
                        </p>
                        <img src={codigo11} alt="" />
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

export default QuestionComponent11;
