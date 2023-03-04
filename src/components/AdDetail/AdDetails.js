import Container from "../../ui/Container";
import TwoColGrid from "../../ui/TwoColGrid";

const AdDetails = ({ data }) => {
  return (
    <Container className="margin-top-large-small">
      <TwoColGrid className="gap-mid">
        <div className="details__box--gray">
          <p className="details__title">Car body</p>
          <p className="details__value">{data.body}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">VIN</p>
          <p className="details__value">{data.vin}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Emission class</p>
          <p className="details__value">{data.euro}</p>
        </div>
        <div className="details__box--gray">
          <p className="details__title">Drive</p>
          <p className="details__value">{data.drive}</p>
        </div>
        <div className="details__box--gray">
          <p className="details__title">Door number</p>
          <p className="details__value">{data.door}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Seats number</p>
          <p className="details__value">{data.seats}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Steering wheel</p>
          <p className="details__value">{data.steering}</p>
        </div>
        <div className="details__box--gray">
          <p className="details__title">AC</p>
          <p className="details__value">{data.ac}</p>
        </div>
        <div className="details__box--gray">
          <p className="details__title">Color</p>
          <p className="details__value">{data.color}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Interior material</p>
          <p className="details__value">{data.interiorMaterial}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Interior color</p>
          <p className="details__value">{data.interiorColor}</p>
        </div>
        <div className="details__box--gray">
          <p className="details__title">Registered until</p>
          <p className="details__value">{data.registered}</p>
        </div>
        <div className="details__box--gray">
          <p className="details__title">Damage</p>
          <p className="details__value">{data.damage}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Origin</p>
          <p className="details__value">{data.origin}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Change</p>
          <p className="details__value">{data.change}</p>
        </div>
      </TwoColGrid>
    </Container>
  );
};

export default AdDetails;
