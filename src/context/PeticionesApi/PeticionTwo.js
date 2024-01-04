const urlQuestion = "http://localhost:1337/api/secciontwos";
export const getQuestionsTwo = () => {
  return fetch(urlQuestion)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no pudo completarse con éxito");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const urlQuestionThree = "http://localhost:1337/api/seccion-threes";
export const getQuestionsThree = () => {
  return fetch(urlQuestionThree)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no pudo completarse con éxito");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
