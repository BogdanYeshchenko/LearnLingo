import "./button.css";

const Button = ({ isActive, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: isActive ? "#5CD3A8" : "#EBD8FF",
      }}
      className="meinButtonBox"
    >
      {text}
    </button>
  );
};

export default Button;
