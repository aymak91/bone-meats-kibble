import React from "react";
import { withRouter } from "react-router-dom";
import DogBox from "./dog_box";

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
            <DogBox key={dog._id} 
                name = {dog.name}
                description = {dog.description} 
                breed = {dog.breed} 
                birthDate = {dog.birthDate} 
                size = {dog.size} 
                gender = {dog.gender} 
                activeness = {dog.activeness} 
                personality = {dog.personality} 
            />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Dogs);
