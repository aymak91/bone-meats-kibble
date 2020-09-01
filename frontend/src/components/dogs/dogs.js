import React from "react";
import { withRouter } from "react-router-dom";
import DogBox from "./dog_box";

class Dog extends React.Component {
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
                breed = {this.props.breed} 
                description = {this.props.description} 
                birthDate = {this.props.birthDate} 
                size = {this.props.size} 
                gender = {this.props.gender} 
                activeness = {this.props.activeness} 
                personality = {this.props.personality} 
            />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Dog);
