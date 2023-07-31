import "./conteinerCenter.css";

const ConteinerCenter = ({ children, flexDirection = "column" }) => {
  return (
    <div className="conteinerCenter" style={{ flexDirection }}>
      {children}
    </div>
  );
};

export default ConteinerCenter;
