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

  // componentWillMount() {
  //   fetch(
  //     `https://api.weatherbit.io/v2.0/forecast/daily?city=Saransk,Russia&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru`
  //   )
  //     .then((res: Response) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const forecast = data.data.slice(0, 7);
  //       this.setState({ data: forecast });
  //     });
  // }

  // render() {
  //   return (
  //     <div className={commonWeeklyStyle}>
  //       <SectionHeader title="Погода на неделю" />
  //       <div className={infoPart}>
  //         <div className={captionsBlock}>
  //           <Caption title="День" />
  //           <Caption title="Температура" customClassName={tempCaption} />
  //           <Caption title="Осадки" customClassName={precipitationCaption} />
  //           <Caption title="Ветер" customClassName={windCaption} />
  //         </div>
  //         {this.state.data.length !== 0
  //           ? getWeeklyDate().map((elem, index) => {
  //               return (
  //                 <WeeklyListItem
  //                   key={`${elem.day}${elem.date}`}
  //                   day={elem.day}
  //                   date={elem.date}
  //                   temperature={`${this.state.data[index].temp}℃`}
  //                   precipitation={`${this.state.data[index].pop}%`}
  //                   wind={`${this.state.data[index].wind_spd.toFixed(1)}м/c`}
  //                   weatherIconCode={this.state.data[index].weather.icon}
  //                 />
  //               );
  //             })
  //           : null}
  //       </div>
  //     </div>
  //   );
  // }
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
