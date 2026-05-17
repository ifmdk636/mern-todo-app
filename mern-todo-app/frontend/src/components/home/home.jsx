import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="d-flex home justify-content-center align-items-center">
        <div className="content">
          <div className="title">
            <h1>Organize Your Life, with ToDo's!</h1>
          </div>

          <div className="img">
            <img
              className="imagetodo"
              src="/imagetodo-removebg-preview.png"
              alt="todo"
            />
          </div>
        </div>

        <div className="start_to_do">
          <button className="button_start_to_do" onClick={routeChange}>
            Start To Do!
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
