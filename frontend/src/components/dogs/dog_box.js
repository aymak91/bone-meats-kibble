import React from "react";

class DogBox extends React.Component {
  render() {
    return (
      <div>
          <ul>
              <li>{this.props.breed}</li>
              <li>{this.props.description}</li>
              <li>{this.props.birthDate}</li>
              <li>{this.props.size}</li>
              <li>{this.props.gender}</li>
              <li>{this.props.activeness}</li>
              <li>{this.props.personality}</li>
          </ul>
      </div>
    );
  }
}

export default DogBox;
