import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect header");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();
  console.log("render header");
  return (
    <div className="flex justify-between items-center px-30 shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex items-center">
          <li className="px-4">
            {" "}
            <Link className="link" to="/">
              {onlineStatus ? "Online ✅" : "Offline ❌"}
            </Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link className="link" to="/">
              Home
            </Link>{" "}
          </li>
          <li className="px-4">
            <Link className="link" to="/about">
              {" "}
              About us
            </Link>{" "}
          </li>
          <li className="px-4">
            <Link className="link" to="/contact">
              Contect us
            </Link>
          </li>
          <li className="px-4">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link className="link">Cart</Link>
          </li>
          <button
            className="mx-4 px-6 py-2 bg-red-600 text-white rounded-md"
            onClick={() => {
              setBtnName(btnName == "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
