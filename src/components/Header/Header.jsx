import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
      </div>
    </div>
  );
};

export default Header;
