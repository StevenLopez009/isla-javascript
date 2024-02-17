import "./Biblioteca.css";

const Libro = ({ url, titulo, openModal, index, buttonIndex }) => {
  return (
    <div className="card">
      <img src={url} alt="" />
      <h4>{titulo}</h4>
      <button
        className={`Boton${buttonIndex} button-read`}
        onClick={() => openModal(index)}
      ></button>
    </div>
  );
};

export default Libro;
