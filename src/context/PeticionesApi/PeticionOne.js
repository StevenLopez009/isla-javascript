const urlQuestion = "http://localhost:1337/api/preguntas";
export const getQuestions = () => {
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
