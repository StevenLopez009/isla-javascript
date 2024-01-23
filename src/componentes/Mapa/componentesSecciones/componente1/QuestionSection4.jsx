import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionFour } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent4 from "./QuestionComponent1/QuestionComponent4";

const QuestionSection4 = ({ decrement }) => {
  const { data4 } = useQuestionFour();

  return (
    <>
      {data4.length !== 0 && (
        <QuestionComponent4 data={data4} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection4;
