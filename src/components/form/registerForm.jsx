import "./form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TbEyeOff } from "react-icons/tb";
import { logUpThunk } from "../../redux/auth/authOperations";

const RegisterForm = ({ setIsActiveRegisterModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const body = { login: name, email, password };

  const distpatch = useDispatch();

  function handleFormEvent(e) {
    const name = e.target.name;
    switch (name) {
      case "name":
        setName(e.target.value);
        break;
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
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        distpatch(logUpThunk(body));

        setIsActiveRegisterModal(false);

        console.log({ name, email, password });
      }}
      className="LogInFormBox"
    >
      <p className="formTitle">Registration</p>
      <p className="formText">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <div className="inputBox">
        <input
          className="form-control"
          type="name"
          name="name"
          placeholder="name"
          onChange={handleFormEvent}
          value={name}
          pattern="[A-Za-z ]+"
          required
        ></input>

        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email"
          onChange={handleFormEvent}
          value={email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        ></input>

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
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
