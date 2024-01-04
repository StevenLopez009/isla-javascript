import { createContext, useContext, useState } from "react";
import { getQuestions } from "../PeticionesApi/PeticionOne";
import { getQuestionsTwo } from "../PeticionesApi/PeticionTwo";

// Contexto para la primera petición
const questionContext = createContext();

// Proveedor para la primera petición
const QuestionProvider = ({ children }) => {
  const [data1, setData1] = useState([]);

  const fetchOne = async () => {
    try {
      const { data } = await getQuestions();
      setData1([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data1, fetchOne };

  return (
    <questionContext.Provider value={valor}>
      {children}
    </questionContext.Provider>
  );
};

// Hook personalizado para la primera petición
export const useQuestion = () => {
  const context = useContext(questionContext);
  if (context === undefined) {
    throw new Error("Error undefined del context");
  }
  return context;
};

// Contexto para la segunda petición
const questionContextTwo = createContext();

// Proveedor para la segunda petición
const QuestionProviderTwo = ({ children }) => {
  const [data2, setData2] = useState([]);

  const fetchTwo = async () => {
    try {
      const { data } = await getQuestionsTwo();
      setData2([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data2, fetchTwo };

  return (
    <questionContextTwo.Provider value={valor}>
      {children}
    </questionContextTwo.Provider>
  );
};

// Hook personalizado para la segunda petición
export const useQuestionTwo = () => {
  const context = useContext(questionContextTwo);
  if (context === undefined) {
    throw new Error("Error en el segundo Context");
  }
  return context;
};

export { QuestionProvider, QuestionProviderTwo };
