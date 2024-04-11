import React from "react";
import { Flex, Row, Card } from "antd";
import { MovieBasic } from "../../Utils/commonProps";
import NoPreview from "../../assets/images/no_preview.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
const { Meta } = Card;

type Props = {
  movies: MovieBasic[];
  loading: boolean;
};

export default function MovieList({ movies, loading }: Props) {
  const navigate = useNavigate();

  const handleCardClick = (item: MovieBasic) => {
    navigate(`/movie/${item?.IMDB_ID}`);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Flex gap="middle" vertical className="movie-container">
      <Row className="row-with-margin">
        {movies.map((item) => (
          <Card
            bordered
            key={item?.IMDB_ID}
            style={{ width: 240 }}
            hoverable
            cover={
              <img
                src={item?.IMG_POSTER || NoPreview}
                alt={item.AKA}
                height="250px"
                width="100%"
              />
            }
            onClick={() => handleCardClick(item)}
          >
            <Meta title={item.AKA} />
          </Card>
        ))}
      </Row>
    </Flex>
  );
}
