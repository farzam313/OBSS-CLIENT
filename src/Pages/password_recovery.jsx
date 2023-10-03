import React, { Component } from "react";
import "./password.css";
import "./rpass.css";

export class Password_recovery extends Component {
  render() {
    return (
      <div className="auth-form-container-resetpassword">
        <h3>Password Recovery</h3>
        <label htmlFor="email">Enter your Registered Email</label>
        <input
          type="email"
          id="email"
          required
          placeholder="Enter your Email..."
        />
        <label htmlFor="email">Enter your Registered Mobile Number</label>
        <input
          type="number"
          id="phone"
          required
          placeholder="Mobile number..."
        />
        <button type="submit" id="submit">
          {" "}
          Get OTP
        </button>

        <div>
          <button
            className="link-btn"
            onClick={() => (window.location.href = "/")}
          >
            Back to login
          </button>
        </div>
      </div>
    );
  }
}

export default Password_recovery;
