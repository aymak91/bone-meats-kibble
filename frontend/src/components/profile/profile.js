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
    this.props.fetchUserDogs(this.props.currentUser.id);
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
              name={dog.name}
              description={dog.description}
              breed={dog.breed}
              birthDate={dog.birthDate}
              size={dog.size}
              gender={dog.gender}
              activeness={dog.activeness}
              personality={dog.personality}
            />
          ))}
        </div>
      );
    }
  }
}

export default Profile;
