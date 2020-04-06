import React, { Component } from "react";
import WeeklyWeather from "../WeekWeather/WeeklyWeather";

import MainStyle from "./Main.style";
const { commonMain, sectionStyle } = MainStyle;

class Main extends Component {
  render() {
    return (
      <div className={commonMain}>
        <section className={sectionStyle}></section>
        <WeeklyWeather />
      </div>
    );
  }
}

export default Main;
