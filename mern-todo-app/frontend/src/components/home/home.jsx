import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import "./home.css";
import imagetodo from "../../../public/imagetodo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "./login";
    navigate(path);
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
            <img className="imagetodo" src={imagetodo} alt="todo" />
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
