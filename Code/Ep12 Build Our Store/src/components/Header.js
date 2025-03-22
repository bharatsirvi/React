import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineStatusOffline, HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineContacts } from "react-icons/md";

import { IoCallOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  useEffect(() => {
    console.log("useEffect header");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();
  console.log("render header");

  const cart = useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between items-center px-30 shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex items-center">
          <li className="px-4">
            {" "}
            <Link className="link flex gap-2 items-center" to="/">
              <HiOutlineHome size={20} />
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="link flex gap-2 items-center" to="/about">
              {" "}
              <MdOutlineContacts size={20} />
              About us
            </Link>{" "}
          </li>
          <li className="px-4">
            <Link className="link flex gap-2 items-center" to="/contact">
              <IoCallOutline size={20} />
              Contect us
            </Link>
          </li>

          <li className="px-4">
            <Link
            to='/cart'
              type="button"
              className="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <FaShoppingCart size={20} />
             { cart.length !=0 &&  <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                  {"+"+cart.length}
                </span>
              </span> }
             
            </Link>
          </li>
          <li className="px-4">
            {" "}
            {onlineStatus ? (
              <HiOutlineStatusOnline color="green" size={20} />
            ) : (
              <HiOutlineStatusOffline color="red" size={20} />
            )}
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
