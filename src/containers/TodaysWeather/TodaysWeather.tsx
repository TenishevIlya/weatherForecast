import React, { Component } from "react";
import TodaysWeatherStyle from "./TodaysWeather.style";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const { commonTodaysWeather } = TodaysWeatherStyle;

class TodaysWeather extends Component {
  render() {
    return (
      <div className={commonTodaysWeather}>
        <SectionHeader title="Погода в каком-то городе" />
      </div>
    );
  }
}

export default TodaysWeather;
