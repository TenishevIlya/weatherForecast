import React, { Component } from "react";
import { IInputProps, IInputState } from "./Input.type";
import SearchLogo from "../../img/search.svg";

import InputStyle from "./Input.style";
import store from "../../store/store";
import { GET_CURRENT_CITY } from "../../store/actions";
const { commonInput, inputContainer, searchLogo } = InputStyle;

class Input extends Component<IInputProps, IInputState> {
  constructor(props: any) {
    super(props);

    this.state = {
      newCity: "",
    };
  }

  render() {
    return (
      <div className={inputContainer}>
        <img
          src={SearchLogo}
          className={searchLogo}
          onClick={() => {
            store.dispatch(GET_CURRENT_CITY(this.state.newCity));
          }}
        />
        <input
          className={commonInput}
          placeholder={this.props.placeholder}
          onChange={(event) => this.setState({ newCity: event.target.value })}
        />
      </div>
    );
  }
}

export default Input;
