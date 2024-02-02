import PasarSeccion from "../../PasarSeccion/PasarSeccion";
import { useQuestionThree } from "../../../../context/ContextSections/ContextOne";
import QuestionComponent3 from "./QuestionComponent1/QuestionComponent3";

const QuestionSection3 = () => {
  const { data3 } = useQuestionThree();

  return (
    <>
      {data3.length !== 0 && (
        <QuestionComponent3 data={data3} PasarSeccion={PasarSeccion} />
      )}
    </>
  );
};

export default QuestionSection3;
