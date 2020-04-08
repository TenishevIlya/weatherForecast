import { style } from "typestyle";

const TodaysWeatherStyle = {
  commonTodaysWeather: style({
    height: "78vh",
    width: "35vw",
    background: "#FFFFFF",
    marginRight: "20px",
    paddingTop: "15px",
    display: "flex",
    flexDirection: "column",
  }),
  searchCityContainer: style({
    margin: "10px 0 0 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  }),
  searchCityCaption: style({
    fontSize: "13px",
    lineHeight: "18px",
  }),
  searchCityLogo: style({
    height: "13px",
    width: "13px",
    marginRight: "7px",
  }),
};

export default TodaysWeatherStyle;
