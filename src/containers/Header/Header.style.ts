import { style } from "typestyle";

const HeaderStyle = {
  commonHeader: style({
    height: "8vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
  }),
  linksContainer: style({
    display: "flex",
    justifyContent: "space-between",
    width: "20vw",
  }),
};

export default HeaderStyle;
