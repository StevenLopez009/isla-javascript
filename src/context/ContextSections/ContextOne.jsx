import { createContext, useContext, useState } from "react";
import { getQuestions } from "../PeticionesApi/PeticionOne";

const questionContext = createContext();

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

export const useQuestion = () => {
  const context = useContext(questionContext);
  if (context === undefined) {
    throw new Error("Error undefined del context");
  }
  return context;
};
export { QuestionProvider };
