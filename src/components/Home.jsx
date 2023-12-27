import { useDispatch } from "react-redux";
import "../cssfiles/home.css";
import Catalogue from "./Catalogue";
import Limited from "./Limited";
import { setLoginOpen } from "../features/loginSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userid = localStorage.getItem("userId");
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (userid && cookieValue === userid) {
      dispatch(setLoginOpen(true));
    }
  }, []);

  return (
    <>
      <div className="home container-fluid">
        <div className="home-holding">
          <img src="/images/main.jpg" alt="" />
        </div>
        <h1 className="home-holding-text">
          FUTURE
          <br />
          CHAOS
        </h1>
        <br />
        <a
          href="#"
          className="explore-btn btn"
          onClick={() => {
            navigate("/allproducts");
          }}
        >
          EXPLORE
        </a>
      </div>
      <Catalogue />
      <Limited />
    </>
  );
};

export default Home;
