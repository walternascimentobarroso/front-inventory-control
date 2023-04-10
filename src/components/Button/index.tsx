export default ({
  typeOf = "button",
  children,
  onClick,
  customClass = "",
}: any) => {
  return (
    <button
      className={`custom--btn-primary ${customClass}`}
      type={typeOf}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
