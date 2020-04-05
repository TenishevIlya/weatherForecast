import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IHeaderLink } from "./HeaderLink.type";

import HeaderLinkStyle from "./HeaderLink.style";

class HeaderLink extends Component<IHeaderLink> {
  render() {
    return (
      <Link to="/" className={HeaderLinkStyle}>
        {this.props.title}
      </Link>
    );
  }
}

export default HeaderLink;
