import "./Navbar.scss";
import SearchInput from "./elements/inputs/search/SearchInput";
import { IoMdMenu } from "react-icons/io";
import MenuIcons from "./elements/menu/menuIcons/MenuIcons";
import SubMenuIcons from "./elements/menu/subMenu/SubMenuIcons";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="header-right">
          <div className="header-right-icons">
            <a href="/">
              <img src="/logo-header.svg" alt="Header logo" />
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
      <div className="sub-menu">
        <SubMenuIcons />
      </div>
    </header>
  );
};

export default NavBar;
