import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const AssetCard = ({item}) => {
    const { image, name, type,status,_id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
  const [  ,refetch] = useCart();
    const handleAddToCart = ()=> {
  
      if (user && user.email) {
        // send cart item to the database
     
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          type,
        };
        axiosSecure.post("carts", cartItem).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: `${name} added to your cart`,
              icon: "success",
              timer: 1500,
            });
            // refetch the cart to update the cart items count
            refetch();
    
          }
        });
      } else {
        Swal.fire({
          title: "You are not Logged In user",
          text: "Please Log in to add to the Cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes,Log In",
        }).then((result) => {
          if (result.isConfirmed) {
            //  send the user to the logged in page
            navigate("/login", { state: { from: location } });
          }
        });
      }
    };



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