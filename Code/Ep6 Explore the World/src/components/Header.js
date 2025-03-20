import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Contect us</li>
            <li className="nav-item">Cart</li>
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
