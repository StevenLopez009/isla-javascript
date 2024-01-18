import { useState } from "react";
import "./Cuartel.css";
import Hero from "./Hero";
import InfoHero from "./InfoHero";
import heroImage1 from "../../assets/img/heroe.png";
import heroImage2 from "../../assets/img/hero2.png";

const Cuartel = () => {
  const heroes = [
    {
      img: heroImage1,
      life: 2000,
      damage: 2000,
    },
    {
      img: heroImage2,
      life: 1500,
      damage: 1800,
    },
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const currentHero = heroes[currentHeroIndex];

  const handleVisually = () => {
    setVer(true);
  };

  const handleNextHero = () => {
    setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroes.length);
  };

  const handleBackHero = () => {
    setCurrentHeroIndex(
      (prevIndex) => (prevIndex - 1 + heroes.length) % heroes.length
    );
  };

  const [ver, setVer] = useState(false);

  return (
    <>
      {ver ? (
        <>
          <div className="container-secundario">
            <Hero img={currentHero.img} />
            <InfoHero life={currentHero.life} damage={currentHero.damage} />
            <button onClick={handleBackHero}>Back</button>
            <button onClick={handleNextHero}>Next</button>
          </div>
        </>
      ) : (
        <div className="container-principal">
          <h2>Cuartel</h2>
          <button className="btn-play" onClick={handleVisually}></button>
        </div>
      )}
    </>
  );
};

export default Cuartel;
