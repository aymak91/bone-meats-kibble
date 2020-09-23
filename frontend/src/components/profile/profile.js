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

  // componentWillReceiveProps(newState) {
  //   // this.props.fetchUserDogs(this.props.currentUser.id);
  //   this.setState({ dogs: newState.dogs });
  // }

  async componentDidUpdate(prevProps) {
    if (!this.props.dogs) return null;
    if (this.state.dogs.length === 0) return null;

    if ((await prevProps.dogs.length) !== this.props.dogs.length) {
      await this.props.fetchUserDogs(this.props.currentUser.id);
      await this.setState({dogs: this.props.dogs})
    }

    // if ((await prevProps.dogs.length) !== this.props.dogs.length) {
    //   await this.props.fetchUserDogs(this.props.currentUser.id);
    //   await this.setState({dogs: this.props.dogs})
    // }
  }

  render() {
    console.log(this.state.dogs)
    console.log(this.props.dogs)
    
    if (this.state.dogs.length === 0) {
      return null;
    } 
    
    return (
        <div>
          <NavBarContainer />
          <div className="dog-profile-container-container">
            <h1 className="profile-header">My Profile</h1>
            <div className="dogs-profile-container">
              {/* <h2>All of This User's Dogs</h2> */}
              {this.state.dogs.map((dog) => (
                <DogBox
                  key={dog.id}
                  dog={dog}
                  destroyDog={this.props.destroyDog}
                />
              ))}
            </div>
          </div>
        </div>
      );
  }


}

export default Profile;
