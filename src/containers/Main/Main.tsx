import React, { Component } from "react";

import MainStyle from "./Main.style";
const { commonMain, sectionStyle } = MainStyle;

class Main extends Component {
  render() {
    return (
      <div className={commonMain}>
        <section className={sectionStyle}></section>
        <section className={sectionStyle}></section>
      </div>
    );
  }
}

export default Main;
