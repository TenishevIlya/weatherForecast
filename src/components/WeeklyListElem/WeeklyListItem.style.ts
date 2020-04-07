import { style } from "typestyle";

const WeeklyItemStyle = {
  commonStyle: style({
    display: "flex",
    //justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #EAEAEA",
    //borderBottom: "1px solid #EAEAEA",
    height: "9vh",

    $nest: {
      "&:hover": {
        background: "#F4F4F4",
      },
    },
  }),
  dateStyle: style({
    display: "flex",
    marginLeft: "20px",
    alignItems: "center",
    width: "10vw",
  }),
  dateName: style({
    display: "flex",
    flexDirection: "column",
  }),
  logo: style({
    width: "30px",
    height: "30px",
    margin: "0 0 0 auto",
  }),
  commonContainer: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "7vw",
    fontFamily: "Open Sans",
    // border: "1px solid black",
  }),
};

export default WeeklyItemStyle;
