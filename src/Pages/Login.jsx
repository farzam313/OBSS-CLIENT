import React, { useState } from "react";
import { BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./login.css";
import { Book } from "./Book";

import dashboard from "./Dashboard";

export const Login = (props) => {
  const [Email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        // window.location.href = "/dashboard";
        window.location.href = "/home";

        console.log(responseData);
      } else {
        console.log("Login failed");
        const message = document.getElementById("wrong_password");
        message.textContent = "Wrong Email or Password!";
        console.log(response.body);
        console.log("Error:", responseData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="auth-form-container-login">
      <h2 className="wellcome">Wellcome To the book world!</h2>
      <h3>Login</h3>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="email">Email</label>
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          placeholder="**********"
          id="pass"
        />
        <label
          id="wrong_password"
          style={{ display: "block", color: "red" }}
        ></label>
        <button onClick={handleSubmit} type="submit">
          <strong>Login</strong>
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => (window.location.href = "/home")}
      >
        Register with Us!
      </button>
      <div>
        <button
          className="link-btn"
          onClick={() => (window.location.href = "/password_recovery")}
        >
          Passowrd Forget?
        </button>
      </div>
    </div>
  );
};
