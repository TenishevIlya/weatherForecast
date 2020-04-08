import React, { Component } from "react";
import { IDefaultLayoutProps, IDefaultLayoutState } from "./DefaultLayout.type";

import Header from "../containers/Header/Header";
import Main from "../containers/Main/Main";
//import { getWeather } from "../utils/request";

import DefaultLayoutStyle from "./DefaultLayout.style";
const { common } = DefaultLayoutStyle;

class DefaultLayout extends Component<
  IDefaultLayoutProps,
  IDefaultLayoutState
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={common}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default DefaultLayout;
