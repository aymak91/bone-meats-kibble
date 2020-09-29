import React from "react";
import DogBox from "../dogs/dog_box";
import NavBarContainer from "../nav/navbar_container";
import Modal from "react-modal";
import CreateDogFormContainer from "../dogs/dog_create_container";
import Footer from "../about_page/footer"

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      showCreateModal: false,
    };
    this.toggleCreateModal = this.toggleCreateModal.bind(this);
  }
  toggleCreateModal() {
    this.setState({
      showCreateModal: !this.state.showCreateModal,
    });
  }
  async componentDidMount() {
    await this.props.fetchUserDogs(this.props.currentUser.id);
    await this.setState({ dogs: this.props.dogs });
  }

  async componentDidUpdate(prevProps) {
    if ((await prevProps.dogs.length) !== this.props.dogs.length) {
      await this.setState({ dogs: this.props.dogs });
    }

    if ((await prevProps.dogs) !== this.props.dogs) {
      await this.setState({ dogs: this.props.dogs });
    }
  }

  render() {
    if (!this.state.dogs) return null;
    if (!this.props.dogs) return null;

    return (
      <div>
        <NavBarContainer />
        {/* <div>Add a dog profi ldffafafe</div> */}
        <div className="dog-profile-container-container">
          <div className="profile-header-container">
            <h1 className="profile-header">My dogs</h1>
            <div className="tooltip">
              <span onClick={this.toggleCreateModal} class="fas fa-plus"></span>
              <span className="profiletooltiptext">Create Dog</span>
            </div>
            
            <Modal
              className=""
              isOpen={this.state.showCreateModal}
              onRequestClose={this.toggleCreateModal}
              ariaHideApp={false}
              style={{
                content: {
                  top: "10%",
                  left: "35%",
                  right: "0",
                  bottom: "0",
                  overflow: "scroll",
                  width: "490px",
                  height: "725px",
                  background: "rgb(255, 255, 255)",
                },
                overlay: {
                  position: "fixed",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  zIndex: "50",
                },
              }}
            >
              <CreateDogFormContainer closeModal={this.toggleCreateModal} />
              {/* <label onClick={this.toggleCreateModal}>BACK</label> */}
            </Modal>
          </div>
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
        <Footer />
      </div>
    );
  }
}

export default Profile;
