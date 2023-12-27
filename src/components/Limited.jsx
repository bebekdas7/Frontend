import { useNavigate } from 'react-router-dom';
import '../cssfiles/limited.css'; 

const Limited = () => {
  const navigate= useNavigate()
  return (
    <div className='limited container-fluid'>
        <div className="limited-holding1">
            <img src="/images/m2.avif" alt="" />
            <h1>LimitedCollection</h1>
            <button className='btn' onClick={()=>{
              navigate("/limited-collection")
            }}>SHOP NOW</button>
        </div>
        <div className="limited-holding2">
        <img src="/images/w1.avif" alt="" />
        </div>
    </div>
  )
}

export default Limited;