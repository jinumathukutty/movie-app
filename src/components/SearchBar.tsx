import React, { useState } from "react";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { actions } from "../Store";
import { useDispatch } from "react-redux";
const { Search } = Input;

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const [width, setWidth] = useState<string | number>(500);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearchQuery(event.target.value));
    if (event.target.value === "") {
      setWidth(500);
    } else {
      setWidth(1000);
    }
  };

  const handleSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
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
      />
    </div>
  );
};

export default SearchBar;
