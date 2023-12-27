import { useNavigate } from "react-router-dom";
import "../../cssfiles/cc.css";

const CC = (props) => {
  // console.log(props)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${props.title}`);
  };

  return (
    <button className="cc" onClick={handleClick}>
      <div className="cc-img">
        <img src={props.src} alt="" className="nohover-c" />
        <img src={props.hover} alt="" className="hover-c" />
      </div>
      <div className="cc-footer">
        <h1>{props.title}</h1>
      </div>
    </button>
  );
};

export default CC;
