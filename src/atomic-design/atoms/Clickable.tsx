const Clickable = ({ style, children, ...props }: any) => {
  return (
    <div {...props} style={{ cursor: "pointer", ...style }}>
      {children}
    </div>
  );
};

export default Clickable;
