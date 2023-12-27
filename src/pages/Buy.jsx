import { useLocation, useNavigate } from "react-router-dom";
import "../cssfiles/buy.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, setCartOpen } from "../features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Buy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);

  let location = useLocation();
  const data = location.state;
  // console.log(data);

  const handleClick = (e) => {
    const size = e.target.innerText;
    setActive(size);
  };

  const openOverlay = () => {
    setOverlayVisible(true);
  };
  const cutOverlay = () => {
    setOverlayVisible(false);
  };

  const handleAddToCart = () => {
    if (active === "") {
      window.alert("Please select a size.");
    } else {
      dispatch(setCartOpen(true));
      dispatch(addToCart({ locationData: location.state, activeSize: active }));
    }
  };
  const handleBuyNow = () => {
    if (active === "") {
      window.alert("Please select a size.");
    } else {
      navigate("/pay", {
        state: JSON.stringify(data),
      });
    }
  };

  const btn = document.getElementsByClassName("size-btn");
  Array.from(btn).forEach((element) => {
    element.addEventListener("click", () => {
      Array.from(btn).forEach((ele) => {
        ele.style.backgroundColor = "";
        ele.style.border = "";
      });

      element.style.backgroundColor = "lightGrey";
      element.style.border = "none";
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {overlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="cut-btn" onClick={cutOverlay}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <img src="/images/sizechart.jpeg" alt="Size chart" />
          </div>
        </div>
      )}
      <div className="buy">
        <div className="img-preview">
          <div className="img-preview-box1">
            <img src={location.state.src} alt="" />
          </div>
          <div className="img-preview-box2">
            <div className="img-preview-inner">
              <img src={location.state.hover} alt="" />
            </div>
            <div className="img-preview-inner">
              <img src={location.state.hover2} alt="" />
            </div>
          </div>
        </div>

        <div className="detail-preview">
          <div className="detail-preview-heading">
            <h3 className="brand">{location.state.brand}</h3>
            <h3 className="cloth-title">{location.state.title}</h3>
            <span>Special Price</span>
          </div>

          <div className="preview-price">
            <h1>&#8377;{location.state.price}</h1>
            <p>
              <del>{location.state.oldprice}</del>
            </p>
            <span>
              {Math.round(
                ((location.state.oldprice - location.state.price) /
                  location.state.oldprice) *
                  100
              )}
              % off
            </span>
          </div>

          <div className="preview-size">
            <span>Size</span>
            <button onClick={handleClick} className="size-btn">
              S
            </button>
            <button onClick={handleClick} className="size-btn">
              M
            </button>
            <button onClick={handleClick} className="size-btn">
              L
            </button>
            <button onClick={handleClick} className="size-btn">
              Xl
            </button>
          </div>
          <button className="size-chart" id="size-chart" onClick={openOverlay}>
            View Size Chart
          </button>

          <div className="preview-button">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>

          <div className="preview-description">
            <div className="description">
              <h1>Description</h1>
              <p className="product-details">PRODUCT DETAILS</p>
              <br />
              <h4>
                <b>Cloth type:</b>
              </h4>
              <p>{location.state.type}</p> <br />
              <h4>
                <b>Material:</b>
              </h4>
              <p>{location.state.material}</p> <br />
              <h4>
                <b>Color:</b>
              </h4>
              <p>{location.state.color}</p> <br />
              <h4>
                <b>Country of production:</b>
              </h4>
              <p>{location.state.origins}</p> <br />
              <h4>
                <b>Wash care:</b>
              </h4>
              <p>
                1) Machine wash Cold with similar Colours.
                <br />
                2)Only non-chlorine.
                <br />
                3) Warm Iron if Needed.
              </p>{" "}
              <br />
            </div>
            <div className="information">
              <h1>Information</h1>

              <h2>
                <b>Shipping</b>
              </h2>
              <p>
              Your order will be shipped within 48 hours from the time since the order is placed!
              </p>
              <h2>
                <b>Sizing</b>
              </h2>
              <p>
                Fits true to size. Do you need size advice? Please refer to our
                size chart.
              </p>
              <h2>
                <b>Return & Exchange</b>
              </h2>
              <p>
                No Return. <br />
                Only Exchange
              </p>
            </div>
          </div>
        </div>
        <div className="chart"></div>
      </div>
    </>
  );
};

export default Buy;
