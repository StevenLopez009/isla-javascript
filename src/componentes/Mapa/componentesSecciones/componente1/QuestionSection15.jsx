import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionFifteen } from "../../../../context/ContextSections/ContextOne";

import QuestionComponent15 from "./QuestionComponent1/QuestionComponent15";

const QuestionSection15 = ({ decrement }) => {
  const { data15 } = useQuestionFifteen();

  return (
    <>
      {data15.length !== 0 && (
        <QuestionComponent15 data={data15} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection15;
