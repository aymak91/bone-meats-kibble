import React from "react";

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
                <h1>These dogs want to match with {currentDog.name}!</h1>
                {/* <img src={`${currentDog.imageURL}`} /> */}
                <div>
                    {pendingMatches.map((pendingMatch) => (
                        <div>
                            <ul>
                                <li>{pendingMatch.name}</li>
                                <li>{pendingMatch.breed}</li>
                                <li>{pendingMatch.description}</li>
                                <li>{pendingMatch.birthDate}</li>
                                <li>{pendingMatch.size}</li>
                                <li>{pendingMatch.gender}</li>
                                <li>{pendingMatch.activeness}</li>
                                <li>{pendingMatch.personality}</li>
                            </ul>
                            <button onClick={() => this.handleAccept(currentDogId, pendingMatch._id)}>Match</button>
                            <button onClick={() => this.handleReject(pendingMatch._id)}>Fuck Off</button>   
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}

export default PendingMatches