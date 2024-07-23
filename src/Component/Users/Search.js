import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  state = {
    text: "",
  };

  textHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.onAlert("Please Enter A User Name", "light");
    } else {
      this.props.onSearchText(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { onClearUsers, showUsers } = this.props;
    return (
      <>
        <form className="form" onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.textHandler}
          />
          <input type="submit" value="Search" />
        </form>
        {showUsers && <button onClick={onClearUsers}>Clear Users</button>}
      </>
    );
  }
}

Search.propTypes = {
  showUsers: PropTypes.bool.isRequired,
  onClearUsers: PropTypes.func.isRequired,
  onSearchText: PropTypes.func.isRequired,
  onAlert: PropTypes.func.isRequired,
};

export default Search;
