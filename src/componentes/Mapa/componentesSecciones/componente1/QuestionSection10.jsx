import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import QuestionComponent10 from "./QuestionComponent1/QuestionComponent10";
import { useQuestionTen } from "../../../../context/ContextSections/ContextOne";

const QuestionSection10 = ({ decrement }) => {
  const { data10 } = useQuestionTen();

  return (
    <>
      {data10.length !== 0 && (
        <QuestionComponent10 data={data10} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection10;
