import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="joinAsEmployee">Join as Employee</Link>
      </li>

      <li>
        <Link to="joinAsAdmin">Join as HR/Admin</Link>
      </li>
      {isAdmin ? (
        <>
          <li>
            <Link to="/dashboard/users">My Employee List</Link>
          </li>
          <li>
            <Link to="/dashboard/addItems">Add an Employee</Link>
          </li>
          <li>
            <Link to="/order/electronics"> Asset List</Link>
          </li>
          <li>
            <Link to="/dashboard/addItems"> Add an Asset</Link>
          </li>
          <li>
            <Link to="/dashboard/manageBookings">All Requests</Link>
          </li>

          <li>
            <Link to="/dashboard/manageBookings">Custom Requests List</Link>
          </li>
        </>
      ) : (
        <></>
        // <>
        //   <li>
        //     <Link to="">My Team</Link>
        //   </li>
        //   <li>
        //     <Link to="">My Assets</Link>
        //   </li>
        //   <li>
        //     <Link to="">	Request for an Asset</Link>
        //   </li>
        //   <li>
        //     <Link to="">	Make a Custom Request</Link>
        //   </li>
        //   <li>
        //     <Link to="">	Profile</Link>
        //   </li>
        // </>
      )}

      {user ? (
        <>
          <span>{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
          <li>
            <Link to="/dashboard/cart">
              <button className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img
            className="w-44"
            src="https://i.ibb.co/Dzsx17g/logo-1.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
