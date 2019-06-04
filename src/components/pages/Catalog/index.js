import React, { Component } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { Tabs, Tab } from 'react-bootstrap';
import { ItemList } from '../../../components';
const StyledTabs = styled(Tabs)`
  background-color: ${palette('grayscale', 8, true)};
  .nav,
  .nav-tabs,
  .nav-link {
    width: calc(50% - 40px);
    margin: 0px 20px;
    color: ${palette('white', 0, true)};
    text-align: center;
    margin-bottom: 4px;
    border-bottom-color: ${palette('grayscale', 8, true)};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    :hover {
      border: 0px solid transparent;
      border-bottom: 2px solid ${palette('white', 0, true)};
      color: ${palette('grayscale', 6, true)};
    }
    &.active {
      border: 0px solid transparent;
      border-bottom: 2px solid ${palette('white', 0, true)};
      background-color: ${palette('grayscale', 8, true)} !important;
      color: #ccc;
    }
  }
`;

const itemClick = item => {
  console.log('itemClicked.......', item);
};
const addToCartClick = details => {
  console.log('addToCartClicked.......', details);
};
const details = {
  title: 'Lays Barbeque',
  code: '0122101',
  imgsrc: 'assets/images/img0.jpg',
  desc: 'test ',
  status: 100,
  quantity: 100,
  thumbimgsrc: 'assets/images/img0.jpg',
  imggallery: ['assets/images/img0.jpg', 'assets/images/img0.jpg']
};

const itemList = [
  {
    itemDetails: details
  },
  {
    itemDetails: {
      title: 'Lays Classic',
      code: '0122101',
      imgsrc: 'assets/images/img1.jpg',
      desc: 'test ',
      status: 80,
      quantity: 100,
      thumbimgsrc: 'assets/images/img1.jpg',
      imggallery: ['assets/images/img1.jpg', 'assets/images/img1.jpg']
    }
  },
  {
    itemDetails: {
      title: 'Lays Barbeque Ham',
      code: '0122101',
      imgsrc: 'assets/images/img2.jpg',
      desc: 'test ',
      status: 33,
      quantity: 100,
      thumbimgsrc: 'assets/images/img2.jpg',
      imggallery: ['assets/images/img2.jpg', 'assets/images/img2.jpg']
    }
  }
];
class Catalog extends Component {
  state = { filterBy: 'floor' };
  render() {
    return (
      <StyledTabs
        defaultActiveKey="floor"
        id="uncontrolled-tab-example"
        onSelect={(index, label) => {
          this.setState({ filterBy: index });
          console.log(index, ' : ', label + ' selected');
        }}
      >
        <Tab eventKey="floor" title="FLOOR">
          <ItemList
            itemList={itemList}
            btnTransparent={true}
            btnReverse={false}
            btnPalette="success"
            itemClick={itemClick}
            addToCartClick={addToCartClick}
          />
        </Tab>
        <Tab eventKey="shelf" title="SHELF">
          <ItemList
            itemList={itemList}
            btnTransparent={true}
            btnReverse={false}
            btnPalette="success"
            itemClick={itemClick}
            addToCartClick={addToCartClick}
          />
        </Tab>
      </StyledTabs>
    );
  }
}

export default Catalog;
