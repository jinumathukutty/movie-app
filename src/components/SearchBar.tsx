import React, { useState } from "react";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { actions } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../Utils/commonProps";
import { getMovies } from "../Services/movies";
const { Search } = Input;

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const { searchQuery, movieLoading } = useSelector((state: State) => state);

  const [width, setWidth] = useState<string | number>(500);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearchQuery(event.target.value));
    if (event.target.value === "") {
      setWidth(500);
    } else {
      setWidth(1000);
    }
  };

  const handleSearch: SearchProps["onSearch"] = (value) => {
    getMovies(dispatch, value);
  };

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <Search
        placeholder="Search your movies here!"
        onChange={handleOnChange}
        onSearch={handleSearch}
        size="large"
        style={{
          zIndex: 999,
          position: "absolute",
          top: "10px",
          width: width,
        }}
        value={searchQuery}
        loading={movieLoading}
      />
    </div>
  );
};

export default SearchBar;
