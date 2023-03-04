const Container = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`container ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
