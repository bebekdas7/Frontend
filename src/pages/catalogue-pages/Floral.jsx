import { useEffect, useState } from "react";
import Products from "../../components/products container/Products";
import "../../cssfiles/floral.css";
import axios from "axios";

const Floral = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8400/florat-list"
        );
        console.log(response);
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
    <div className="floral container">
      <h1 className="floral-heading">POLO T-Shirts</h1>
      <div className="floral-products">
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
          <h1>Coming Soon...</h1>
        )}
      </div>
    </div>
  );
};

export default Floral;
