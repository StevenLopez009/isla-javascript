import { useState } from "react";
import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import QuestionComponent5 from "./QuestionComponent1/QuestionComponent5";
import { useQuestionFive } from "../../../../context/ContextSections/ContextOne";

const QuestionSection5 = ({ decrement }) => {
  const { data5 } = useQuestionFive();

  console.log(data5);
  return (
    <>
      {data5.length !== 0 && (
        <QuestionComponent5 data={data5} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection5;
