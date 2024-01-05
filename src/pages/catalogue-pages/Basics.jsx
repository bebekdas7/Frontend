import { useEffect, useState } from "react";
import Products from "../../components/products container/Products";
import "../../cssfiles/basics.css";
import axios from "axios";

const Basics = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://ec2-16-171-249-244.eu-north-1.compute.amazonaws.com:8400/basic-list"
        );
        setData(response.data.cloth);
        // console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="basics container">
      <h1 className="basics-heading">Basic T-Shirts</h1>
      <div className="basics-products">
        {data.length > 0 ? (
          data.map((item, i) => (
            <Products
              key={i}
              cloth_id={item._id}
              src={
                "http://ec2-16-171-249-244.eu-north-1.compute.amazonaws.com:8400/image/" +
                item.images[0].id
              }
              hover={
                "http://ec2-16-171-249-244.eu-north-1.compute.amazonaws.com:8400/image/" +
                item.images[1].id
              }
              hover2={
                "http://ec2-16-171-249-244.eu-north-1.compute.amazonaws.com:8400/image/" +
                item.images[2].id
              }
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
          <h1>sorry no item available</h1>
        )}
      </div>
    </div>
  );
};

export default Basics;
