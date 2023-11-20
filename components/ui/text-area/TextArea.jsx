const TextArea = (props) => {
  return (
    <div>
      <textarea
        className={props.className}
        placeholder={
          props.required ? props.placeholder + " *" : props.placeholder
        }
        required={props.required}
        cols={props.cols}
        rows={props.rows}
        style={props?.style}
      />
    </div>
  );
};

export default TextArea;
