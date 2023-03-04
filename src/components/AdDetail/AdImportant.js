import Container from "../../ui/Container";
import Road from "../../imgs/road.png";
import Calendar from "../../imgs/calendar.png";
import Engine from "../../imgs/car-engine.png";
import Gear from "../../imgs/gearbox.png";
import Gauge from "../../imgs/gauge.png";
import Gas from "../../imgs/gas-station.png";

const AdImportant = ({ data }) => {
  return (
    <Container className="margin-top-large-small">
      <div className="important">
        <div className="important__box">
          <div className="important__image-box">
            <img className="important__image" src={Road} alt="Road"></img>
          </div>
          <div className="important__info__box">
            <p className="important__info__title">Milage</p>
            <p className="important__info__text">{data.milage}km</p>
          </div>
        </div>
        <div className="important__box">
          <div className="important__image-box">
            <img className="important__image" src={Gas} alt="Road"></img>
          </div>
          <div className="important__info__box">
            <p className="important__info__title">Fuel</p>
            <p className="important__info__text">{data.fuel}</p>
          </div>
        </div>
        <div className="important__box">
          <div className="important__image-box">
            <img className="important__image" src={Gear} alt="Road"></img>
          </div>
          <div className="important__info__box">
            <p className="important__info__title">Gearbox</p>
            <p className="important__info__text">{data.gear}</p>
          </div>
        </div>
        <div className="important__box">
          <div className="important__image-box">
            <img className="important__image" src={Calendar} alt="Road"></img>
          </div>
          <div className="important__info__box">
            <p className="important__info__title">Year</p>
            <p className="important__info__text">{data.year}</p>
          </div>
        </div>
        <div className="important__box">
          <div className="important__image-box">
            <img className="important__image" src={Gauge} alt="Road"></img>
          </div>
          <div className="important__info__box">
            <p className="important__info__title">Power</p>
            <p className="important__info__text">{data.power}kW</p>
          </div>
        </div>
        <div className="important__box">
          <div className="important__image-box">
            <img className="important__image" src={Engine} alt="Road"></img>
          </div>
          <div className="important__info__box">
            <p className="important__info__title">Cubic</p>
            <p className="important__info__text">{data.volume}ccm</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdImportant;
