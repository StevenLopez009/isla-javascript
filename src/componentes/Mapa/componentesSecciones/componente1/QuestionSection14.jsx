import { useState } from "react";
import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionFourteen } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent12 from "./QuestionComponent1/QuestionComponent12";
import QuestionComponent14 from "./QuestionComponent1/QuestionComponent14";

const QuestionSection14 = ({ decrement }) => {
  const { data14 } = useQuestionFourteen();
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
    if (currentQuestion < data14.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowQuestion(false);
      setShowCongratulation(false);
      setShowCorrection(false);
    } else if (currentQuestion === data14.length - 1) {
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

  console.log(data14);
  return (
    <>
      {data14.length !== 0 && (
        <QuestionComponent14
          data={data14}
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

export default QuestionSection14;
