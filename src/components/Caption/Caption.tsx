import React, { Component } from "react";
import { ICaptionProps } from "./Caption.type";
import CaptionStyle from "./Caption.style";

const { commonCaption } = CaptionStyle;

class Caption extends Component<ICaptionProps> {
  render() {
    return <span className={commonCaption}>{this.props.title}</span>;
  }
}

export default Caption;
