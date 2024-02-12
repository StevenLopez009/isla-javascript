import { useState, useEffect } from "react";
import { useQuestionOne } from "../../../context/ContextSections/ContextOne";

const vidaInicial = 5;

const useComponent = () => {
  const { data1 } = useQuestionOne();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [showCongratulation, setShowCongratulation] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [vida, setVida] = useState(() => {
    const savedVida = localStorage.getItem("vida");
    return savedVida ? parseInt(savedVida, 10) : vidaInicial;
  });

  useEffect(() => {
    const resetVida = () => {
      setVida(vidaInicial);
      localStorage.setItem("vida", vidaInicial.toString());
    };
    const timeoutId = setTimeout(resetVida, 2 * 60 * 1000);
    return () => clearTimeout(timeoutId);
  }, [setVida]);

  const decrementLife = () => {
    setVida((prevVida) => prevVida - 1);
  };

  const handleCorrectionClick = () => {
    setShowCorrection(true);
    decrementLife();
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

  useEffect(() => {
    localStorage.setItem("vida", vida.toString());
  }, [vida]);

  return {
    vidaInicial,
    vida,
    setVida,
    currentQuestion,
    showQuestion,
    showCorrection,
    showCongratulation,
    reachedEnd,
    validateResponse,
    handleCorrectionClick,
    handleContinueClick,
  };
};

export default useComponent;
