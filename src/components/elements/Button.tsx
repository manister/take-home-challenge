interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

//this component creates a styled button that takes all the usual props of <button>

const Button = (props: ButtonProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={`
        border-2 bg-green-700 border-green-700 py-1 px-3 text-white uppercase tracking-wide
        hover:text-green-700 hover:bg-white
        ${className}
      `}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
