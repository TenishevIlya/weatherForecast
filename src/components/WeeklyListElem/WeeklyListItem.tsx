import React, { Component } from "react";
import { IWeeklyListItem } from "./WeeklyListItem.type";
import Caption from "../Caption/Caption";

import WeeklyItemStyle from "./WeeklyListItem.style";
const { commonStyle, dateStyle, dateName } = WeeklyItemStyle;

class WeeklyListItem extends Component<IWeeklyListItem> {
  render() {
    return (
      <div className={commonStyle}>
        <div className={dateStyle}>
          <div className={dateName}>
            <span>{this.props.day}</span>
            <Caption title={this.props.date} />
          </div>
          <img></img>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default WeeklyListItem;
