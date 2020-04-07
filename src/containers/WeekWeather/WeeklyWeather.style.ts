import { style } from "typestyle";

const WeeklyWeatherStyle = {
  commonWeeklyStyle: style({
    height: "78vh",
    width: "35vw",
    background: "#FFFFFF",
    marginRight: "20px",
    paddingTop: "15px",
  }),
  infoPart: style({
    marginTop: "6vh",
  }),
  captionsBlock: style({
    marginBottom: "10px",
    display: "flex",
    marginLeft: "20px",
  }),
  tempCaption: style({
    marginLeft: "8.5vw",
  }),
  windCaption: style({
    marginLeft: "4.3vw",
  }),
  precipitationCaption: style({
    marginLeft: "2.6vw",
  }),
};

export default WeeklyWeatherStyle;
