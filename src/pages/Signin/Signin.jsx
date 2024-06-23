import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../../Components/navigation/Nav";
import styles from "./Signin.module.css";

import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(result);
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles["signin-container"]}>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit} method="post" autoComplete="off">
          <div>
            <label htmlFor="email">Email </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="new-email"
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className={styles["sign-up-container"]}>
          <p>Don't have an account? </p>
          <Link to={"/sign-up"}>
            <span className={styles["sign-up-span"]}>Sign up</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signin;
