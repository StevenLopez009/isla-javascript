import "./Cuartel.css";
import lifeHero from "../../assets/img/lifehero.png";
import damageimg from "../../assets/img/damage.png";

const InfoHero = ({ life, damage, handleBackHero, handleNextHero, info }) => {
  return (
    <div className="container-info">
      <div className="container-info-one ">
        <div className="info-child">
          <img src={lifeHero} alt="" />
          <p>{life}</p>
        </div>
        <div className="info-child">
          <img src={damageimg} alt="" />
          <p>{damage}</p>
        </div>
      </div>
      <div className="container-info-two">
        <p>{info}</p>
      </div>
      <div className="container-buttons">
        <button onClick={handleBackHero}>Back</button>
        <button onClick={handleNextHero}>Next</button>
      </div>
    </div>
  );
};

export default InfoHero;
