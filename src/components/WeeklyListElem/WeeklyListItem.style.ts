import { style } from "typestyle";

const WeeklyItemStyle = {
  commonStyle: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #EAEAEA",
    //borderBottom: "1px solid #EAEAEA",
    height: "9vh",
  }),
  dateStyle: style({
    display: "flex",
    marginLeft: "20px",
  }),
  dateName: style({
    display: "flex",
    flexDirection: "column",
  }),
};

export default WeeklyItemStyle;
