import React from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import '../style/style.css';

const Home = () => {
  return (
    <>
      <Header />
      <MovieList />
      <Footer />
    </>
  );
};

export default Home;