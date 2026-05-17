import React, { useState } from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import imagetodo from "../../../public/imagetodo-removebg-preview.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1000/register", formData)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="signin-container">
          <h1 className="signin-title fs-1">Sign Up</h1>
          <img className="imagetodo-signup" alt="todo" src={imagetodo} />

          <form onSubmit={handleSubmit} className="d-flex flex-column w-00 p-5">
            <input
              className="p-2 my-3 input-signup"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="p-2 my-3 input-signup"
              type="text"
              name="username"
              placeholder="Enter Your Username"
              value={formData.username}
              onChange={handleChange}
            />

            <input
              className="p-2 my-3 input-signup"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
