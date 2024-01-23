import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionThirteen } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent13 from "./QuestionComponent1/QuestionComponent13";

const QuestionSection13 = ({ decrement }) => {
  const { data13 } = useQuestionThirteen();

  return (
    <>
      {data13.length !== 0 && (
        <QuestionComponent13 data={data13} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection13;
