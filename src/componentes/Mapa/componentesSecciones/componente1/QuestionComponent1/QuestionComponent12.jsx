import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demon12 from "../../../../../assets/img/demon12.gif";
import codigo1 from "../../../../../assets/img/codigo1.jpg";
import { useState } from "react";
import "./QuestionComponent1.css";

const QuestionComponent12 = ({
  data,
  currentQuestion,
  showQuestion,
  showCorrection,
  showCongratulation,
  reachedEnd,
  validateResponse,
  handleContinueClick,
  PasarSeccion,
}) => {
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
          <div className="clase2 clase-colors12">
            <img
              src={data[currentQuestion].attributes.protect}
              alt="protector uno"
            />
            <p className="enunciado">
              {data[currentQuestion].attributes.enunciado}
            </p>
          </div>
          <button
            className="clase3 clase12-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 1)
            }
          >
            {data[currentQuestion].attributes.opcion1}
          </button>
          <button
            className="clase3 clase12-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 2)
            }
          >
            {data[currentQuestion].attributes.opcion2}
          </button>
          <button
            className="clase3 clase12-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 3)
            }
          >
            {data[currentQuestion].attributes.opcion3}
          </button>
          <button
            className="clase3 clase12-btn"
            onClick={() =>
              validateResponse(data[currentQuestion].attributes, 4)
            }
          >
            {data[currentQuestion].attributes.opcion4}
          </button>
        </div>
      )}

      {showCorrection && (
        <div className="congratulation">
          <img src={correctionImage} alt="" />
          <div>
            <p>{data[currentQuestion].attributes.informacion}</p>
          </div>
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
          <img src={demon12} alt="" />
          {!last && (
            <div className="demon_info">
              <p>
                Soy Nihilus , primer protector del tesoro de la isla, veo que
                has vencido a mis ayudantes, pero si no solucionas mi codigo
                tomare todas tus vidas
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

export default QuestionComponent12;
