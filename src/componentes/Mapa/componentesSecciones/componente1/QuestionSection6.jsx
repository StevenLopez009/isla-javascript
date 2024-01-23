import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionSix } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent6 from "./QuestionComponent1/QuestionComponent6";

const QuestionSection6 = ({ decrement }) => {
  const { data6 } = useQuestionSix();

  return (
    <>
      {data6.length !== 0 && (
        <QuestionComponent6 data={data6} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection6;
