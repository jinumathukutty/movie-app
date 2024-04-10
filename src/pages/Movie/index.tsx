import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../Utils/commonProps";

type Props = {};

const Movie = (props: Props) => {
  const params = useParams();
  const { id } = params;
  const { randomMovies } = useSelector((state: State) => state);

  const movie = randomMovies.find((movie) => movie.IMDB_ID === id);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    TITLE,
    YEAR,
    IMDB_ID,
    RANK,
    ACTORS,
    AKA,
    IMDB_URL,
    IMDB_IV,
    IMG_POSTER,
    photo_width,
    photo_height,
  } = movie;

  return (
    <div className="movie-details">
      <h2>{TITLE}</h2>
      <div className="poster-container">
        <img src={IMG_POSTER} alt={TITLE} className="poster" />
      </div>
      <div className="details">
        <h3>Actors</h3>
        <p>{ACTORS}</p>
        {/* <h3>Reviews</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul> */}
        {/* <h3>Keywords</h3>
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Movie;
