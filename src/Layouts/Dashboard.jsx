import {
  FaAd,
  FaAddressBook,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHistory,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,

  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database

  const [isAdmin] = useAdmin();
console.log(isAdmin);
  return (
    <div className="flex">
      {/*  dashboard sidebar*/}
      <div className="w-64 min-h-screen bg-blue-500">
        <ul className="menu">
          {isAdmin ? (
            <>
            <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/My Employee">
                  <FaHome></FaHome>
                  My Employee List
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add An Asset
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/assetList">
                  <FaUtensils></FaUtensils>
                  Asset List
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addEmployee">
                  <FaUtensils></FaUtensils>
                  Add An Employee
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Asset
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  Custom Requests List
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>
                  All User
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaHistory></FaHistory>
                  Payment History
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaAddressBook></FaAddressBook>
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaHistory></FaHistory>
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* shared navlinks */}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content  */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
