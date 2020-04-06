import { style } from "typestyle";

const WeeklyWeatherStyle = {
  commonWeeklyStyle: style({
    height: "80vh",
    width: "35vw",
    background: "#FFFFFF",
    marginRight: "20px",
    paddingTop: "15px",
  }),
  infoPart: style({
    marginTop: "8vh",
  }),
  captionsBlock: style({
    marginBottom: "10px",
    display: "flex",
    marginLeft: "20px",
    justifyContent: "space-between",
  }),
};

export default WeeklyWeatherStyle;
