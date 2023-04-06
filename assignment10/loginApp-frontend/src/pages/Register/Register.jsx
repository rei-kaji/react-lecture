import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { register } from "../../reducers/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterContainer = styled.div`
  padding: 1rem 2rem;
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    input {
      outline: none;
      border: none;
      height: 2.4rem;
      padding: 0 1rem;
      border-radius: 4px;
      font-size: 1rem;
    }
    button {
      height: 2.4rem;
      margin-top: 1rem;
      border: none;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

const FormController = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (userName && fullName && email && password) {
      dispatch(register({ userName, fullName, email, password }));
      navigate("/login");
    }
  };
  return (
    <RegisterContainer>
      <h1>Register</h1>
      <form>
        <FormController>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(ev) => setUserName(ev.target.value)}
          />
        </FormController>
        <FormController>
          <label htmlFor="fullname">FullName</label>
          <input
            type="text"
            id="fullname"
            placeholder="fullname"
            onChange={(ev) => setFullName(ev.target.value)}
          />
        </FormController>
        <FormController>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </FormController>
        <FormController>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </FormController>

        <button onClick={handleRegister}>Register</button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
