const TwoColGrid = (props) => {
  return (
    <div className={`two-col-grid ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

export default TwoColGrid;
