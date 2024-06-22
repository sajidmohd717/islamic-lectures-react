import Nav from "../../assets/Components/navigation/Nav";
import styles from "./Signup.module.css";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Nav />
      <div className={styles["signup-container"]}>
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit} method="post" autoComplete="off">
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
