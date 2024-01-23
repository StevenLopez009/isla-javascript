import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionSixteen } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent16 from "./QuestionComponent1/QuestionComponent16";

const QuestionSection16 = ({ decrement }) => {
  const { data16 } = useQuestionSixteen();

  return (
    <>
      {data16.length !== 0 && (
        <QuestionComponent16 data={data16} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection16;
