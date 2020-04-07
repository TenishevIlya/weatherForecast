import React, { Component } from "react";
import { ICaptionProps } from "./Caption.type";
import CaptionStyle from "./Caption.style";
import classnames from "classnames";

const { commonCaption } = CaptionStyle;

class Caption extends Component<ICaptionProps> {
  render() {
    return (
      <span className={classnames(commonCaption, this.props.customClassName)}>
        {this.props.title}
      </span>
    );
  }
}

export default Caption;
