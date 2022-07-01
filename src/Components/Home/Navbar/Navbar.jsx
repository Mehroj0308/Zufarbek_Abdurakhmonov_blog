import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row between">
          <div className="col-6">
            <ul>
              <li>
                <Link to="/home">Asosiy</Link>
              </li>
              <li>
             <Link to="/works">Proyektlar</Link>
              </li>
              <li>
                <Link to="/blogs">Bloglar</Link>
              </li>
              <li>
                <Link to="/videos">Videolar</Link>
              </li>
              <li>
                <Link to="/contacts">Aloqa</Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <img className="logo" src="./img/Zufarbek_profil.jpg" alt="Zufar_Abdurakhmonov" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
