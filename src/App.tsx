import React, { Component } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DefaultLayout>
          <Route path="/" />
        </DefaultLayout>
      </BrowserRouter>
    );
  }
}

export default App;
