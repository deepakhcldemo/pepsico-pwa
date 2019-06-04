import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { size, palette } from "styled-theme";
import { Pagination } from "react-bootstrap";

const SimplePagination = ({ ...props }) => {
  return (
    <Pagination>
      <Pagination.Prev />
      <div style={{ width: "100%", textAlign: "center" }}>Floor 1 Shelf 1</div>
      <Pagination.Next />
    </Pagination>
  );
};

export default SimplePagination;
