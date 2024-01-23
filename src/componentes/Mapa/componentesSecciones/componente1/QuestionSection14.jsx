import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionFourteen } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent14 from "./QuestionComponent1/QuestionComponent14";

const QuestionSection14 = ({ decrement }) => {
  const { data14 } = useQuestionFourteen();

  return (
    <>
      {data14.length !== 0 && (
        <QuestionComponent14 data={data14} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection14;
