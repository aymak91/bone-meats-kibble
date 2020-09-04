import React from "react";

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
                    No matches lmao
                </div>
            )
        }

        return (
          <div>
                <h1>Matches for {currentDog.name}!</h1>
                <h2>time to bone</h2>
                {/* <img src={`${currentDog.imageURL}`} /> */}
                {matches.map((match) => (
                <div>
                    <ul>
                    <li>{match.name}</li>
                    <li>{match.breed}</li>
                    <li>{match.description}</li>
                    <li>{match.birthDate}</li>
                    <li>{match.size}</li>
                    <li>{match.gender}</li>
                    <li>{match.activeness}</li>
                    <li>{match.personality}</li>
                    </ul>
                    <button>Message</button>
                    <button
                    onClick={() => this.handleDelete(currentDogId, match._id)}
                    >
                    Delete Match
                    </button>
                </div>
                ))}
          </div>
        );
    }
}

export default Matches