import React, { useState } from "react";
import "./registration.css";
import axios from "axios";
import { useRef } from "react";

export const Register = (props) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    phone_no: "",
    occupation: "",
    organisation: "",
    country: "",
    state_or_city: "",
    street: "",
    flat_no: "",
    zip_code: "",
    p_picture: null,
    password: "",
  });

  const cnfm_password = "";
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // const cnfm_password = e.target.value;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const [picture, setPicture] = useState(null);
  const upload_image = async (e) => {
    setFormData({
      ...formData,
      p_picture: e.target.files[0],
    });
    const img_url = URL.createObjectURL(e.target.files[0]);

    setPicture(img_url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form Data are as following:");
      console.log(formData);
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      await axios.post("http://localhost:5000/users", formDataToSend);
      // const response = alert("You Are registered Successfully!");
      // window.location.href = "/";
    } catch (error) {}
  };

  return (
    <div className="auth-form-container-register" style={{ display: "block" }}>
      <h2>Sign Up</h2>
      <div className="reg_form_container">
        <form
          className="register-form"
          onSubmit={handleSubmit}
          style={{ display: "flex" }}
        >
          <div className="reg1">
            <label htmlFor="fName">First Name</label>
            <input
              value={formData.first_Name}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              id="first_name"
              name="first_name"
            />

            <label htmlFor="lName">Last Name</label>
            <input
              value={formData.last_Name}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              id="last_name"
              name="last_name"
            />

            <label htmlFor="dob">Date of Birth</label>
            <input
              value={formData.dob}
              onChange={handleChange}
              type="date"
              placeholder="Date of birth"
              id="dob"
              name="dob"
            />

            <label htmlFor="email">Email</label>
            <input
              value={formData.Email}
              onChange={handleChange}
              type="email"
              placeholder="youremail@gmail.com"
              id="Email"
              name="Email"
            />

            <label htmlFor="password">Password</label>
            <input
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="**********"
              id="password"
              name="password"
            />

            {/* <label htmlFor="cfmpassword">Confirm Password</label>
            <input
              value={cnfm_password}
              onChange={handleChange}
              type="password"
              placeholder="**********"
              id="cfmpassword"
              name="cfmpassword"
            /> */}

            <label htmlFor="phone">Mobile</label>
            <input
              value={formData.phone_no}
              onChange={handleChange}
              type="text"
              placeholder="ex:0823514501"
              id="text"
              name="phone_no"
            />

            <label htmlFor="occupation">Occupation</label>
            <input
              value={formData.occupation}
              onChange={handleChange}
              type="text"
              placeholder="Occupation"
              id="occupation"
              name="occupation"
            />
            <label htmlFor="organisation">Organisation</label>
            <input
              value={formData.organisation}
              onChange={handleChange}
              type="text"
              placeholder="Organisation"
              id="organisation"
              name="organisation"
            />
          </div>
          <div className="reg2">
            <label className="country_lbl" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="country"
              required
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select your country</option>
              <option>Afghanistan</option>
              <option>Azerbaijan</option>
              <option>Armenia</option>
              <option>Algeria</option>
              <option>Astonia</option>
              <option>Austria</option>
              <option>Australia</option>
              <option>Belarus</option>
            </select>

            <label htmlFor="stateOrCity">State/City</label>
            <input
              value={formData.stateOrCity}
              onChange={handleChange}
              type="text"
              placeholder="Ex: Karnataka/Bangalore"
              id="stateOrCity"
              name="state_or_city"
            />

            <label htmlFor="street">Street</label>
            <input
              value={formData.street}
              onChange={handleChange}
              type="text"
              placeholder="Ex: 20 A Main Road..."
              id="street"
              name="street"
            />

            <label htmlFor="flatNo">Flat No/House #</label>
            <input
              value={formData.flat_no}
              onChange={handleChange}
              type="text"
              placeholder="Ex: 505"
              id="flatNo"
              name="flat_no"
            />

            <label htmlFor="zipcode">Zip Code</label>
            <input
              value={formData.zip_code}
              onChange={handleChange}
              type="text"
              placeholder="EX: 570017"
              id="zipcode"
              name="zip_code"
            />
            <div className="profile_div">
              <img className="profile_pic" src={picture}></img>
            </div>

            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              className="profilePicture"
              type="file"
              id="profilePicture"
              name="p_picture"
              accept="image/*"
              required
              onChange={upload_image}
            />

            <button
              className="submit_btn"
              type="submit"
              onChange={handleChange}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <button className="link-btn" onClick={() => (window.location.href = "/")}>
        Already have an account? Log in
      </button>
    </div>
  );
};
