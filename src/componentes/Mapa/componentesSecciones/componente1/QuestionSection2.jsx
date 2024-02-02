import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionTwo } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent2 from "./QuestionComponent1/QuestionComponent2";

const QuestionSection2 = () => {
  const { data2 } = useQuestionTwo();

  return (
    <>
      {data2.length !== 0 && (
        <QuestionComponent2 data={data2} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection2;
