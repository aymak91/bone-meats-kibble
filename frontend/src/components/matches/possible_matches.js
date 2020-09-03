import React from "react";


class PossibleMatches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      possibleMatches: [],
      currentDog: "",
    };
    this.handleReject = this.handleReject.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchPossibleMatches();
    if ((await this.state.possibleMatches.length) === 0) {
      this.props.createPossibleMatches();
    }
  }

  componentWillReceiveProps(newState) {
    this.setState({ possibleMatches: newState.possibleMatches[0].possibleMatches });
    this.setState({ currentDog: newState.currentDog});
  }

  // componentWillReceiveProps(newState) {
  //   this.setState({ possibleMatches: newState.possibleMatches[0].possibleMatches });
  //   this.setState({ currentDog: newState.currentDog});
  // }

  async handleReject(rejectedDogId) {
    await this.props.decreasePossibleMatches(rejectedDogId);
    this.props.fetchPossibleMatches();
  }

  render() {
    if (!this.props.possibleMatches) return null;
    console.log(this.state.possibleMatches);
    const possibleMatches = this.state.possibleMatches;

    return (
      <div>
        {/* <h3>Possible Matches for {currentDog.name}</h3> */}
        <ul>
          {possibleMatches.map((dog) => (
            <li>
              {/* <img 
                            src={`${dog.imageURL}`}
                        /> */}
              {dog.name}
              <br />
              <button>Request Match</button>
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



