import { CiSearch } from "react-icons/ci";
import { HiOutlineMicrophone } from "react-icons/hi2";
import "./SearchInput.scss";
const SearchInput = () => {
  return (
    <button className="search-input">
      <CiSearch className="icon" />
      <p>Haz una búsqueda en Siman</p>
      <HiOutlineMicrophone className="icon" />
    </button>
  );
};

export default SearchInput;
