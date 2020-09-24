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
        <div className="navbar-links">
          {/* <Link to={"/dogs"}>All Dogs</Link> */}
          <div className="tooltip">
            <Link to={"/profile"} className="profile-icon" class="fas fa-user-circle" ></Link>
            <span className="navbartooltiptext">Profile</span>
          </div>
          <div className="tooltip">

            <span onClick={this.toggleCreateModal} class="fas fa-plus"></span>
            <span className="navbartooltiptext">Create a Doggo</span>
          </div>
          {/* <Link to={"/search"} class="fas fa-search"></Link> */}
          <div className="tooltip">
            <span onClick={this.logoutUser} class="fas fa-sign-out-alt"></span>
            <span className="navbartooltiptext">Logout</span>
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
        <div className="navbar-title">
          <Link
            to={"/profile"}
          >BoneMeatsKibble</Link>
        </div>
        {this.getLinks()}
      </div>
    );
  }
}



export default NavBar;
