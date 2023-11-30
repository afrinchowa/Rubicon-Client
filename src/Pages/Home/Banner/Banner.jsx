import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from '../../../assets/austin-distel-DfjJMVhwH_8-unsplash.jpg'
import img2 from '../../../assets/austin-distel-jpHw8ndwJ_Q-unsplash.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img  src={img1}/>  
        <Link to="joinAsAdmin"> <button className=" btn  btn-accent">
       Join As Admin
        </button> </Link> 
      </div>
      <div>
        <img src={img2} />
        <Link to="joinAsEmployee"> <button className=" btn  btn-accent">
       Join As Employee
        </button> </Link>
      </div>
      
    </Carousel>
  );
};

export default Banner;
