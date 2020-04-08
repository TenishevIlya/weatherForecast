import { style } from "typestyle";

const InputStyle = {
  commonInput: style({
    background: "#FFFFFF",
    border: "1px solid #D6DCE9",
    boxSizing: "border-box",
    borderRadius: "4px",
    height: "36px",
    width: "31.5vw",
    margin: "0 20px 0 20px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#6879BB",
    padding: "6px 0 6px 35px",
  }),
  inputContainer: style({
    display: "flex",
    alignItems: "center",
  }),
  searchLogo: style({
    position: "absolute",
    marginLeft: "30px",
    height: "19px",
    width: "19px",
  }),
};

export default InputStyle;
