import { LOGO_URL } from "../utils/constant";
const Header = () => (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About us</li>
          <li className="nav-item">Contect us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );

  export default Header;