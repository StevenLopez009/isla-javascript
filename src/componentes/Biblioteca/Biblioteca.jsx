import { useState } from "react";
import "./Biblioteca.css";

const Biblioteca = () => {
  const [start, setStart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <>
      {start ? (
        <div className="contenedor-carrusel">
          <div
            className="carousel-wrapper"
            style={{ transform: `translateX(${-currentIndex * (100 / 3)}%)` }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <div key={item} className="carousel-item">
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
