import React from "react";
import Modal from "react-modal";
import PendingMatchesContainer from "./pending_matches_container";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class PossibleMatches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      possibleMatches: [], //returns array of possible match documents (objects) that we need to key into
      possibleMatchesExtracted: [], //possible matches array that is rendered
      currentDog: {},
    };

    this.handleRequest = this.handleRequest.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchPossibleMatches();
    await this.props.fetchCurrentDog();
    await this.setState({possibleMatches: this.props.possibleMatches})
    await this.setState({ possibleMatchesExtracted: this.state.possibleMatches[0].possibleMatches})
    await this.setState({currentDog: this.props.currentDog })
  }

  async componentDidUpdate(prevProps) {
    if (!this.props.possibleMatches) return null;
    if (this.state.possibleMatches.length === 0) return null;

    if (await prevProps.possibleMatches.length !== this.props.possibleMatches.length) {
          await this.props.fetchPossibleMatches();
          this.setState({possibleMatches: this.props.possibleMatches})
          this.setState({ possibleMatchesExtracted: this.state.possibleMatches[0].possibleMatches})
    }
  }

  async handleReject(rejectedDogId) {
    await this.props.decreasePossibleMatches(rejectedDogId);
    this.props.fetchPossibleMatches();
  }

  async handleRequest(requestedDogId) {
    await this.props.increasePendingMatches(requestedDogId);
    await this.props.decreasePossibleMatches(requestedDogId);
    this.props.fetchPossibleMatches();
  }

  render() {
    if (!this.props.possibleMatches) return null;
    if (this.state.possibleMatches.length === 0) return null;

    // console.log(this.state.possibleMatchesExtracted)

    const possibleMatches = this.state.possibleMatchesExtracted
    const currentDog = this.state.currentDog;
    
    return (
      <div>
        <Link to={`/${this.props.currentDogId}/pending_matches`}>View Pending Matches</Link>
        <h1>Find a match for {currentDog.name}</h1>
        {/* <img src={`${currentDog.imageURL}`}/> */}
        <ul>
          <h1>Dogs near you</h1>
          {possibleMatches.map((dog) => (
            <li>
              {/* <img 
                            src={`${dog.imageURL}`}
                        /> */}
              {dog.name}
              <br />
              <button onClick={() => this.handleRequest(dog._id)}>Request Match</button>
              <button onClick={() => this.handleReject(dog._id)}>
                Not interested
              </button>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PossibleMatches;



