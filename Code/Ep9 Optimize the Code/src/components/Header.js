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
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-item">
              {" "}
              <Link className="link" to="/">
                {onlineStatus ? "Online ✅" : "Offline ❌"}
              </Link>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <Link className="link" to="/">
                Home
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link className="link" to="/about">
                {" "}
                About us
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link className="link" to="/contact">
                Contect us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/grocery">
                Grocery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link">Cart</Link>
            </li>
            <button
              className="login-btn"
              onClick={() => {
                setBtnName(btnName == "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
