import React from "react";
import { withRouter } from "react-router-dom";
// import DogBox from "./dog_box";

class Dogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
    };
  }

  componentWillMount() {
    this.props.fetchDogs();
  }

  componentWillReceiveProps(newState) {
    this.setState({ dogs: newState.dogs });
  }

  render() {
    if (this.state.dogs.length === 0) {
      return <div>There are no dogs</div>;
    } else {
      return (
        <div>
          <h2>All Dogs</h2>
          {this.state.dogs.map((dog) => (
            // <DogBox key={dog._id} dog={dog} />
            <ul>
              <li>{dog.name}</li>
              <li>{dog.breed}</li>
              <li>{dog.description}</li>
              <li>{dog.birthDate}</li>
              <li>{dog.size}</li>
              <li>{dog.gender}</li>
              <li>{dog.activeness}</li>
              <li>{dog.personality}</li>
            </ul>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Dogs);
