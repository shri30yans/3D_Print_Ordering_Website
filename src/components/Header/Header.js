import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <Link to={`/`}>
            <div className='logo-container'>
                <h1>Keychain.com</h1>
            </div>
        </Link>
        
        <div className="profile-container">
            <a href="/">
            <FiHeart className="header-icons" />
            </a>
            <a href="/">
            <AiOutlineShoppingCart className="header-icons" />
            </a>
            <a href="/">
            <AiOutlineUserAdd className="header-icons" />
            </a>
        </div>
        
    </header>
  );
};

export default Header;