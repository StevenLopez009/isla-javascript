import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionSeven } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent7 from "./QuestionComponent1/QuestionComponent7";

const QuestionSection7 = ({ decrement }) => {
  const { data7 } = useQuestionSeven();

  return (
    <>
      {data7.length !== 0 && (
        <QuestionComponent7 data={data7} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection7;
