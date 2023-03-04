import Container from "../../ui/Container";

const AdDescription = ({ data }) => {
  return (
    <Container className="margin-top-large-small">
      <h3 className="description__heading">Description</h3>
      <div className="description__bottom-line"></div>
      <p className="description__para">{data}</p>
    </Container>
  );
};

export default AdDescription;
