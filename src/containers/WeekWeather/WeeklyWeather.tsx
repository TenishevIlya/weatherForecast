import React, { Component } from "react";
import WeeklyWeatherStyle from "./WeeklyWeather.style";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import WeeklyListItem from "../../components/WeeklyListElem/WeeklyListItem";
import Caption from "../../components/Caption/Caption";

import { getWeather } from "../../utils/request";
import { getWeeklyDate } from "../../utils/getCurrentDay";

const { commonWeeklyStyle, infoPart, captionsBlock } = WeeklyWeatherStyle;

class WeekWeather extends Component {
  render() {
    return (
      <div className={commonWeeklyStyle}>
        <SectionHeader title="Погода на неделю" />
        <div className={infoPart}>
          <div className={captionsBlock}>
            <Caption title="День" />
            <Caption title="Температура" />
            <Caption title="Осадки" />
            <Caption title="Ветер" />
          </div>
          {getWeeklyDate().map((elem) => {
            return (
              <WeeklyListItem
                key={`${elem.day}${elem.date}`}
                day={elem.day}
                date={elem.date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default WeekWeather;
