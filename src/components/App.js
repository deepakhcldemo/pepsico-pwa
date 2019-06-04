import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import {
  Catalog,
  ItemDetails,
  NotFoundPage,
  PageTemplate,
  Header,
  Footer,
  CardBox,
  LeftNavigation
} from "../components";
import theme from "./themes/default";

class App extends Component {
  state = {
    collapsedStatus: false
  };
  onLeftNavCollapse = () => {
    this.setState({ collapsedStatus: !this.state.collapsedStatus });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageTemplate
          header={
            <Header
              onLeftNavCollapse={this.onLeftNavCollapse}
              collapsedStatus={this.state.collapsedStatus}
            />
          }
          footer={<Footer />}
          leftNavigation={
            <LeftNavigation
              collapsedStatus={this.state.collapsedStatus}
              breakPoint={1024}
              containerWidth={250}
              responsive={true}
            />
          }
        >
          <Switch>
            <Route path="/" component={Catalog} exact />
            <Route path="/item-details" component={ItemDetails} />
            <Route component={NotFoundPage} />
          </Switch>
        </PageTemplate>
      </ThemeProvider>
    );
  }
}

export default App;
