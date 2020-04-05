import { style } from "typestyle";

// пофиксить преподнятие ссылок
const HeaderLinkStyle = style({
  fontFamily: "Open Sans, sans-serif",
  textDecoration: "none",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#404064",

  $nest: {
    "&:hover": {
      color: "#6879BB",
      borderBottom: "2px solid #6879BB;",
    },
  },
});

export default HeaderLinkStyle;
