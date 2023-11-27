
const MenuItem = ({ item }) => {
    const { image, name, status, type } = item;
    return (
      <div className="flex space-x-2">
        <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px] " src={image} alt="" />
        <div>
          <h3 className="uppercase">{name}----------</h3>
          <p>{status}</p>
        </div>
        <p className="text-yellow-400">{type}</p>
      </div>
    );
  };
  
  export default MenuItem;