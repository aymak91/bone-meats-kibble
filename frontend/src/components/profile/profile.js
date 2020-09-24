import React from "react";
import DogBox from "../dogs/dog_box";
import NavBarContainer from "../nav/navbar_container";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
    };

  }

  async componentDidMount() {
    await this.props.fetchUserDogs(this.props.currentUser.id);
    await this.setState({dogs: this.props.dogs})
  }

  async componentDidUpdate(prevProps) {
    if ((await prevProps.dogs.length) !== this.props.dogs.length) {
      await this.setState({dogs: this.props.dogs})
    }

    if ((await prevProps.dogs) !== this.props.dogs) {
      await this.setState({dogs: this.props.dogs})
    }
  }

  render() {

    if (!this.state.dogs) return null;
    if (!this.props.dogs) return null;

    if (this.state.dogs.length === 0) {
      return (
        <div>
          <NavBarContainer />
          <div>Add a dog profile</div>
        </div>
      );
    }
    
    return (
        <div>
          <NavBarContainer />
          <div>Add a dog profile</div>
          <div className="dog-profile-container-container">
            <h1 className="profile-header">My Profile</h1>
            <div className="dogs-profile-container">
              {/* <h2>All of This User's Dogs</h2> */}
              {this.state.dogs.map((dog) => (
                <DogBox
                  key={dog._id}
                  dog={dog}
                  destroyDog={this.props.destroyDog}

                  currentUser={this.props.currentUser}
                  fetchUserDogs={this.props.fetchUserDogs}
                />
              ))}
            </div>
          </div>
        </div>
      );
  }


}

export default Profile;
