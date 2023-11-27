import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from '../../../assets/austin-distel-DfjJMVhwH_8-unsplash.jpg'
import img2 from '../../../assets/austin-distel-jpHw8ndwJ_Q-unsplash.jpg'

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1}/>     
      </div>
      <div>
        <img src={img2} />  
      </div>
      
    </Carousel>
  );
};

export default Banner;
