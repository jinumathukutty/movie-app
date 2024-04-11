import React from "react";
import { Flex, Spin } from "antd";

const Spinner = () => {
  return (
    <Flex className="loading-spinner-container">
      <Spin size="large" />
    </Flex>
  );
};

export default Spinner;
