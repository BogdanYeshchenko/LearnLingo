import "./form.css";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { TbEyeOff } from "react-icons/tb";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   const distpatch = useDispatch();

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
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ email, password });
      }}
      className="LogInFormBox"
    >
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
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
