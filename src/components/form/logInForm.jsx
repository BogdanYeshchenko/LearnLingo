import "./form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TbEyeOff } from "react-icons/tb";
import { logInThunk } from "../../redux/auth/authOperations";

const LogInForm = ({ setIsActiveLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const body = { email, password };

  const dispatch = useDispatch();

  function handleFormEvent(e) {
    const name = e.target.name;
    switch (name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  }

  function heandleSubmitForm(e) {
    e.preventDefault();
    dispatch(logInThunk(body))
      .unwrap()
      .then((result) => {
        if (!result.error) {
          setIsActiveLoginModal(false);
          setEmail("");
          setPassword("");
        }
      });
  }

  return (
    <form onSubmit={heandleSubmitForm} className="LogInFormBox">
      <p className="formTitle">Log In</p>
      <p className="formText">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <div className="inputBox">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email"
          onChange={handleFormEvent}
          value={email}
          // pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          required
        />

        <div className="passwordInputBox">
          <input
            className="form-control"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            onChange={handleFormEvent}
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          ></input>
          <button
            className="showPasswordBtn"
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            <TbEyeOff size="20px" />
          </button>
        </div>
      </div>

      <button className="submitBtn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
