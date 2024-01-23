import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionEight } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent8 from "./QuestionComponent1/QuestionComponent8";

const QuestionSection8 = ({ decrement }) => {
  const { data8 } = useQuestionEight();

  return (
    <>
      {data8.length !== 0 && (
        <QuestionComponent8 data={data8} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection8;
