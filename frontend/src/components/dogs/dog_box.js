import React from "react";
import Modal from "react-modal";
import UpdateDogFormContainer from "../profile/update_dog_container";
import { Link } from "react-router-dom";

class DogBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
    };
    this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
  }
  toggleUpdateModal() {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
    });
  }
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.dog.name}</li>
          <li>{this.props.dog.breed}</li>
          <li>{this.props.dog.description}</li>
          <li>{this.props.dog.birthDate}</li>
          <li>{this.props.dog.size}</li>
          <li>{this.props.dog.gender}</li>
          <li>{this.props.dog.activeness}</li>
          <li>{this.props.dog.personality}</li>
        </ul>
        <span onClick={this.toggleUpdateModal}>Update Dog</span>
        <button onClick={() => this.props.destroyDog(this.props.dog._id)}>Delete Dog</button>
        <Link to={`/${this.props.dog._id}/possible_matches`}>Start Matching</Link>
        <Link to={`/${this.props.dog._id}/matches`}>Matches</Link>
        {/* <Link to>Start Matching</Link> */}
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
          <UpdateDogFormContainer dog={this.props.dog} dogId={this.props.dog._id} closeModal={this.toggleUpdateModal} />
          <label onClick={this.toggleUpdateModal}>BACK</label>
        </Modal>
      </div>
    );
  }
}

export default DogBox;
