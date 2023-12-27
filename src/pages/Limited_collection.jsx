import { useEffect, useState } from "react";
import Products from "../components/products container/Products";
import "../cssfiles/limitedcollection.css";
import axios from "axios";

const Limited_collection = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://futurechaos.in:5000/limited-list"
        );
        setData(response.data.cloth);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data !== "") {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="floral container">
      <h1 className="floral-heading">Graphic Printed T-Shirts</h1>
      <div className="floral-products">
        {data.length > 0 ? (
          data.map((item, i) => (
            <Products
              key={i}
              cloth_id={item._id}
              src={"https://futurechaos.in:5000/image/" + item.images[0].id}
              hover={"https://futurechaos.in:5000/image/" + item.images[1].id}
              hover2={"https://futurechaos.in:5000/image/" + item.images[2].id}
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

export default Limited_collection;
