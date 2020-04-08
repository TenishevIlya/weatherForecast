import React, { Component } from "react";
import WeeklyWeather from "../WeekWeather/WeeklyWeather";
import TodaysWeather from "../TodaysWeather/TodaysWeather";

import { createCorrectUrl } from "../../utils/createCorrectHTTP";

import { IMainState } from "./Main.type";

import MainStyle from "./Main.style";
import store from "../../store/store";
import { GET_WEATHER_INFO, GET_CURRENT_CITY } from "../../store/actions";
const { commonMain, sectionStyle } = MainStyle;

class Main extends Component<{}, IMainState> {
  constructor(props: any) {
    super(props);

    this.state = {
      city: store.getState().city,
      weeklyWeather: [],
      getInfo: false,
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges = () => {
    // console.log(store.getState().city);
    // //this.setState({ city: store.getState().city });
    console.log(store.getState().city);
    // //return store.getState().city;
  };

  componentWillMount() {
    // const currentCity = "Saransk";
    // store.subscribe(() => {
    //   //currentCity = store.getState().city
    //   fetch(
    //     //url
    //     `https://api.weatherbit.io/v2.0/forecast/daily?city=${
    //       store.getState().city
    //     },Russia&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru`
    //   )
    //     .then((res: Response) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       const forecast = data.data.slice(0, 7);
    //       store.dispatch(GET_WEATHER_INFO(forecast, "WEEKLY_INFO"));
    //       this.setState({
    //         city: store.getState().city,
    //         weeklyWeather: store.getState().weeklyInfo,
    //         getInfo: true,
    //       });
    //     });
    // });
    let currentCity = store.getState().city;
    // store.subscribe(() => {
    //   this.setState({ city: store.getState().city });
    //   currentCity = store.getState().city;
    //   console.log(currentCity);
    // });
    store.subscribe(this.handleChanges);
    //console.log(city());
    // fetch(
    //   //url
    //   `https://api.weatherbit.io/v2.0/forecast/daily?city=${currentCity},Russia&key=b4ec8173b9de449d9f0c98097fe3f4a8&lang=ru`
    // )
    //   .then((res: Response) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     const forecast = data.data.slice(0, 7);
    //     store.dispatch(GET_WEATHER_INFO(forecast, "WEEKLY_INFO"));
    //     this.setState({
    //       city: store.getState().city,
    //       weeklyWeather: store.getState().weeklyInfo,
    //       getInfo: true,
    //     });
    //   });
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
      </div>
    );
  }
}

export default Main;
