import { getAuth } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const Header = () => {
  const auth = getAuth(app);
  return (
    <div>
      <Link to="/" className="">
        Home
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
