import React, { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:8080";

const pageConfig = {
  "index.html": {
    containerClass: "movies",
    endpoint: "/movies/top-rated",
    hasLoadMore: false,
  },
  "action.html": {
    containerClass: "action",
    endpoint: "/movies/discover/action",
    hasLoadMore: true,
  },
  "adventure.html": {
    containerClass: "adventure",
    endpoint: "/movies/discover/adventure",
    hasLoadMore: true,
  },
  "Comedy.html": {
    containerClass: "comedy",
    endpoint: "/movies/discover/comedy",
    hasLoadMore: true,
  },
  "War.html": {
    containerClass: "war",
    endpoint: "/movies/discover/war",
    hasLoadMore: true,
  },
  "Drama.html": {
    containerClass: "drama",
    endpoint: "/movies/discover/drama",
    hasLoadMore: true,
  },
  "Horror.html": {
    containerClass: "horror",
    endpoint: "/movies/discover/horror",
    hasLoadMore: true,
  },
  "Movies.html": {
    containerClass: "movies",
    endpoint: "/movies/top-rated",
    hasLoadMore: true,
  },
  "tvshows.html": {
    containerClass: "tv-shows",
    endpoint: "/movies/tv/top-rated",
    hasLoadMore: true,
  },
  "Alltime.html": {
    containerClass: "all-time",
    endpoint: "/movies/top-rated",
    hasLoadMore: true,
  },
  "ThisYear.html": {
    containerClass: "year",
    endpoint: "/movies/this-year",
    hasLoadMore: true,
  },
  "Trendingtoday.html": {
    containerClass: "Trending-today",
    endpoint: "/movies/trending/day",
    hasLoadMore: true,
  },
  "ThisWeek.html": {
    containerClass: "week",
    endpoint: "/movies/trending/week",
    hasLoadMore: true,
  },
};

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentPath = () =>
    window.location.pathname.split("/").pop() || "index.html";

  useEffect(() => {
    const currentPath = getCurrentPath();
    const currentConfig = pageConfig[currentPath];

    if (currentConfig) {
      setConfig(currentConfig);
    }
  }, []);

  useEffect(() => {
    if (config) loadMovies(currentPage);
  }, [config, currentPage]);

  const loadMovies = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}${config.endpoint}?page=${page}`);
      const data = await response.json();
      setMovies((prev) => (page === 1 ? data.results : [...prev, ...data.results]));
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const isTVPage = getCurrentPath() === "tvshows.html";

  return (
    <section className={`movie-list container py-5 text-center text-white`}>
      <h2 className="mb-4">Top Rated</h2>
      <div className={`d-flex justify-content-center gap-4 flex-wrap ${config?.containerClass}`}>
        {movies.map((movie) => {
          if (!movie.poster_path) return null;
          const title = movie.title || movie.name;
          const href = isTVPage
            ? `tv-details.html?id=${movie.id}&type=tv`
            : `movie-details.html?id=${movie.id}&type=movie`;

          return (
            <div key={movie.id} className="movie-card">
              <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={title}
                  className="movie-img"
                  loading="lazy"
                />
                <h3>{title}</h3>
                <p>Rating: {movie.vote_average.toFixed(1)}</p>
              </a>
            </div>
          );
        })}
      </div>

      {config?.hasLoadMore && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoadMore}
            className="btn btn-danger"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default MovieList;
