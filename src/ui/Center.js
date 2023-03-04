const Center = (props) => {
  return (
    <div className={`center ${props.className || ""}`}>{props.children}</div>
  );
};

export default Center;
