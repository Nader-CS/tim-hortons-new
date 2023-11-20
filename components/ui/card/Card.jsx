const Card = ({ children, className, style }) => {
  return (
    <div
      className={` rounded-t-[22px] rounded-b-[22px] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
