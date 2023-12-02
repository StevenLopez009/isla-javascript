import { createContext, useContext, useState } from "react";

const UnlockContext = createContext();

const UnlockSections = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [visibleSeccion3, setVisibleSeccion3] = useState(false);
  const [visibleSeccion4, setVisibleSeccion4] = useState(false);
  const [visibleSeccion5, setVisibleSeccion5] = useState(false);
  const [visibleSeccion6, setVisibleSeccion6] = useState(false);
  const [visibleSeccion7, setVisibleSeccion7] = useState(false);
  const [visibleSeccion8, setVisibleSeccion8] = useState(false);
  const [visibleSeccion9, setVisibleSeccion9] = useState(false);
  const [visibleSeccion10, setVisibleSeccion10] = useState(false);
  const [visibleSeccion11, setVisibleSeccion11] = useState(false);
  const [visibleSeccion12, setVisibleSeccion12] = useState(false);
  const [visibleSeccion13, setVisibleSeccion13] = useState(false);
  const [visibleSeccion14, setVisibleSeccion14] = useState(false);
  const [visibleSeccion15, setVisibleSeccion15] = useState(false);
  const [visibleSeccion16, setVisibleSeccion16] = useState(false);

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
