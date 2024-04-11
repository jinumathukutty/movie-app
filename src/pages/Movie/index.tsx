import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../Utils/commonProps";
import { getMovieDetails } from "../../Services/movies";
import NoPreview from "../../assets/images/no_preview.png";
import { Rate, Button } from "antd";
import moment from "moment";
import Spinner from "../../components/Spinner";

const Movie = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  let _plainText = "",
    newKeywords = [];

  useEffect(() => {
    if (id) {
      getMovieDetails(dispatch, id);
    }
  }, [id, dispatch]);

  const { movie, randomMovies, movieDetailsLoading } = useSelector(
    (state: State) => state
  );

  const { short, top, main, storyLine } = movie;
  const movieData = randomMovies.find((item) => item.IMDB_ID === id);

  const { actor: actors, director, creator } = short;

  if (top?.plot !== null && top?.plot !== undefined) {
    const {
      plot: {
        plotText: { plainText },
      },
      keywords: { edges },
    } = top;
    newKeywords = edges;
    _plainText = plainText;
  }

  const {
    featuredReviews: { edges },
  } = main;
  const reviews = edges ?? [];

  const {
    genres: { genres: newGenres },
  } = storyLine;

  if (movieDetailsLoading) {
    return <Spinner />;
  }

  return (
    <div className="movie-details-container">
      <div className="poster-container">
        <img
          src={movieData?.IMG_POSTER || NoPreview}
          alt={short?.name}
          className="poster"
        />
      </div>
      <div className="details">
        <h2>{movieData?.AKA}</h2>

        <div className="details-table">
          {/* Director */}
          {director?.length > 0 && (
            <div className="details-row">
              <div className="details-heading">Director</div>
              <div className="details-content">
                {director?.map((d: any, index: number) =>
                  d?.url ? (
                    <a href={d?.url} key={index}>
                      {d?.name}
                    </a>
                  ) : (
                    <span>{d?.name}</span>
                  )
                )}
              </div>
            </div>
          )}

          {/* Writer */}
          {creator?.length > 0 && (
            <div className="details-row">
              <div className="details-heading">Writer</div>
              <div className="details-content">
                {creator?.map((d: any, index: number) =>
                  d?.url && d["@type"] === "Person" ? (
                    <a href={d?.url} key={index}>
                      {d?.name}
                    </a>
                  ) : (
                    <></>
                  )
                )}
              </div>
            </div>
          )}

          {/* Actors */}
          {actors?.length > 0 && (
            <div className="details-row">
              <div className="details-heading">Stars</div>
              <div className="details-content">
                {actors?.map((actor: any, index: number) =>
                  actor?.url ? (
                    <a href={actor?.url} key={index}>
                      {actor?.name}
                    </a>
                  ) : (
                    <span key={index}>{actor?.name}</span>
                  )
                )}
              </div>
            </div>
          )}

          {/* Plot */}
          {_plainText && (
            <div className="details-row">
              <div className="details-heading">Plot</div>
              <div className="details-content">
                <p>{_plainText}</p>
              </div>
            </div>
          )}

          {/* Reviews */}
          {reviews?.length > 0 && (
            <div className="details-row">
              <div className="details-heading">Reviews</div>
              <div className="details-content">
                <ul>
                  {reviews.map((review: any, index: number) => {
                    const {
                      node: {
                        author,
                        authorRating,
                        submissionDate,
                        text: {
                          originalText: { plaidHtml },
                        },
                      },
                    } = review;
                    return (
                      <li key={index}>
                        <Rate disabled defaultValue={authorRating} />
                        <Button type="link">{author?.nickName}</Button>
                        {moment(new Date(submissionDate)).fromNow()}
                        <div dangerouslySetInnerHTML={{ __html: plaidHtml }} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          {/* Keywords */}
          {newKeywords?.length > 0 && (
            <div className="details-row">
              <div className="details-heading">Keywords</div>
              <div className="details-content">
                <div className="keyword-list">
                  {newKeywords?.map((keyword: any, index: number) => {
                    const {
                      node: { text },
                    } = keyword;
                    return (
                      <div key={index} className="keyword">
                        {text.trim()}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Keywords */}
          {newGenres?.length > 0 && (
            <div className="details-row">
              <div className="details-heading">Genre</div>
              <div className="details-content">
                <div className="keyword-list">
                  {newGenres.map((genre: any, index: number) => {
                    const { text } = genre;
                    return (
                      <div key={index} className="keyword">
                        {text.trim()}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
