import "./Cuartel.css";
import lifeHero from "../../assets/img/lifehero.png";
import damageimg from "../../assets/img/damage.png";

const InfoHero = ({ life, damage }) => {
  return (
    <div className="container-info">
      <div className="container-info-one img">
        <div>
          <img src={lifeHero} alt="" />
          <p>{life}</p>
        </div>
        <div>
          <img src={damageimg} alt="" />
          <p>{damage}</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          ullam quos ex earum quaerat explicabo consectetur consequuntur alias
          quasi eaque, possimus eligendi facilis nobis pariatur sunt? Numquam
          neque officiis doloribus!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          aspernatur, deserunt illo blanditiis tenetur aliquam repellat fugiat
          libero, eius accusamus ab maxime quidem sunt laudantium, itaque
          repellendus accusantium assumenda possimus!
        </p>
      </div>
    </div>
  );
};

export default InfoHero;
