import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "../../../assets/austin-distel-EMPZ7yRZoGw-unsplash.jpg";
import img2 from "../../../assets/austin-distel-jpHw8ndwJ_Q-unsplash.jpg";
import img3 from "../../../assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg";

const Package = () => {
  return (
   <div>
   <SectionTitle heading={'Package'} >

</SectionTitle>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img1} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-4xl font-semibold"> 5 members for</h2>
          <h1 className="text-8xl font-bold"> $5</h1>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img2} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-4xl font-semibold"> 10 members for</h2>
          <h1 className="text-8xl font-bold"> $8</h1>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl  image-full">
        <figure>
          <img src={img3} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-4xl font-semibold"> 20 members for</h2>
          <h1 className="text-8xl font-bold"> $15</h1>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Package;
