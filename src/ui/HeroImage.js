import Image from "../imgs/car-img-hero.png";

const HeroImage = () => {
  return (
    <div className="hero-image__container">
      <img className="hero-image" src={Image} alt="Car"></img>
    </div>
  );
};

export default HeroImage;
