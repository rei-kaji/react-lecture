import React, { useEffect, useState } from "react";
import "./Register.css";

type event = { target: { value: React.SetStateAction<string> } };

function Register() {
  const [userFullName, setUserFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("Please enter a FullName");
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("Please enter a email");
  const [userPassWord, setUserPassWord] = useState("");
  const [passWordError, setPassWordError] = useState(
    "Please enter a password of at least 8 characters"
  );
  const [userConfirmPassWord, setUserConfirmPassWord] = useState("");
  const [confirmPassWordError, setConfirmPassWordError] = useState(
    "Please enter a confirm password of at least 8 characters"
  );

  const [submitButton, setSubmitButton] = useState(false);
  const [submitError, setSubmitError] = useState("Please fill all input");

  function handleFullNameChange(event: event) {
    setUserFullName(event.target.value);
  }
  function handleEmailChange(event: event) {
    setUserEmail(event.target.value);
  }
  function handlePassWordChange(event: event) {
    setUserPassWord(event.target.value);
  }
  function handleConfirmPassWordChange(event: event) {
    setUserConfirmPassWord(event.target.value);
  }

  function validateEmail(email: string) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }

  function validatePassword(password: string) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }

  function handleFullNameError() {
    console.log(userFullName);
    if (!userFullName) {
      setFullNameError("FullName is required");
    } else {
      setFullNameError("");
    }
  }
  function handleEmailError() {
    if (!userEmail) {
      setEmailError("Email is required");
    } else if (!validateEmail(userEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }
  function handlePassWordError() {
    if (!userPassWord) {
      setPassWordError("PassWord is required");
    } else if (!validatePassword(userPassWord)) {
      setPassWordError("Please enter a valid password");
    } else {
      setPassWordError("");
    }
  }
  function handleConfirmPassWordError() {
    if (!userConfirmPassWord) {
      setConfirmPassWordError("ConfirmPassWord is required");
    } else if (userConfirmPassWord !== userPassWord) {
      setConfirmPassWordError("Please enter a same password");
    } else if (!validatePassword(userConfirmPassWord)) {
      setConfirmPassWordError("Please enter a valid ConfirmPassWord");
    } else {
      setConfirmPassWordError("");
    }
  }

  useEffect(() => {
    if (
      fullNameError == "" &&
      emailError == "" &&
      passWordError == "" &&
      confirmPassWordError == ""
    ) {
      setSubmitButton(true);
      setSubmitError("");
    }
  }, [fullNameError, emailError, passWordError, confirmPassWordError]);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="fullname">FullName</label>
        <input
          type="text"
          id="fullname"
          value={userFullName}
          onChange={handleFullNameChange}
          onBlur={handleFullNameError}
          required
        />
        <span>{fullNameError}</span>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={userEmail}
          onChange={handleEmailChange}
          onBlur={handleEmailError}
          required
        />
        <span>{emailError}</span>
      </div>
      <div className="form-group">
        <label htmlFor="password">PassWord</label>
        <input
          type="password"
          id="password"
          value={userPassWord}
          onChange={handlePassWordChange}
          onBlur={handlePassWordError}
          required
        />
        <span>{passWordError}</span>
      </div>
      <div className="form-group">
        <label htmlFor="confirmpassword">ConfirmPassWord</label>
        <input
          type="password"
          id="confirmpassword"
          value={userConfirmPassWord}
          onChange={handleConfirmPassWordChange}
          onBlur={handleConfirmPassWordError}
          required
        />
        <span>{confirmPassWordError}</span>
      </div>
      <div className="form-group">
        {submitButton ? (
          <button type="submit">Register</button>
        ) : (
          <button type="submit" disabled style={{ backgroundColor: "gray" }}>
            Register
          </button>
        )}
        <span>{submitError}</span>
      </div>
    </form>
  );
}

export default Register;
