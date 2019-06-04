import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { size, palette } from "styled-theme";
import { Pagination } from "react-bootstrap";

const SimplePagination = ({ ...props }) => {
  const {
    bsPrefix,
    style,
    title,
    onSelectPagination,
    currentPageNumber
  } = props;
  return (
    <Pagination bsPrefix={bsPrefix} style={style}>
      <Pagination.Prev
        onClick={() => onSelectPagination(currentPageNumber - 1)}
      />
      <div style={{ width: "100%", textAlign: "center" }}>{title}</div>
      <Pagination.Next
        onClick={() => onSelectPagination(currentPageNumber + 1)}
      />
    </Pagination>
  );
};

export default SimplePagination;
