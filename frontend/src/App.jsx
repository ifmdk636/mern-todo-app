import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./components/navbar/navbar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/about/about.jsx";
import Home from "./components/home/home.jsx";
import Signup from "./components/signup/signup.jsx";
import Signin from "./components/signin/signin.jsx";
import Footer from "./components/footer/footer.jsx";
import Todo from "./components/todo/todo.jsx";
import { useEffect } from "react";
import { AlertProvider } from "./utils/alert.context.jsx";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
