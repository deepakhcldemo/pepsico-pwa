import React, { Component } from "react";
import styled from "styled-components";
import { palette } from "styled-tools";
import { Tabs, Tab } from "react-bootstrap";
import {} from "../../../components";
const StyledTabs = styled(Tabs)`
  background-color: ${palette("grayscale", 8, true)};
  .nav,
  .nav-tabs,
  .nav-link {
    width: calc(50% - 40px);
    margin: 0px 20px;
    color: ${palette("white", 0, true)};
    text-align: center;
    margin-bottom: 4px;
    border-bottom-color: ${palette("grayscale", 8, true)};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    :hover {
      border: 0px solid transparent;
      border-bottom: 2px solid ${palette("white", 0, true)};
      color: ${palette("grayscale", 6, true)};
    }
    &.active {
      border: 0px solid transparent;
      border-bottom: 2px solid ${palette("white", 0, true)};
      background-color: ${palette("grayscale", 8, true)} !important;
      color: #ccc;
    }
  }
`;

class Catalog extends Component {
  state = { filterBy: "floor" };
  render() {
    return (
      <StyledTabs
        defaultActiveKey="floor"
        id="uncontrolled-tab-example"
        onSelect={(index, label) => {
          this.setState({ filterBy: index });
          console.log(index, " : ", label + " selected");
        }}
      >
        <Tab eventKey="floor" title="FLOOR">
          hello
        </Tab>
        <Tab eventKey="shelf" title="SHELF">
          hello hello
        </Tab>
      </StyledTabs>
    );
  }
}

export default Catalog;
