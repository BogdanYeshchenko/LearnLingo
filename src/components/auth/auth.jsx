import "./auth.css";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Auth = ({ isLogin, name = "User" }) => {
  if (!isLogin) {
    return (
      <div className="authBox">
        <button
          className="logInButton"
          type="button"
          onClick={() => {
            console.log("Log in");
          }}
        >
          <FiLogIn size="20px" color="#F4C550" />
          Log in
        </button>

        <button
          className="registrationButton"
          type="button"
          onClick={() => {
            console.log("Registration");
          }}
        >
          Registration
        </button>
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
