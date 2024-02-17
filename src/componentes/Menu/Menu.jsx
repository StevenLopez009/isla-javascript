import { Link } from "react-router-dom";
import lifeImage from "../../assets/img/life.png";
import imagenHeroe from "../../assets/img/heroe.png";
import audio from "../../assets/audio/audio.mp3";
import music from "../../assets/audio/music.mp3";
import useSound from "use-sound";
import "./Menu.css";
import { useEffect, useState } from "react";

const Menu = () => {
  const [ver, setVer] = useState(() => {
    const storedValue = localStorage.getItem("ver");
    return storedValue ? JSON.parse(storedValue) : true;
  });
  const [playSound] = useSound(audio);
  const [playMusic, { stop }] = useSound(music, { volume: 0.5 });
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleMusicClick = () => {
    if (!musicPlaying) {
      playMusic();
      setMusicPlaying(true);
    } else {
      stop();
      setMusicPlaying(false);
    }
  };

  const handleContinuar = () => {
    setTimeout(() => {
      setVer(false);
    }, 500);
  };

  useEffect(() => {
    localStorage.setItem("ver", JSON.stringify(ver));
  }, [ver]);

  return (
    <>
      <header className="header">
        <div className="header_perfil"></div>
        <div className="header_info">
          <div className="header_info_vidas">
            <h4>Isla JavaScript</h4>
            <div className="header_Life">
              <h3>5</h3>
              <img src={lifeImage} alt="" />
            </div>
          </div>
          <div className="header_info_nivel">
            <h5>Nivel</h5>
            <progress value="10" max="100"></progress>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="contenedor-botones">
          <button onClick={handleMusicClick} className="boton btn-music">
            <span className="material-symbols-outlined">music_note</span>
          </button>
          <Link to="/Biblioteca">
            <button className="boton btn-biblioteca">BIBLIOTECA</button>
          </Link>
          <Link to="/Cuartel">
            <button className="boton btn-cuartel">CUARTEL</button>
          </Link>
          <Link to="/Mapa">
            <button className="boton btn-mapa">MAPA</button>
          </Link>
          <Link to="/Taberna">
            <button className="boton btn-taberna">TABERNA</button>
          </Link>
        </div>
        <div className={`contenedor-heroe ${ver ? "" : "oculto"}`}>
          <div className="texto-heroe">
            <p>
              Hola jugador <br /> bienvenido, <br /> visita la biblioteca
              <br />
              para aprender visita <br />
              el cuartel para <br />
              desbloquear los personaje <br /> visita la taberna <br /> para
              mirar tus logros y compartirlos con <br /> tus amigos , cuando
              <br />
              estes listo sarpa <br /> a la aventura desde <br /> el mapa
            </p>
            <button onClick={handleContinuar}>Continuar</button>
            <button onClick={playSound}>Escuchar</button>
          </div>
          <img src={imagenHeroe} alt="" />
        </div>
      </main>
      <footer className="footer">
        <Link to="/Biblioteca" className="btn btn_one">
          <div className="btn-text"> BIBLIOTECA</div>
        </Link>
        <Link to="/Cuartel" className="btn btn_two">
          <div className="btn-text">CUARTEL</div>
        </Link>
        <Link to="/Mapa" className="btn btn_three">
          <div className="btn-text">MAPA</div>
        </Link>
        <Link to="/Taberna" className="btn btn_four">
          <div className="btn-text">TABERNA</div>
        </Link>
      </footer>
    </>
  );
};

export default Menu;
