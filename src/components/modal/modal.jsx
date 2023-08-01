import "./modal.css";
import exitBtnSvg from "./exitBtnSvg";
import { useEffect } from "react";

const Modal = ({ active = false, setActive, children }) => {
  useEffect(() => {
    const hendleCloseByEsc = (e) => {
      if (e.code !== "Escape") {
        return;
      }
      setActive(false);
    };

    window.addEventListener("keydown", hendleCloseByEsc);

    return () => {
      window.removeEventListener("keydown", hendleCloseByEsc);
    };
  }, [setActive]);

  return (
    <div
      className={active ? "backdrop active" : "backdrop"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={active ? "modalBox active" : "modalBox"}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="exitBtn"
          onClick={() => {
            setActive(false);
          }}
        >
          {exitBtnSvg}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
