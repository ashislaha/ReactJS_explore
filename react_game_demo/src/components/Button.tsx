interface ButtonProps {
  children: string;
  color?: string; // we can use ? to make the property optional
  onClick: () => void;
}

const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
