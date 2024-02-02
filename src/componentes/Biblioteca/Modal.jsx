import "./Biblioteca.css";

const WindowModal = ({ closeModal, titulos, infoLibro }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{titulos[selectedLibro]}</h2>
        <p>{infoLibro[selectedLibro]}</p>
      </div>
    </div>
  );
};

export default WindowModal;
