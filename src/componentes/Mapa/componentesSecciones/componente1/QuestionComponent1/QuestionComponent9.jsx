import { Link } from "react-router-dom";
import victoryImage from "../../../../../assets/img/victory.gif";
import correctionImage from "../../../../../assets/img/defeat.gif";
import demon9 from "../../../../../assets/img/demon9.gif";
import codigo1 from "../../../../../assets/img/codigo1.jpg";
import { useState } from "react";
import "./QuestionComponent1.css";

const QuestionComponent9 = ({
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
          <img src={demon9} alt="" />
          {!last && (
            <div className="demon_info">
              <p>
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

export default QuestionComponent9;
