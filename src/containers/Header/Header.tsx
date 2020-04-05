import React, { Component } from "react";
import HeaderLink from "../../components/HeaderLink/HeaderLink";

import HeaderStyle from "./Header.style";
const { commonHeader, linksContainer } = HeaderStyle;

class Header extends Component {
  render() {
    return (
      <div className={commonHeader}>
        <div className={linksContainer}>
          <HeaderLink title="Сейчас" />
          <HeaderLink title="Сегодня" />
          <HeaderLink title="Завтра" />
        </div>
      </div>
    );
  }
}

export default Header;
