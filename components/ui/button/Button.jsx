const Button = (props) => {
  return (
    <button
      type={props.type}
      style={props.style}
      className={`bg-[#A82730] w-[177px]  rounded-full my-5 transition-all duration-200  hover:bg-[#831d24] active:bg-[black] ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
      {props.name}
    </button>
  );
};

export default Button;
