import React from "react";
import { withRouter } from "react-router";

class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="back-button" onClick={this.props.history.goBack}>
        <i className="fas fa-long-arrow-alt-left"></i> Previous Page{" "}
      </button>
    );
  }
}

export default withRouter(BackButton);
