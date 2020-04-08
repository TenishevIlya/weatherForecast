import React, { Component } from "react";
import WeeklyWeather from "../WeekWeather/WeeklyWeather";
import TodaysWeather from "../TodaysWeather/TodaysWeather";

import { IMainState } from "./Main.type";

import MainStyle from "./Main.style";
import store from "../../store/store";
import { GET_WEATHER_INFO, GET_CURRENT_CITY } from "../../store/actions";
const { commonMain, sectionStyle } = MainStyle;

class Main extends Component<{}, IMainState> {
  constructor(props: any) {
    super(props);

    this.state = {
      city: "",
      weeklyWeather: [],
      getInfo: false,
    };
  }

  componentWillMount() {
    store.dispatch(GET_CURRENT_CITY("Tokyo"));
    const currentCity = store.getState().city;
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${currentCity}&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru`
    )
      .then((res: Response) => {
        return res.json();
      })
      .then((data) => {
        const forecast = data.data.slice(0, 7);
        store.dispatch(GET_WEATHER_INFO(forecast, "WEEKLY_INFO"));
        this.setState({
          city: store.getState().city,
          weeklyWeather: store.getState().weeklyInfo,
          getInfo: true,
        });
        //console.log(data);
        //console.log(store.getState());
        // this.setState({ data: forecast });
      });
  }

  render() {
    return (
      <div className={commonMain}>
        <TodaysWeather />
        {this.state.getInfo ? (
          <WeeklyWeather
            city={this.state.city}
            weeklyWeather={this.state.weeklyWeather}
          />
        ) : null}
        {/* // <WeeklyWeather
        //   city={this.state.city}
        //   weeklyWeather={this.state.weeklyWeather}
        // /> */}
      </div>
    );
  }
}

export default Main;
