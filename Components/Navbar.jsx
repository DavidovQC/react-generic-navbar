import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav-div">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
