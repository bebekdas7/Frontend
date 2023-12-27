import { useEffect, useState } from "react";
import Products from "../../components/products container/Products";
import "../../cssfiles/graphics-printed.css";
import axios from "axios";

const Graphics_Printed = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8400/graphic-list");
        setData(response.data.cloth);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="graphics container">
      <h1 className="graphics-heading">Oversized T-Shirts</h1>
      <div className="graphics-products">
        {data.length > 0 ? (
          data.map((item, i) => (
            <Products
              key={i}
              cloth_id={item._id}
              src={"http://localhost:8400/image/" + item.images[0].id}
              hover={"http://localhost:8400/image/" + item.images[1].id}
              hover2={"http://localhost:8400/image/" + item.images[2].id}
              title={item.cloth_name}
              price={item.discounted_price}
              oldprice={item.original_price}
              type={item.cloth_type}
              material={item.cloth_material}
              origins={item.production_country}
              color={item.cloth_color}
              brand={item.brand_name}
            />
          ))
        ) : (
          <h1>Sorry, no items available.</h1>
        )}
      </div>
    </div>
  );
};

export default Graphics_Printed;
