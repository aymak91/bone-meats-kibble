import React from "react";
import DogBox from "../dogs/dog_box";
import NavBarContainer from "../nav/navbar_container";
import Modal from "react-modal";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      showDogModal: false,
    };
    this.toggleDogModal = this.toggleDogModal.bind(this);
  }
  toggleDogModal() {
    this.setState({
      showDogModal: !this.state.showDogModal,
    });
  }
  componentDidMount() {
    this.props.fetchUserDogs(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.props.fetchUserDogs(this.props.currentUser.id);
    this.setState({ dogs: newState.dogs });
  }

  render() {
    if (this.state.dogs.length === 0) {
      return null;
    } else {
      return (
        <div>
          <NavBarContainer />
          <div className="dog-profile-container-container">
            <div className="dogs-profile-container">
              
              {this.state.dogs.map((dog) => (
                <div className="dogurl">
                  <a href={`/api/dogs/${dog.id}`}>
                    <img
                    src={`${dog.imageURL}`}
                    alt=""
                    />
                  </a>
  

                </div>

              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
