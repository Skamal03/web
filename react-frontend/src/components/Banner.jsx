import React from "react";
import '../style/style.css';


function Banner() {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value;
    if (query) {
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="banner text-center text-white py-5">
      <div className="banner-content container">
        <h1 className="display-2">Discover Your Favorite Movies</h1>
        <p className="lead">Explore the world of movies and TV shows.</p>
        <form className="search-bar d-flex justify-content-center gap-2 mt-4" onSubmit={handleSearch}>
          <input type="text" className="form-control w-50" id="searchInput" name="name" placeholder="Search movies..." />
          <button type="submit" className="search-btn fw-bold" id="searchBtn">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
