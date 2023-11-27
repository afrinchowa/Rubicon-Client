

const AssetCard = ({item}) => {
    const { image, name, type,status } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 absolute right-0 mr-4 mt-4 px-4  text-white">
         {type}
        </p>
        <div className="card-body flex flex-col items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{type}</p>
          <p>{status}</p>
  
          <div className="card-actions justify-end">
            <button
              onClick= {handleAddToCart}
              className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
            >
              Add To my asset
            </button>
          </div>
        </div>
      </div>
    );
};

export default AssetCard;