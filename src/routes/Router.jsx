import React from "react";
import { Route,Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import DetailsPage from "../pages/details/DetailsPage";
import AboutPage from "../pages/about/AboutPage";
import AnimePage from "../pages/anime/AnimePage";
import MoviePage from "../pages/movie/MoviePage";
import GamePage from "../pages/game/GamePage";


const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"detailsPage"} element={<DetailsPage />} />
      <Route path={"aboutPage"} element={<AboutPage />} />
      <Route path={"animePage"} element={<AnimePage />} />
      <Route path={"moviePage"} element={<MoviePage />} />
      <Route path={"gamePage"} element={<GamePage />} />




    </Routes>
  );
};

export default Router;
