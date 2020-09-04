import React from "react";
import DogBox from "../dogs/dog_box";


class Profile extends React.Component {
  // _isMounted = false;
  
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    // this._isMounted = true;
    this.props.fetchUserDogs(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ dogs: newState.dogs });
  }


  render() {
    if (this.state.dogs.length === 0) {
      return null;
    } else {
      return (
        <div>
          <h2>All of This User's Dogs</h2>
          {this.state.dogs.map((dog) => (
            <div>
              <DogBox
                  key={dog.id}
                  dog={dog}
                  destroyDog={this.props.destroyDog}
              />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Profile;
