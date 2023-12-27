import "../cssfiles/cart.css";
import "@fortawesome/fontawesome-svg-core";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen, deleteCartItem } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);

  let num = 0;
  cartItems.forEach((item) => {
    num += +item.locationData.price;
  });

  const handleDelete = (index) => {
    dispatch(deleteCartItem(index));
  };
  // const handlePlaceOrder = () => {
  //   navigate("/pay", { state: num });
  //   dispatch(setCartOpen(false));
  // };

  return (
    <>
      <div className="cart">
        <button
          className="xmark"
          onClick={() => {
            dispatch(setCartOpen(false));
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="cross-i" />
        </button>

        {/* cart component render here */}

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-img">
                <img src={item.locationData.src} alt="" />
              </div>
              <div className="cart-size">
                <p>Size</p>
                <h1>{item.activeSize}</h1>
              </div>
              <div className="cart-price">
                <p>Price</p>
                <h2>{item.locationData.price}</h2>
              </div>
              <div className="cart-delete">
                <button onClick={() => handleDelete(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout">
          <div className="checkout-subtotal">
            <h3>Your Subtotal</h3>
            <h4>&#8377;{num}</h4>
          </div>
          <div className="checkout-paynow">
            {cartItems.length > 0 ? (
              <button
                onClick={() => {
                  navigate("/pay", { state: num });
                  dispatch(setCartOpen(false));
                }}
              >
                Place Order
              </button>
            ) : (
              <button disabled>Place Order</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
