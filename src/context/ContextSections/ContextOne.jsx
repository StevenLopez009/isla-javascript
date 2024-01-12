import { createContext, useContext, useState } from "react";
import { getQuestions } from "../PeticionesApi/PeticionOne";
import {
  getQuestionsFour,
  getQuestionsThree,
  getQuestionsTwo,
  getQuestionsFive,
  getQuestionsSix,
  getQuestionsSeven,
  getQuestionsEight,
  getQuestionsNine,
  getQuestionsTen,
  getQuestionsEleven,
  getQuestionsTwelve,
  getQuestionsThirteen,
  getQuestionsFourteen,
  getQuestionsFifteen,
  getQuestionsSixteen,
} from "../PeticionesApi/PeticionTwo";

// Contexto para la primera petición
const questionContext = createContext();

// Proveedor para la primera petición
const QuestionProviderOne = ({ children }) => {
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
export const useQuestionOne = () => {
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

// Contexto para la tercera petición
const questionContextThree = createContext();

// Proveedor para la tercera petición
const QuestionProviderThree = ({ children }) => {
  const [data3, setData3] = useState([]);

  const fetchThree = async () => {
    try {
      const { data } = await getQuestionsThree();
      setData3([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data3, fetchThree };

  return (
    <questionContextThree.Provider value={valor}>
      {children}
    </questionContextThree.Provider>
  );
};

// Hook personalizado para la tercera petición
export const useQuestionThree = () => {
  const context = useContext(questionContextThree);
  if (context === undefined) {
    throw new Error("Error en el tercer Context");
  }
  return context;
};

// Contexto para la cuarta petición
const questionContextFour = createContext();

// Proveedor para la cuarta petición
const QuestionProviderFour = ({ children }) => {
  const [data4, setData4] = useState([]);

  const fetchFour = async () => {
    try {
      const { data } = await getQuestionsFour();
      setData4([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data4, fetchFour };

  return (
    <questionContextFour.Provider value={valor}>
      {children}
    </questionContextFour.Provider>
  );
};

// Hook personalizado para la cuarta petición
export const useQuestionFour = () => {
  const context = useContext(questionContextFour);
  if (context === undefined) {
    throw new Error("Error en el tercer Context");
  }
  return context;
};

// Contexto para la quinta petición
const questionContextFive = createContext();

// Proveedor para la quinta petición
const QuestionProviderFive = ({ children }) => {
  const [data5, setData5] = useState([]);

  const fetchFive = async () => {
    try {
      const { data } = await getQuestionsFive();
      setData5([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data5, fetchFive };

  return (
    <questionContextFive.Provider value={valor}>
      {children}
    </questionContextFive.Provider>
  );
};

// Hook personalizado para la quinta petición
export const useQuestionFive = () => {
  const context = useContext(questionContextFive);
  if (context === undefined) {
    throw new Error("Error en el quinto Context");
  }
  return context;
};

// Contexto para la sexta petición
const questionContextSix = createContext();

// Proveedor para la sexta petición
const QuestionProviderSix = ({ children }) => {
  const [data6, setData6] = useState([]);

  const fetchSix = async () => {
    try {
      const { data } = await getQuestionsSix();
      setData6([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data6, fetchSix };

  return (
    <questionContextSix.Provider value={valor}>
      {children}
    </questionContextSix.Provider>
  );
};

// Hook personalizado para la sexta petición
export const useQuestionSix = () => {
  const context = useContext(questionContextSix);
  if (context === undefined) {
    throw new Error("Error en el quinto Context");
  }
  return context;
};

// Contexto para la septima petición
const questionContextSeven = createContext();

// Proveedor para la sexta petición
const QuestionProviderSeven = ({ children }) => {
  const [data7, setData7] = useState([]);

  const fetchSeven = async () => {
    try {
      const { data } = await getQuestionsSeven();
      setData7([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data7, fetchSeven };

  return (
    <questionContextSeven.Provider value={valor}>
      {children}
    </questionContextSeven.Provider>
  );
};

// Hook personalizado para la septima petición
export const useQuestionSeven = () => {
  const context = useContext(questionContextSeven);
  if (context === undefined) {
    throw new Error("Error en el septimo Context");
  }
  return context;
};

// Contexto para la octava petición
const questionContextEight = createContext();

// Proveedor para la octava petición
const QuestionProviderEight = ({ children }) => {
  const [data8, setData8] = useState([]);

  const fetchEight = async () => {
    try {
      const { data } = await getQuestionsEight();
      setData8([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data8, fetchEight };

  return (
    <questionContextEight.Provider value={valor}>
      {children}
    </questionContextEight.Provider>
  );
};

// Hook personalizado para la octava petición
export const useQuestionEight = () => {
  const context = useContext(questionContextEight);
  if (context === undefined) {
    throw new Error("Error en el octavo hook");
  }
  return context;
};

// Contexto para la novena petición
const questionContextNine = createContext();

// Proveedor para la novena petición
const QuestionProviderNine = ({ children }) => {
  const [data9, setData9] = useState([]);

  const fetchNine = async () => {
    try {
      const { data } = await getQuestionsNine();
      setData9([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data9, fetchNine };

  return (
    <questionContextNine.Provider value={valor}>
      {children}
    </questionContextNine.Provider>
  );
};

// Hook personalizado para la novena petición
export const useQuestionNine = () => {
  const context = useContext(questionContextNine);
  if (context === undefined) {
    throw new Error("Error en el noveno hook");
  }
  return context;
};

// Contexto para la decima petición
const questionContextTen = createContext();

// Proveedor para la decima petición
const QuestionProviderTen = ({ children }) => {
  const [data10, setData10] = useState([]);

  const fetchTen = async () => {
    try {
      const { data } = await getQuestionsTen();
      setData10([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data10, fetchTen };

  return (
    <questionContextTen.Provider value={valor}>
      {children}
    </questionContextTen.Provider>
  );
};

// Hook personalizado para la decima petición
export const useQuestionTen = () => {
  const context = useContext(questionContextTen);
  if (context === undefined) {
    throw new Error("Error en el decimo hook");
  }
  return context;
};

// Contexto para la 11 petición
const questionContextEleven = createContext();

// Proveedor para la 11 petición
const QuestionProviderEleven = ({ children }) => {
  const [data11, setData11] = useState([]);

  const fetchEleven = async () => {
    try {
      const { data } = await getQuestionsEleven();
      setData11([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data11, fetchEleven };

  return (
    <questionContextEleven.Provider value={valor}>
      {children}
    </questionContextEleven.Provider>
  );
};

// Hook personalizado para la 11 petición
export const useQuestionEleven = () => {
  const context = useContext(questionContextEleven);
  if (context === undefined) {
    throw new Error("Error en el decimo hook");
  }
  return context;
};

// Contexto para la 12 petición
const questionContextTwelve = createContext();

// Proveedor para la 12 petición
const QuestionProviderTwelve = ({ children }) => {
  const [data12, setData12] = useState([]);

  const fetchTwelve = async () => {
    try {
      const { data } = await getQuestionsTwelve();
      setData12([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data12, fetchTwelve };

  return (
    <questionContextTwelve.Provider value={valor}>
      {children}
    </questionContextTwelve.Provider>
  );
};

// Hook personalizado para la 12 petición
export const useQuestionTwelve = () => {
  const context = useContext(questionContextTwelve);
  if (context === undefined) {
    throw new Error("Error en el decimo hook");
  }
  return context;
};

// Contexto para la 13 petición
const questionContextThirteen = createContext();

// Proveedor para la 13 petición
const QuestionProviderThirteen = ({ children }) => {
  const [data13, setData13] = useState([]);

  const fetchThirteen = async () => {
    try {
      const { data } = await getQuestionsThirteen();
      setData13([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data13, fetchThirteen };

  return (
    <questionContextThirteen.Provider value={valor}>
      {children}
    </questionContextThirteen.Provider>
  );
};

// Hook personalizado para la 12 petición
export const useQuestionThirteen = () => {
  const context = useContext(questionContextThirteen);
  if (context === undefined) {
    throw new Error("Error en el decimo hook");
  }
  return context;
};

// Contexto para la 14 petición
const questionContextFourteen = createContext();

// Proveedor para la 14 petición
const QuestionProviderFourteen = ({ children }) => {
  const [data14, setData14] = useState([]);

  const fetchFourteen = async () => {
    try {
      const { data } = await getQuestionsFourteen();
      setData14([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data14, fetchFourteen };

  return (
    <questionContextFourteen.Provider value={valor}>
      {children}
    </questionContextFourteen.Provider>
  );
};

// Hook personalizado para la 14 petición
export const useQuestionFourteen = () => {
  const context = useContext(questionContextFourteen);
  if (context === undefined) {
    throw new Error("Error en el decimo hook");
  }
  return context;
};

// Contexto para la 15 petición
const questionContextFifteen = createContext();

// Proveedor para la 15 petición
const QuestionProviderFifteen = ({ children }) => {
  const [data15, setData15] = useState([]);

  const fetchFifteen = async () => {
    try {
      const { data } = await getQuestionsFifteen();
      setData15([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data15, fetchFifteen };

  return (
    <questionContextFifteen.Provider value={valor}>
      {children}
    </questionContextFifteen.Provider>
  );
};

// Hook personalizado para la 12 petición
export const useQuestionFifteen = () => {
  const context = useContext(questionContextFifteen);
  if (context === undefined) {
    throw new Error("Error en el 15 hook");
  }
  return context;
};

// Contexto para la 16 petición
const questionContextSixteen = createContext();

// Proveedor para la 16 petición
const QuestionProviderSixteen = ({ children }) => {
  const [data16, setData16] = useState([]);

  const fetchSixteen = async () => {
    try {
      const { data } = await getQuestionsSixteen();
      setData16([...data]);
    } catch {
      return false;
    }
  };

  const valor = { data16, fetchSixteen };

  return (
    <questionContextSixteen.Provider value={valor}>
      {children}
    </questionContextSixteen.Provider>
  );
};

// Hook personalizado para la 16 petición
export const useQuestionSixteen = () => {
  const context = useContext(questionContextSixteen);
  if (context === undefined) {
    throw new Error("Error en el decimo hook");
  }
  return context;
};
export {
  QuestionProviderOne,
  QuestionProviderTwo,
  QuestionProviderThree,
  QuestionProviderFour,
  QuestionProviderFive,
  QuestionProviderSix,
  QuestionProviderSeven,
  QuestionProviderEight,
  QuestionProviderNine,
  QuestionProviderTen,
  QuestionProviderEleven,
  QuestionProviderTwelve,
  QuestionProviderThirteen,
  QuestionProviderFourteen,
  QuestionProviderFifteen,
  QuestionProviderSixteen,
};
