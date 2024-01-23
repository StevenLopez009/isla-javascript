import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionOne } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent1 from "./QuestionComponent1/QuestionComponent1";

const QuestionSection1 = ({ decrement }) => {
  const { data1 } = useQuestionOne();
  return (
    <>
      {data1.length !== 0 && (
        <QuestionComponent1 data={data1} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection1;
