const Label = (props) => {
  return (
    <div>
      <label className={props.className} style={props?.style}>
        {props.name}
      </label>
    </div>
  );
};

export default Label;
