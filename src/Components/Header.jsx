import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <ul className="header">
        <Link to="/sidebar">
          <li className="list-item">Sidebar</li>
        </Link>
        <Link to="/cards">
          <li className="list-item">Cards</li>
        </Link>
        <Link to="profile">
          <li className="list-item">Profile</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
