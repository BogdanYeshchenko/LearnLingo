import Modal from "../modal/modal";
import "./auth.css";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import LogInForm from "../form/logInForm";
import RegisterForm from "../form/registerForm";

const Auth = ({ isLogin, name = "User" }) => {
  const [isActiveLoginModal, setIsActiveLoginModal] = useState(false);
  const [isActiveRegisterModal, setIsActiveRegisterModal] = useState(false);

  if (!isLogin) {
    return (
      <div className="authBox">
        <button
          className="logInButton"
          type="button"
          onClick={() => {
            setIsActiveLoginModal(true);
          }}
        >
          <FiLogIn size="20px" color="#F4C550" />
          Log in
        </button>

        <button
          className="registrationButton"
          type="button"
          onClick={() => {
            setIsActiveRegisterModal(true);
          }}
        >
          Registration
        </button>
        <Modal active={isActiveLoginModal} setActive={setIsActiveLoginModal}>
          <LogInForm />
        </Modal>
        <Modal
          active={isActiveRegisterModal}
          setActive={setIsActiveRegisterModal}
        >
          <RegisterForm />
        </Modal>
      </div>
    );
  }

  return (
    <div className="authBox">
      <p className="hello">Hello, {name}!</p>
      <button
        className="logInButton"
        type="button"
        onClick={() => {
          console.log("Log out");
        }}
      >
        <FiLogOut size="20px" color="#F4C550" />
        Log out
      </button>
    </div>
  );
};

export default Auth;
