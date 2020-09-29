import React, {useState} from "react";
import Modal from "react-modal";
import UpdateDogFormContainer from "../profile/update_dog_container";
import { Link } from "react-router-dom";
import Moment from "moment";

class DogBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
    };
    this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleUpdateModal() {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
    });
  }

  async handleDelete() {
    if (!(await this.props.currentUser)) return null;
    await this.props.destroyDog(this.props.dog._id);
    await this.props.fetchUserDogs(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="individual-dog">
        <div className="individual-dog-header">
          <div className="dog-container-name">{this.props.dog.name}</div>
          <div>{this.props.dog.breed}</div>
        </div>
        <img src={`${this.props.dog.imageURL}`} alt="" />
        <div className="dog-buttons">
          <div className="first-three-dog-buttons">
            <div className="tooltip">
              <span onClick={this.toggleUpdateModal} class="fas fa-edit"></span>
              <span class="tooltiptext">Edit Doggo</span>
            </div>
            <div className="tooltip">
              <span
                onClick={this.handleDelete}
                class="fas fa-trash-alt"
              ></span>
              <span class="tooltiptext">Delete Doggo</span>
            </div>
            <div className="tooltip">
              <Link
                to={`/${this.props.dog._id}/matches`}
                class="fas fa-fire"
              ></Link>
              <span class="tooltiptext">View Matches</span>
            </div>
          </div>
          <Link
            to={`/${this.props.dog._id}/possible_matches`}
            className="start-matching-button"
          >
            Start Matching
          </Link>
        </div>
        <ul className="dog-description-container">
          {/* <ul>
            <h3>Description</h3>
          </ul> */}
          <li className="dog-attributes">
            <h1>Description:</h1> <p>{this.props.dog.description}</p>
          </li>
          <li className="dog-attributes">
            <h1>Birth Date:</h1>{" "}
            <p>{Moment(this.props.dog.birthDate).utc().format("MMM Do YYYY")}</p>
          </li>
          <li className="dog-attributes">
            <h1>Size:</h1> <p>{this.props.dog.size}</p>
          </li>
          <li className="dog-attributes">
            <h1>Gender:</h1> <p>{this.props.dog.gender}</p>
          </li>
          <li className="dog-attributes">
            <h1>Activeness:</h1> <p>{this.props.dog.activeness}</p>
          </li>
          <li className="dog-attributes">
            <h1>Personality:</h1> <p>{this.props.dog.personality}</p>
          </li>
        </ul>
        {/* <Link to>Start Matching</Link> */}
        <Modal
          className=""
          isOpen={this.state.showUpdateModal}
          onRequestClose={this.toggleUpdateModal}
          ariaHideApp={false}
          style={{
            content: {
              transform: "translate(-50%, 0%)",
              // top: "20%",
              left: "50%",
              // right: "0",
              bottom: "50%",
              overflow: "scroll",
              width: "490px",
              height: "700px",
              background: "rgb(255, 255, 255)",
            },
            overlay: {
              position: "fixed",
              backgroundColor: "rgba(0,0,0,0.7)",
              zIndex: "50",
            },
          }}
        >
          <UpdateDogFormContainer
            dog={this.props.dog}
            dogId={this.props.dog._id}
            closeModal={this.toggleUpdateModal}
          />
        </Modal>
      </div>
    );
  }
}

export default DogBox;
