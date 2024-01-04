import { createContext, useContext, useState } from "react";

const UnlockContext = createContext();

const UnlockSections = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [visibleSeccion3, setVisibleSeccion3] = useState(true);
  const [visibleSeccion4, setVisibleSeccion4] = useState(true);
  const [visibleSeccion5, setVisibleSeccion5] = useState(true);
  const [visibleSeccion6, setVisibleSeccion6] = useState(true);
  const [visibleSeccion7, setVisibleSeccion7] = useState(true);
  const [visibleSeccion8, setVisibleSeccion8] = useState(true);
  const [visibleSeccion9, setVisibleSeccion9] = useState(true);
  const [visibleSeccion10, setVisibleSeccion10] = useState(true);
  const [visibleSeccion11, setVisibleSeccion11] = useState(true);
  const [visibleSeccion12, setVisibleSeccion12] = useState(true);
  const [visibleSeccion13, setVisibleSeccion13] = useState(true);
  const [visibleSeccion14, setVisibleSeccion14] = useState(true);
  const [visibleSeccion15, setVisibleSeccion15] = useState(true);
  const [visibleSeccion16, setVisibleSeccion16] = useState(true);

  const data = {
    visible,
    setVisible,
    visibleSeccion3,
    setVisibleSeccion3,
    visibleSeccion4,
    setVisibleSeccion4,
    visibleSeccion5,
    setVisibleSeccion5,
    visibleSeccion6,
    setVisibleSeccion6,
    visibleSeccion7,
    setVisibleSeccion7,
    visibleSeccion8,
    setVisibleSeccion8,
    visibleSeccion9,
    setVisibleSeccion9,
    visibleSeccion10,
    setVisibleSeccion10,
    visibleSeccion11,
    setVisibleSeccion11,
    visibleSeccion12,
    setVisibleSeccion12,
    visibleSeccion13,
    setVisibleSeccion13,
    visibleSeccion14,
    setVisibleSeccion14,
    visibleSeccion15,
    setVisibleSeccion15,
    visibleSeccion16,
    setVisibleSeccion16,
  };
  return (
    <UnlockContext.Provider value={data}>{children}</UnlockContext.Provider>
  );
};

export const useUnlock = () => {
  const context = useContext(UnlockContext);
  if (context === undefined) {
    throw new Error("Error undefined del context");
  }
  return context;
};
export { UnlockSections };
export default UnlockContext;
