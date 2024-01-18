import { useState, useEffect } from "react";
import "./Biblioteca.css";

const Biblioteca = () => {
  const [start, setStart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const cambiarEstado = () => {
    setStart(true);
  };

  const handleNext = () => {
    if (currentIndex < 15) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const fetchData = async (item) => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/documentacions/${item}`
      );
      const data = await response.json();
      setModalContent(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    fetchData(item);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setModalContent(null);
  };

  return (
    <>
      {start ? (
        <div className="contenedor-carrusel">
          <div
            className="carousel-wrapper"
            style={{ transform: `translateX(${-currentIndex * (100 / 1)}%)` }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item, index) => (
                <div
                  key={item}
                  className={`carousel-item item-${index + 1}`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <button className="prev" onClick={handlePrev}>
            Prev
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
          {showModal && (
            <div className={`modal modal-${currentIndex}`}>
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                {modalContent ? (
                  <p>{modalContent.data.attributes.text_documentation}</p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="contenedor contenedor-inicial">
          <h2>Biblioteca</h2>
          <button className="btn-play" onClick={cambiarEstado}></button>
        </div>
      )}
    </>
  );
};

export default Biblioteca;
