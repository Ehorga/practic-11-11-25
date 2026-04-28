import { Link } from "react-router-dom";
import Menu from "./../Menu/Menu";

const Header = () => {
  return (
    <header>
    
      <Link to="/">logo</Link>
      <Menu />
    </header>
  );
};

export default Header;
