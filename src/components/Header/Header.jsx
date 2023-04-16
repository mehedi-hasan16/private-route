import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(authContext);
    const handleSingOut = () => {
      logOut()
        .then(() => {
          console.log("sign out successfully");
        })
        .catch((error) => {
          console.error(error);
        });
    };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        {user ? (
          <span>
            {user.email}{" "}
            <button onClick={handleSingOut} className="btn btn-sm">
              Sign Out
            </button>
          </span>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Header;
