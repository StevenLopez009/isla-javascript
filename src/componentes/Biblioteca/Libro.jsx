import "./Biblioteca.css";

const Libro = ({ url, titulo, openModal, index }) => {
  return (
    <div className="card">
      <img src={url} alt="" />
      <h4>{titulo}</h4>
      <button className="button one two" onClick={() => openModal(index)}>
        Leer
      </button>
    </div>
  );
};

export default Libro;
