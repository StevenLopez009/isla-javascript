const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("La solicitud no pudo completarse con éxito");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const baseUrl = "http://localhost:1337/api/seccion";

export const getQuestionsTwo = () => fetchData(`${baseUrl}twos`);
export const getQuestionsThree = () => fetchData(`${baseUrl}-threes`);
export const getQuestionsFour = () => fetchData(`${baseUrl}-fours`);
export const getQuestionsFive = () => fetchData(`${baseUrl}-fives`);
export const getQuestionsSix = () => fetchData(`${baseUrl}-sixes`);
export const getQuestionsSeven = () => fetchData(`${baseUrl}-sevens`);
export const getQuestionsEight = () => fetchData(`${baseUrl}-eights`);
export const getQuestionsNine = () => fetchData(`${baseUrl}-nines`);
export const getQuestionsTen = () => fetchData(`${baseUrl}-tens`);
export const getQuestionsEleven = () => fetchData(`${baseUrl}-elevens`);
export const getQuestionsTwelve = () => fetchData(`${baseUrl}-twelves`);
export const getQuestionsThirteen = () => fetchData(`${baseUrl}-thirteens`);
export const getQuestionsFourteen = () => fetchData(`${baseUrl}-fourteens`);
export const getQuestionsFifteen = () => fetchData(`${baseUrl}-fitteens`);
export const getQuestionsSixteen = () => fetchData(`${baseUrl}-sixteens`);
