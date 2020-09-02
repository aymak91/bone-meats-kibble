import React from "react";
import DogBox from "../dogs/dog_box";
import Modal from "react-modal";
import UpdateDogFormContainer from "./update_dog_container";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      showUpdateModal: false,
    };
    this.toggleUpdateModal = this.toggleUpdateModal(this);
    this.annihilateDog = this.annihilateDog(this);
  }

  componentWillMount() {
    this.props.fetchUserDogs(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ dogs: newState.dogs });
  }

  annihilateDog(dogId) {
    this.props.destroyDog(dogId);
  }

  toggleUpdateModal() {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
    });
  }



  render() {
    if (this.state.dogs.length === 0) {
      return <div>This user has no dogs</div>;
    } else {
      return (
        <div>
          <h2>All of This User's Dogs</h2>
          {this.state.dogs.map((dog) => (
            <div>
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
              <button onClick={() => this.toggleUpdateModal}>Update Dog</button>
              <button onClick={this.annihilateDog(dog._id)}>Delete Dog</button>

              <Modal
                className=""
                isOpen={this.state.showUpdateModal}
                onRequestClose={this.toggleUpdateModal}
                ariaHideApp={false}
                style={{
                  content: {
                    top: "50%",
                    left: "50%",
                    right: "0",
                    bottom: "0",
                    overflow: "hidden",
                    width: "490px",
                    height: "350px",
                    background: "rgb(255, 255, 255)",
                  },
                  overlay: {
                    position: "fixed",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    zIndex: "50",
                  },
                }}
              >
                <UpdateDogFormContainer dogId={dog.id} closeModal={this.toggleUpdateModal} />
                <label onClick={this.toggleUpdateModal}>
                  BACK
                </label>
              </Modal>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Profile;
