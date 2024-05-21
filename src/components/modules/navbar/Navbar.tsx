import "./Navbar.scss";
import SearchInput from "./elements/inputs/search/SearchInput";
import { IoMdMenu } from "react-icons/io";
import MenuIcons from "./elements/menu/menuIcons/MenuIcons";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="header-right">
          <div className="header-right-icons">
            <a href="/">
              <img
                src="/src/assets/logos/navbar/logo-header.svg"
                alt="Header logo"
              />
            </a>
            <button className="menu-button">
              <IoMdMenu className="menu-icon" />
              <p>MENU</p>
            </button>
          </div>
          <SearchInput />
        </div>
        <div className="header-left">
          <MenuIcons />
        </div>
      </nav>
      <div className="info-container"></div>
    </header>
  );
};

export default NavBar;
