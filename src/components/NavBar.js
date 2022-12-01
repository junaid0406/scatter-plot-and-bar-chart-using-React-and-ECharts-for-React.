import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Scatter Plot</Link></li>
                <li><Link to="/bargraph">Bar Graph</Link></li>
            </ul>
        </div>
    );
}
export default NavBar;