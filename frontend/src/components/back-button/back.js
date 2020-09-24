import React from "react";
import { withRouter } from "react-router";

class BackButton extends React.Component {
  constructor(props) {
    super(props);

    // this.goBack = this.goBack.bind(this);
  }

//   goBack() {
//     this.props.history.back();
//   }

  render() {
    return (
    //   <button className="back-button" onClick={() => this.goBack()}>
      <button className="back-button" onClick={this.props.history.goBack}>
        <i class="fas fa-long-arrow-alt-left"></i> Previous Page{" "}
      </button>
    );
  }
}

export default withRouter(BackButton);