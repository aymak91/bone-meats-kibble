import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import CreateDogFormContainer from "../dogs/dog_create_container";
// import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateModal: false,
    };
    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }
  toggleCreateModal() {
    this.setState({
      showCreateModal: !this.state.showCreateModal,
    });
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/dogs"}>All Dogs</Link>
          <Link to={"/profile"}>Profile</Link>
          <span onClick={this.toggleCreateModal}>Write a Dog</span>
          <Link to={"/search"}>Search</Link>
          <button onClick={this.logoutUser}>Logout</button>

          <Modal
          className=""
          isOpen={this.state.showCreateModal}
          onRequestClose={this.toggleCreateModal}
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
          <CreateDogFormContainer closeModal={this.toggleCreateModal} />
          <label onClick={this.toggleCreateModal}>BACK</label>
        </Modal>
        </div>
      );
    } else {
      return (
        <ul className="nav-links">
          <li>
           <Link to={"/signup"}>Signup</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="nav">
        <h1 className="title">BoneMeatsKibble</h1>
          {this.getLinks()}
      </div>
    );
  }
}



export default NavBar;
