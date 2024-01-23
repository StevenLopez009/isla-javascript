import { useState } from "react";
import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionEleven } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent11 from "./QuestionComponent1/QuestionComponent11";

const QuestionSection11 = ({ decrement }) => {
  const { data11 } = useQuestionEleven();

  return (
    <>
      {data11.length !== 0 && (
        <QuestionComponent11 data={data11} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection11;
