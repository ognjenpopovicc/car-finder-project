import TwoColGrid from "../../ui/TwoColGrid";
import Container from "../../ui/Container";

const AdLocation = ({ data }) => {
  return (
    <Container className="margin-top-large-small">
      <TwoColGrid className="gap-mid">
        <div className="details__box--gray">
          <p className="details__title">Adress</p>
          <p className="details__value">{data.adress}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">City</p>
          <p className="details__value">{data.city}</p>
        </div>
        <div className="details__box--white">
          <p className="details__title">Phone number</p>
          <p className="details__value">{data.phone}</p>
        </div>
        <div className="details__box--gray">
          <p className="details__title">Name and Surname</p>
          <p className="details__value">{data.name}</p>
        </div>
        <div className="details__box--gray double-field">
          <p className="details__title">E-Mail</p>
          <p className="details__value">{data.email}</p>
        </div>
      </TwoColGrid>
    </Container>
  );
};

export default AdLocation;
