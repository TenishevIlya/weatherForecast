import React, { Component } from "react";
import { IWeeklyListItem } from "./WeeklyListItem.type";
import classnames from "classnames";
import Caption from "../Caption/Caption";

import Logo from "../../img/weather.svg";

import WeeklyItemStyle from "./WeeklyListItem.style";
const {
  commonStyle,
  dateStyle,
  dateName,
  logo,
  commonContainer,
} = WeeklyItemStyle;

class WeeklyListItem extends Component<IWeeklyListItem> {
  render() {
    return (
      <div className={commonStyle}>
        <div className={dateStyle}>
          <div className={dateName}>
            <span>{this.props.day}</span>
            <Caption title={this.props.date} />
          </div>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${this.props.weatherIconCode}.png`}
            className={logo}
          />
          {/* <img src={Logo} className={logo}></img> */}
        </div>
        <div className={commonContainer}>{this.props.temperature}</div>
        <div className={commonContainer}>{this.props.precipitation}</div>
        <div className={commonContainer}>{this.props.wind}</div>
      </div>
    );
  }
}

export default WeeklyListItem;
