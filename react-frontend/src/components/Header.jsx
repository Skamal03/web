import React, { useState } from "react";
import SideMenu from "./SideMenu";
import MenuIcon from '../assets/menu-w.png';
import loginicon from '../assets/login-4.png';
import '../style/style.css'; 

function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <header className="d-flex justify-content-between align-items-center p-3 flex-wrap position-relative">
      <div className="d-flex align-items-center gap-3">
        <button
          className="browse-btn btn"
          id="browseBtn"
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
        >
          <img src={MenuIcon} alt="Menu" width="24" height="24" />
        </button>
        <a
          href="index.html"
          className="text-white fs-2 d-none d-lg-block fw-bold"
          style={{ textDecoration: "none" }}
        >
          Cineverse
        </a>
      </div>

      <div className="d-flex justify-content-center align-items-centre gap-2">
        <a
          href="Movies.html"
          className="head-btn btn d-none d-lg-block text-white fw-bold"
        >
          Movies
        </a>
        <a
          href="tvshows.html"
          className="head-btn btn d-none d-lg-block text-white fw-bold"
        >
          TV Shows
        </a>
      </div>

      <div className="position-absolute top-50 start-50 translate-middle d-lg-none">
        <a href="index.html" style={{ textDecoration: "none" }}>
          <div
            className="text-white text-center fw-bold"
            style={{ fontSize: "2.5rem" }}
          >
            Cineverse
          </div>
        </a>
      </div>

      <div className="d-flex justify-content-center text-center align-items-center gap-2">
        <a
          href="watchlist.html"
          className="watchlist-btn btn d-none d-lg-block"
          id="watchlistbtn"
        >
          WatchList
        </a>
        <a className="login-btn btn" id="loginbtn" href="login.html">
          <img src={loginicon} alt="Login" width="30" height="30" />
        </a>
      </div>

      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
    </header>
  );
}

export default Header;
