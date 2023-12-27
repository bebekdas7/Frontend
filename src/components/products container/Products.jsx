import { useNavigate } from "react-router-dom";
import "../../cssfiles/products.css";

const Products = (props) => {
  const navigate = useNavigate();
  const data = props;
  // console.log(data)
  return (
    <div
      className="products"
      onClick={() => {
        navigate("/Buypage", { state: data });
      }}
    >
      <div className="product-header">
        <img src={props.src} alt="" className="og-img" />
        <img src={props.hover} alt="" className="hover-img" />
      </div>
      <div className="product-footer">
        <div className="product-footer-title">
          <h1>{props.title}</h1>
          <div>
            <span>&#8377;{props.price}</span>
            <del>{props.oldprice}</del>
          </div>
        </div>
        <div className="product-footer-value">
          <button
            onClick={() => {
              navigate("/Buypage", { state: data });
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
