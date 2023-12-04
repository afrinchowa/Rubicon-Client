import ManageItems from "../Dashboard/ManageItems/ManageItems";


const AllRequest = () => {
    return (
       <div>
         <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/pL6LwBL/piggybank-B0-Xp-Yhe-Gekk-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome, to All Request Page</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>

      <ManageItems></ManageItems>
       </div>
    );
};

export default AllRequest;