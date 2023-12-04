
import { FaDollarSign } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

import AboutUs from "../../Home/AboutUs/AboutUs";
import Package from "../../Home/Package/Package";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
        <h2 className="text-3xl">
            <span>Hi,Welcome </span>
            {
                user?.displayName ? user.displayName:'Back'
            }
        </h2>
        <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaDollarSign></FaDollarSign>
          </div>
          <div className="stat-title">My Custom Requests </div>
          <div className="stat-value">3</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">My pending requests </div>
          <div className="stat-value">4,2</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">My monthly requests  </div>
          <div className="stat-value">1,2</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <AboutUs></AboutUs>
          <Package></Package>
    </div>
    );
};

export default UserHome;