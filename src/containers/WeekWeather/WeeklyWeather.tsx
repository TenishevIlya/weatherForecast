import React, { Component } from "react";
import WeeklyWeatherStyle from "./WeeklyWeather.style";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import WeeklyListItem from "../../components/WeeklyListElem/WeeklyListItem";
import Caption from "../../components/Caption/Caption";

import { IWeeklyWeaterState, IWeeklyWeaterProps } from "./WeeklyWeather.type";

import { getWeeklyDate } from "../../utils/getCurrentDay";

const {
  commonWeeklyStyle,
  infoPart,
  captionsBlock,
  tempCaption,
  precipitationCaption,
  windCaption,
} = WeeklyWeatherStyle;

class WeekWeather extends Component<IWeeklyWeaterProps, IWeeklyWeaterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className={commonWeeklyStyle}>
        <SectionHeader title="Погода на неделю" />
        <div className={infoPart}>
          <div className={captionsBlock}>
            <Caption title="День" />
            <Caption title="Температура" customClassName={tempCaption} />
            <Caption title="Осадки" customClassName={precipitationCaption} />
            <Caption title="Ветер" customClassName={windCaption} />
          </div>
          {getWeeklyDate().map((elem, index) => {
            return (
              <WeeklyListItem
                key={`${elem.day}${elem.date}`}
                day={elem.day}
                date={elem.date}
                temperature={`${this.props.weeklyWeather[index].temp}℃`}
                precipitation={`${this.props.weeklyWeather[index].pop}%`}
                wind={`${this.props.weeklyWeather[index].wind_spd.toFixed(
                  1
                )}м/c`}
                weatherIconCode={this.props.weeklyWeather[index].weather.icon}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default WeekWeather;
