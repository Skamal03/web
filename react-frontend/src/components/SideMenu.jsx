import React, { useState } from "react";
import backicon from '../assets/back.png';
import '../style/style.css';

function SideMenu({ isOpen, onClose }) {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubMenu = (id) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`} id="sideMenu">
      <ul className="menu-list">
        <li>
          <button className="menu-btn back-btn" onClick={onClose}>
            <img src={backicon} alt="Back" width="35" height="35" /> Back
          </button>
        </li>

        <li>
          <a href="watchlist.html" className="menu-btn simple-link d-lg-none">
            WatchList
          </a>
        </li>

        <li>
          <a href="Movies.html" className="menu-btn simple-link d-lg-none">
            Movies
          </a>
        </li>

        <li>
          <a href="tvshows.html" className="menu-btn simple-link d-lg-none">
            TV Shows
          </a>
        </li>

        <li>
          <button
            className="menu-btn submenu-toggle"
            onClick={() => toggleSubMenu("genres")}
          >
            Genres ▾
          </button>
          <ul
            className={`submenu ${openSubmenus["genres"] ? "open" : ""}`}
            id="genres"
          >
            {["Action", "Comedy", "Drama", "Adventure", "Horror", "War"].map(
              (genre) => (
                <li key={genre}>
                  <a
                    href={`${genre.toLowerCase()}.html`}
                    className="submenu-link"
                    data-category={genre}
                  >
                    {genre}
                  </a>
                </li>
              )
            )}
          </ul>
        </li>

        <li>
          <button
            className="menu-btn submenu-toggle"
            onClick={() => toggleSubMenu("trending")}
          >
            Trending ▾
          </button>
          <ul
            className={`submenu ${openSubmenus["trending"] ? "open" : ""}`}
            id="trending"
          >
            <li>
              <a href="Trendingtoday.html" className="submenu-link">
                Today
              </a>
            </li>
            <li>
              <a href="ThisWeek.html" className="submenu-link">
                This Week
              </a>
            </li>
          </ul>
        </li>

        <li>
          <button
            className="menu-btn submenu-toggle"
            onClick={() => toggleSubMenu("topRated")}
          >
            Top Rated ▾
          </button>
          <ul
            className={`submenu ${openSubmenus["topRated"] ? "open" : ""}`}
            id="topRated"
          >
            <li>
              <a href="Alltime.html" className="submenu-link">
                All Time
              </a>
            </li>
            <li>
              <a href="ThisYear.html" className="submenu-link">
                This Year
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
