import React from "react";
import NavBarContainer from "../nav/navbar_container";
import Moment from "moment";
import BackButton from "../back_button/back_button"

class PendingMatches extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pendingMatches: [],
            currentDogId: "",
            currentDog: {}
        };

        this.handleAccept = this.handleAccept.bind(this)
        this.handleReject = this.handleReject.bind(this)
    }

    async componentDidMount() {
        await this.props.fetchPendingMatches();
        await this.props.fetchCurrentDog();
        await this.setState({ pendingMatches: this.props.pendingMatches })
        await this.setState({ currentDogId: this.props.currentDogId })
        await this.setState({ currentDog: this.props.currentDog })
    }

    async componentDidUpdate(prevProps) {
        if (!this.props.pendingMatches) return null;
        if (this.state.pendingMatches.length === 0) return null;

        if (await prevProps.pendingMatches.length !== this.props.pendingMatches.length) {
            await this.props.fetchPendingMatches();
            this.setState({ pendingMatches: this.props.pendingMatches })
        }
    }

    async handleAccept(currentDogId, acceptedDogId) {
        await this.props.increaseMatches(currentDogId, acceptedDogId);
        await this.props.increaseMatches(acceptedDogId, currentDogId);
        await this.props.decreasePendingMatches(acceptedDogId);
        this.props.fetchPendingMatches();
    }

    async handleReject(rejectedDogId) {
        await this.props.decreasePendingMatches(rejectedDogId);
        //possibly reduce other dog's requested matches later
        this.props.fetchPendingMatches();
    }
    
    render() {
        if (!this.props.pendingMatches) return null;
        if (this.state.pendingMatches.length === 0) return null;

        const pendingMatches = this.state.pendingMatches[0].pendingMatches;
        const currentDogId = this.state.currentDogId;
        const currentDog = this.state.currentDog;

        return (
          <div>
            <NavBarContainer className="navbarcontainer" />
            <div className="dog-profile-container-container">
              <BackButton />
              <h1 className="pending-matches-title">
                Pending Matches for {currentDog.name}
              </h1>
              <div className="dogs-profile-container">
                {pendingMatches.map((pendingMatch) => (
                  <div className="individual-dog">
                    <div className="individual-dog-header">
                      <div className="dog-container-name">
                        {pendingMatch.name}
                      </div>
                      <div>{pendingMatch.breed}</div>
                    </div>
                    <img src={`${pendingMatch.imageURL}`} />
                    <div className="dog-buttons">
                      <div className="first-three-dog-buttons">
                        <div className="tooltip">
                          <span
                            onClick={() =>
                              this.handleAccept(currentDogId, pendingMatch._id)
                            }
                            className="match-heart-button"
                            className="fas fa-heart"
                          ></span>
                          <span className="tooltiptext">Match Doggo</span>
                        </div>
                        <div className="tooltip">
                          <span
                            onClick={() => this.handleReject(pendingMatch._id)}
                            className="fas fa-times"
                          ></span>
                          <span className="tooltiptext">Not Interested</span>
                        </div>
                      </div>
                    </div>
                    <ul className="dog-description-container">
                      <li className="dog-attributes">
                        <h1>Description:</h1> <p>{pendingMatch.description}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Birth Date:</h1>{" "}
                        <p>
                          {Moment(pendingMatch.birthDate).utc().format("MMM Do YYYY")}
                        </p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Size:</h1> <p>{pendingMatch.size}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Gender:</h1> <p>{pendingMatch.gender}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Activeness:</h1> <p>{pendingMatch.activeness}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Personality:</h1> <p>{pendingMatch.personality}</p>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}

export default PendingMatches