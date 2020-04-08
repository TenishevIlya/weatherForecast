import React, { Component } from "react";
import TodaysWeatherStyle from "./TodaysWeather.style";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import store from "../../store/store";
import Caption from "../../components/Caption/Caption";
import { ITodaysWeatherState } from "./TodaysWeather.type";
import Input from "../../components/Input/Input";

import Location from "../../img/location.svg";

const {
  commonTodaysWeather,
  searchCityContainer,
  searchCityCaption,
  searchCityLogo,
} = TodaysWeatherStyle;

class TodaysWeather extends Component<{}, ITodaysWeatherState> {
  constructor(props: any) {
    super(props);

    this.state = {
      countClicks: 0,
    };
    this.handleInputOpen = this.handleInputOpen.bind(this);
    this.handleInputClosed = this.handleInputClosed.bind(this);
  }

  handleInputOpen = () => {
    this.setState({
      countClicks: this.state.countClicks + 1,
    });
  };

  handleInputClosed = (event: any) => {
    event.target.placeholder
      ? this.setState({ countClicks: this.state.countClicks })
      : this.setState({ countClicks: this.state.countClicks + 1 });
  };

  render() {
    return (
      <div className={commonTodaysWeather} onClick={this.handleInputClosed}>
        {this.state.countClicks !== 0 && this.state.countClicks % 2 !== 0 ? (
          <Input placeholder="Введите город" />
        ) : (
          <SectionHeader title={`Погода в ${store.getState().city}`} />
        )}
        <div className={searchCityContainer} onClick={this.handleInputOpen}>
          <img src={Location} className={searchCityLogo} />
          <Caption
            customClassName={searchCityCaption}
            title="Поиск города или места"
          />
        </div>
      </div>
    );
  }
}

export default TodaysWeather;
