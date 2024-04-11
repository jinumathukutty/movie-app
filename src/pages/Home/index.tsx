import React, { useEffect } from "react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import SearchBar from "../../components/SearchBar";
import ImageSlider from "../../components/ImageSlider";
import { useDispatch, useSelector } from "react-redux";
import { getRandomMovies } from "../../Services/movies";
import MovieList from "../../components/MovieList";
import { State } from "../../Utils/commonProps";
import CommonLayout from "../../components/CommonLayout";

const Home: React.FC = () => {
  const images: string[] = [banner1, banner2, banner3];
  const dispatch = useDispatch();
  const { randomMovies, movieLoading, searchQuery } = useSelector(
    (state: State) => state
  );

  useEffect(() => {
    getRandomMovies(dispatch, searchQuery);
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <CommonLayout>
      <SearchBar />
      <ImageSlider images={images} />
      <MovieList movies={randomMovies} loading={movieLoading} />
    </CommonLayout>
  );
};

export default Home;
