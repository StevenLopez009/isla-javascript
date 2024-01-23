import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionNine } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent9 from "./QuestionComponent1/QuestionComponent9";

const QuestionSection9 = ({ decrement }) => {
  const { data9 } = useQuestionNine();

  return (
    <>
      {data9.length !== 0 && (
        <QuestionComponent9 data={data9} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection9;
