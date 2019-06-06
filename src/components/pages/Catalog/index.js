import React, { Component } from "react";
import styled from "styled-components";
import { palette } from "styled-tools";
import { Tabs, Tab } from "react-bootstrap";
import { ItemList, SimplePagination } from "../../../components";
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
const StyledSimplePagination = styled(SimplePagination)`
  ul .pagination {
    background-color: red;
  }
`;
let details = {};
let itemList = [];
let categoryList = [];
class Catalog extends Component {
  state = {
    filterBy: "floor",
    currentPageNumber: 1,
    totalPages: 1,
    numItemsPerPage: 6,
    totalItems: [],
    currentItemTitle: "",
    cuttentPageItems: []
  };
  itemClick = item => {
    console.log("itemClicked.......", item);
    this.setState({ currentItemTitle: item.title });
    if (this.state.filterBy === "shelf") {
      this.props.history.push("/item-details");
    }
  };
  addToCartClick = details => {
    console.log("addToCartClicked.......", details);
  };
  paginate = (array, page_size, page_number) => {
    --page_number;
    console.log(array, page_size, page_number);
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  };
  initData = filterby => {
    let listItem = filterby === "shelf" ? itemList : categoryList;
    this.setState({ currentPageNumber: 1 });
    this.setState({
      totalItems: listItem
    });
    let totalPages = Math.ceil(listItem.length / this.state.numItemsPerPage);
    this.setState({ totalPages: totalPages });
    this.setState({
      cuttentPageItems: this.paginate(listItem, this.state.numItemsPerPage, 1)
    });
    this.setState({ currentItemTitle: "" });
  };
  componentDidMount = () => {
    details = {
      title: "Lays Barbeque",
      code: "0122101",
      imgsrc: "assets/images/img0.jpg",
      desc: "test ",
      status: 100,
      quantity: 100,
      type: "shelf",
      thumbimgsrc: "assets/images/img0.jpg",
      imggallery: ["assets/images/img0.jpg", "assets/images/img0.jpg"]
    };

    itemList = [
      {
        itemDetails: details
      },
      {
        itemDetails: {
          title: "Lays Classic",
          code: "0122101",
          imgsrc: "assets/images/img1.jpg",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img1.jpg",
          imggallery: ["assets/images/img1.jpg", "assets/images/img1.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Classic",
          code: "0122101",
          imgsrc: "assets/images/img1.jpg",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img1.jpg",
          imggallery: ["assets/images/img1.jpg", "assets/images/img1.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Classic",
          code: "0122101",
          imgsrc: "assets/images/img1.jpg",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img1.jpg",
          imggallery: ["assets/images/img1.jpg", "assets/images/img1.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Classic",
          code: "0122101",
          imgsrc: "assets/images/img1.jpg",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img1.jpg",
          imggallery: ["assets/images/img1.jpg", "assets/images/img1.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Classic",
          code: "0122101",
          imgsrc: "assets/images/img1.jpg",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img1.jpg",
          imggallery: ["assets/images/img1.jpg", "assets/images/img1.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Classic",
          code: "0122101",
          imgsrc: "assets/images/img1.jpg",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img1.jpg",
          imggallery: ["assets/images/img1.jpg", "assets/images/img1.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Classic",
          code: "0122101",
          imgsrc: "assets/images/img1.jpg",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img1.jpg",
          imggallery: ["assets/images/img1.jpg", "assets/images/img1.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      },
      {
        itemDetails: {
          title: "Lays Barbeque Ham new",
          code: "0122101",
          imgsrc: "assets/images/img2.jpg",
          desc: "test ",
          status: 50,
          quantity: 80,
          type: "shelf",
          thumbimgsrc: "assets/images/img2.jpg",
          imggallery: ["assets/images/img2.jpg", "assets/images/img2.jpg"]
        }
      }
    ];

    categoryList = [
      {
        itemDetails: {
          title: "LEVEL 1 - EAST",
          code: "15 METER AWAY",
          imgsrc: "assets/images/cat1.png",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "floor",
          thumbimgsrc: "assets/images/cat1.png",
          imggallery: ["assets/images/cat1.png", "assets/images/cat1.png"]
        }
      },
      {
        itemDetails: {
          title: "LEVEL 2 - EAST",
          code: "5 METER AWAY",
          imgsrc: "assets/images/cat2.png",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "floor",
          thumbimgsrc: "assets/images/cat2.png",
          imggallery: ["assets/images/cat2.png", "assets/images/cat2.png"]
        }
      },
      {
        itemDetails: {
          title: "LEVEL 3 - WEST",
          code: "10 METER AWAY",
          imgsrc: "assets/images/cat3.png",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "floor",
          thumbimgsrc: "assets/images/cat3.png",
          imggallery: ["assets/images/cat3.png", "assets/images/cat3.png"]
        }
      },
      {
        itemDetails: {
          title: "LEVEL 4 - EAST",
          code: "5 METER AWAY",
          imgsrc: "assets/images/cat4.png",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "floor",
          thumbimgsrc: "assets/images/cat4.png",
          imggallery: ["assets/images/cat4.png", "assets/images/cat4.png"]
        }
      },
      {
        itemDetails: {
          title: "LEVEL 5 - WEST",
          code: "1 METER AWAY",
          imgsrc: "assets/images/cat5.png",
          desc: "test ",
          status: 80,
          quantity: 100,
          type: "floor",
          thumbimgsrc: "assets/images/cat5.png",
          imggallery: ["assets/images/cat5.png", "assets/images/cat5.png"]
        }
      },
      {
        itemDetails: {
          title: "LEVEL 6 - NORTH",
          code: "0 METER AWAY",
          imgsrc: "assets/images/cat6.png",
          desc: "test ",
          status: 33,
          quantity: 100,
          type: "floor",
          thumbimgsrc: "assets/images/cat6.png",
          imggallery: ["assets/images/cat6.png", "assets/images/cat6.png"]
        }
      }
    ];
    this.initData("floor");
  };

  onSelectPagination = number => {
    console.log("..................... ", number);
    if (number > 0 && number <= this.state.totalPages) {
      this.setState({ currentPageNumber: number });
      this.setState({
        cuttentPageItems: this.paginate(
          this.state.totalItems,
          this.state.numItemsPerPage,
          number
        )
      });
    } else {
      this.setState({ currentPageNumber: this.state.currentPageNumber });
    }
  };
  render() {
    return (
      <StyledTabs
        defaultActiveKey="floor"
        id="uncontrolled-tab-example"
        onSelect={(index, label) => {
          this.setState({ filterBy: index });
          console.log(index, " : ", label + " selected");
          this.initData(index);
        }}
      >
        <Tab eventKey="floor" title="FLOOR">
          <SimplePagination
            style={{
              backgroundColor: "#e0e0e0",
              padding: "10px 15px",
              marginBottom: 0
            }}
            onSelectPagination={this.onSelectPagination}
            currentPageNumber={this.state.currentPageNumber}
            items={this.state.totalPages}
            title={this.state.currentItemTitle}
            totalPages={this.state.totalPages}
          />
          <ItemList
            itemList={this.state.cuttentPageItems}
            btnTransparent={true}
            btnReverse={false}
            btnPalette="success"
            itemClick={this.itemClick}
            addToCartClick={this.addToCartClick}
          />
        </Tab>
        <Tab eventKey="shelf" title="SHELF">
          <StyledSimplePagination
            style={{
              backgroundColor: "#e0e0e0",
              padding: "10px 15px",
              marginBottom: 0
            }}
            onSelectPagination={this.onSelectPagination}
            currentPageNumber={this.state.currentPageNumber}
            items={this.state.totalPages}
            title={this.state.currentItemTitle}
            totalPages={this.state.totalPages}
          />
          <ItemList
            itemList={this.state.cuttentPageItems}
            btnTransparent={true}
            btnReverse={false}
            btnPalette="success"
            itemClick={this.itemClick}
            addToCartClick={this.addToCartClick}
          />
        </Tab>
      </StyledTabs>
    );
  }
}

export default Catalog;
