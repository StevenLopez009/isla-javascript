import { useState } from "react";
import "./Cuartel.css";
import Hero from "./Hero";
import InfoHero from "./InfoHero";
import heroImage1 from "../../assets/img/heroe.png";
import heroImage2 from "../../assets/img/hero2.png";
import heroImage3 from "../../assets/img/hero3.png";
import heroImage4 from "../../assets/img/hero4.png";

const Cuartel = () => {
  const heroes = [
    {
      img: heroImage1,
      life: 2000,
      damage: 2000,
      info: "Lyra. Armada con una espada que reluce , esta Programadora intrépida desafía la marea de sombras que amenaza con consumir su mundo. Lyra, vestida en una armadura que fusiona las artes misticas de JavaScript",
    },
    {
      img: heroImage2,
      life: 1500,
      damage: 1800,
      info: "Conocido como Arion, este intrépido Programador, marcado por la valentía y la nobleza. Su mirada intensa refleja la determinación forjada en incontables batallas, mientras empuña una espada imbuida con el poder ancestral de JavaScript",
    },
    {
      img: heroImage3,
      life: 4000,
      damage: 3000,
      info: "Aria dotada de habilidades sobresalientes y una determinación inquebrantable, se erige como una Programadora poderosa, recordándonos que incluso en la adversidad más sombría se puede codificar ",
    },
    {
      img: heroImage4,
      life: 5000,
      damage: 6000,
      info: "En la isla JavaScript hay un Programador habil,  Eón. Su espada reluce con la promesa de un nuevo amanecer, desafiando las sombras que amenazan con envolver su mundo en errores Eon es un habil Programador que te guiara ",
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
            <InfoHero
              life={currentHero.life}
              damage={currentHero.damage}
              handleBackHero={handleBackHero}
              handleNextHero={handleNextHero}
              info={currentHero.info}
            />
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
