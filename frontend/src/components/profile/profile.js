import React from "react";
import DogBox from "../dogs/dog_box";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    this.props.fetchUserdogs(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ dogs: newState.dogs });
  }

  render() {
    if (this.state.dogs.length === 0) {
      return <div>This user has no dogs</div>;
    } else {
      return (
        <div>
          <h2>All of This User's Dogs</h2>
          {this.state.dogs.map((dog) => (
            <DogBox
              key={dog._id}
              breed={this.props.breed}
              description={this.props.description}
              birthDate={this.props.birthDate}
              size={this.props.size}
              gender={this.props.gender}
              activeness={this.props.activeness}
              personality={this.props.personality}
            />
          ))}
        </div>
      );
    }
  }
}

export default Profile;
