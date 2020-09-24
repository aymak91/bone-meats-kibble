import React from "react";
import DogBox from "../dogs/dog_box";
import NavBarContainer from "../nav/navbar_container";
import BackButton from "../back-button/back";


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
    if (!this.props.dogs) return null;
    if (this.state.dogs.length === 0) return null;

    if ((await prevProps.dogs.length) !== this.props.dogs.length) {
      await this.setState({dogs: this.props.dogs})
    }

    if ((await prevProps.dogs) !== this.props.dogs) {
      await this.setState({dogs: this.props.dogs})
    }
  }

  render() {
    
    if (this.state.dogs.length === 0) {
      return null;
    } 
    
    return (
        <div>
          <NavBarContainer />
          <div className="dog-profile-container-container">
          <BackButton />
            <div className="dogs-profile-container">
              {/* <h2>All of This User's Dogs</h2> */}
              {this.state.dogs.map((dog) => (
                <DogBox
                  key={dog.id}
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
