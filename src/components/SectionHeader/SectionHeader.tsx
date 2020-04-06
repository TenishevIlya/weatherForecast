import React, { Component } from "react";
import { ISectionHeaderProps } from "./SectionHeader.type";

import SectionHeaderStyle from "./SectionHeader.style";

class Header extends Component<ISectionHeaderProps> {
  render() {
    return <span className={SectionHeaderStyle}>{this.props.title}</span>;
  }
}

export default Header;
