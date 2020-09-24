import React from "react";
import { Link } from "react-router-dom";
// import MessagesContainer from "../messages/messages_container"
import NavBarContainer from "../nav/navbar_container";
import Moment from "moment";

class Matches extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
            currentDogId: "",
            currentDog: {},
        };

    }

    async componentDidMount() {
        await this.props.fetchMatches();
        await this.props.fetchCurrentDog();
        await this.setState({ matches: this.props.matches })
        await this.setState({ currentDogId: this.props.currentDogId })
        await this.setState({ currentDog: this.props.currentDog });
    }

    async componentDidUpdate(prevProps) {
        if (!this.props.matches) return null;
        if (this.state.matches.length === 0) return null;

        if (await prevProps.matches.length !== this.props.matches.length) {
            await this.props.fetchMatches();
            this.setState({ matches: this.props.matches })
        }
    }

    async handleDelete(dogId, rejectedDogId) {
        await this.props.decreaseMatches(dogId, rejectedDogId)
        await this.props.decreaseMatches(rejectedDogId, dogId)
        this.props.fetchMatches();
    }

    render() {
        if (!this.props.matches) return null;
        if (this.state.matches.length === 0) return null;

        const matches = this.state.matches[0].matches;
        const currentDogId = this.state.currentDogId;
        const currentDog = this.state.currentDog;
        
        if (matches.length === 0) {
            return (
              <div>
                <NavBarContainer />
                <div className="no-matches-container">
                  <h1 className="no-matches-header">This dog has no matches</h1>
                  <div className="matches-link-container">
                    <Link
                      to={`/${currentDogId}/possible_matches`}
                      className="matches-link"
                    >
                      Start Matching
                    </Link>
                  </div>
                </div>
              </div>
            );
        }

        return (
          <div>
            <NavBarContainer />
            <div className="dog-profile-container-container">
              <h1 className="profile-header">My Matches</h1>
              <div className="dogs-profile-container">
                {matches.map((match) => (
                  <div className="individual-dog">
                    <div className="individual-dog-header">
                      <div className="dog-container-name">{match.name}</div>
                      <div>{match.breed}</div>
                    </div>
                    <img src={`${match.imageURL}`} />
                    <div className="dog-buttons">
                      <div className="first-three-dog-buttons">
                        <div className="tooltip">
                          <Link
                            to={`/messages/${currentDogId}/${match._id}/`}
                            className="message-button"
                            class="fas fa-comment"
                          ></Link>
                          <span class="tooltiptext">Message</span>
                        </div>
                        <div className="tooltip">
                          <span
                            onClick={() =>
                              this.handleDelete(currentDogId, match._id)
                            }
                            class="fas fa-times"
                          ></span>
                          <span class="tooltiptext">Unmatch</span>
                        </div>
                      </div>
                    </div>
                    <ul className="dog-description-container">
                      <li className="dog-attributes">
                        <h1>Description:</h1> <p>{match.description}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Birth Date:</h1>{" "}
                        <p>{Moment(match.birthDate).format("MMM Do YYYY")}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Size:</h1> <p>{match.size}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Gender:</h1> <p>{match.gender}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Activeness:</h1> <p>{match.activeness}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Personality:</h1> <p>{match.personality}</p>
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

export default Matches