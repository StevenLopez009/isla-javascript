import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionTwelve } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent12 from "./QuestionComponent1/QuestionComponent12";

const QuestionSection12 = ({ decrement }) => {
  const { data12 } = useQuestionTwelve();

  return (
    <>
      {data12.length !== 0 && (
        <QuestionComponent12 data={data12} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection12;
