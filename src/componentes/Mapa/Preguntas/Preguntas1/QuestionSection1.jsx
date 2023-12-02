import { useState } from "react";
import { useQuestion } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent from "./Secciones/QuestionComponent";
import PasarSeccion from "./CambiarSeccion/PasarSeccion";
import "../App.css";

const QuestionSection1 = ({ decrement }) => {
  const { data1 } = useQuestion();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [showCongratulation, setShowCongratulation] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleCorrectionClick = () => {
    setShowCorrection(true);
    decrement();
    setShowQuestion(true);
  };

  const handleCongratulation = () => {
    setShowQuestion(true);
    setShowCongratulation(true);
    setShowCorrection(false);
  };

  const handleContinueClick = () => {
    if (currentQuestion < data1.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowQuestion(false);
      setShowCongratulation(false);
      setShowCorrection(false);
    } else if (currentQuestion === data1.length - 1) {
      setReachedEnd(true);
      setShowCongratulation(false);
      setShowCorrection(false);
    }
  };

  const validateResponse = (question, opcion) => {
    const { opcion_correcta } = question;
    if (opcion === opcion_correcta) {
      handleCongratulation();
    } else {
      handleCorrectionClick();
    }
  };

  return (
    <>
      {data1.length !== 0 && (
        <QuestionComponent
          data={data1}
          currentQuestion={currentQuestion}
          showQuestion={showQuestion}
          showCorrection={showCorrection}
          showCongratulation={showCongratulation}
          reachedEnd={reachedEnd}
          validateResponse={validateResponse}
          handleContinueClick={handleContinueClick}
          handleCongratulation={handleCongratulation}
          PasarSeccion={PasarSeccion}
        />
      )}
    </>
  );
};

export default QuestionSection1;
