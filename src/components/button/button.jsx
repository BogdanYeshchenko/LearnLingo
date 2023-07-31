import "./button.css";

const Button = ({ isActive = true, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: isActive ? "var(--accent-color)" : "#EBD8FF",
      }}
      className="meinButtonBox"
    >
      {text}
    </button>
  );
};

export default Button;
