import React, { useState, useContext } from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import imagetodo from "../../../public/imagetodo-removebg-preview.png";
import AlertContext from "../../utils/alert.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index.js";
// import "./signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { setAlert } = useContext(AlertContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const showAlert = (type, message) => {
  //   setAlert({
  //     text: message,
  //     type,
  //   });
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1000/login",
        formData,
      );

      console.log(response.data);

      // pastikan data ada
      const userId = response.data.user.id;

      if (!userId) {
        throw new Error("User ID tidak ditemukan");
      }

      // simpan session
      sessionStorage.setItem("id", userId);

      // redux auth
      dispatch(authActions.login());

      // redirect
      navigate("/todo");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Login gagal, cek email/password");
    }
  };
  return (
    <>
      <Navbar />
      <div className="signin">
        <div className="signin-container">
          <h1 className="signin-title fs-1">Sign In</h1>

          <img className="imagetodo-signup" alt="todo" src={imagetodo} />

          <div className="form">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column w-00 p-5"
            >
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button className="btn btn-primary mt-3">Sign In</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signin;
