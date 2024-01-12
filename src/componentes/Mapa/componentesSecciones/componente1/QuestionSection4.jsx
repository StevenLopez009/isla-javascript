import { useState } from "react";
import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionFour } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent4 from "./QuestionComponent1/QuestionComponent4";

const QuestionSection4 = ({ decrement }) => {
  const { data4 } = useQuestionFour();
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
    if (currentQuestion < data4.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowQuestion(false);
      setShowCongratulation(false);
      setShowCorrection(false);
    } else if (currentQuestion === data4.length - 1) {
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
      {data4.length !== 0 && (
        <QuestionComponent4
          data={data4}
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

export default QuestionSection4;
