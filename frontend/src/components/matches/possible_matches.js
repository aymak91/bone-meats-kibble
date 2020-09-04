import React from "react";
import Modal from "react-modal";
import PendingMatchesContainer from "./pending_matches_container";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class PossibleMatches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      possibleMatches: [], //returns mongodb array that we can only key into when it is set to state
      possibleMatchesExtracted: [], //possible matches array that is rendered
      currentDog: {},
      gender: '',
      breed: '',
      size: '',
      activeness: '',
      personality: '',
    };

    this.handleRequest = this.handleRequest.bind(this);
    this.handleReject = this.handleReject.bind(this);
    this.switchOptions = this.switchOptions.bind(this)

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
          this.setState({ possibleMatchesExtracted: this.state.possibleMatches[0].possibleMatches })

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

  switchOptions(trait) {
    return e => {
      this.setState({ [trait]: e.currentTarget.value })
    }
  }

  render() {
    if (!this.props.possibleMatches) return null;
    if (this.state.possibleMatches.length === 0) return null;

    // console.log(this.state.possibleMatchesExtracted)

    const possibleMatches = this.state.possibleMatchesExtracted
    const currentDog = this.state.currentDog;
    
    let filtered_gender = possibleMatches
    if (this.state.gender) {
      // console.log(filtered_gender)
      filtered_gender = filtered_gender.filter(dog => {
        return (
          dog.gender === this.state.gender
        )
      })
    }

    let filtered_breed = filtered_gender
    if (this.state.breed) {
      filtered_breed = filtered_breed.filter(dog => {
        return (
          dog.breed === this.state.breed
        )
      })
    }

    let filtered_size = filtered_breed
    if (this.state.size) {
      filtered_size = filtered_size.filter(dog => {
        return (
          dog.size === this.state.size
        )
      })
    }

    let filtered_activeness = filtered_size
    if (this.state.activeness) {
      filtered_activeness = filtered_activeness.filter(dog => {
        return (
          dog.activeness === this.state.activeness
        )
      })
    }

    let filtered_personality = filtered_activeness
    if (this.state.personality) {
      filtered_personality = filtered_personality.filter(dog => {
        return (
          dog.personality === this.state.personality
        )
      })
    }

    let compat_dogs = [];
    Object.keys(filtered_personality).forEach((key) => {
      if (filtered_personality[key].user !== this.props.currentUser) {
        compat_dogs.push(filtered_personality[key]);
      }
    });


    return (
      <div>
          <div className="search-bar">
            <select
              className="gender"
              value={this.state.gender}
              onChange={this.switchOptions("gender")}
            >
              <option value=""> - </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              className="breed"
              value={this.state.breed}
              onChange={this.switchOptions("breed")}
            >
              <option value=""> - </option>
              <option value="Akita">Akita</option>
              <option value="Alaskan Malamute">Alaskan Malamute</option>
              <option value="American Bulldog">American Bulldog</option>
              <option value="American Pitbull">American Pitbull</option>
              <option value="American Staffordshire Terrier">American Staffordshire Terrier</option>
              <option value="Austrialian Sheperd">Austrialian Shepherd</option>
              <option value="Beagle">Beagle</option>
              <option value="Blue Heeler Mix">Blue Heeler Mix</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Boxer">Boxer</option>
              <option value="Bulldog">Bulldog</option>
              <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Chow Chow">Chow Chow</option>
              <option value="Corgi">Corgi</option>
              <option value="Collie">Collie</option>
              <option value="Dachshund">Dachshund</option>
              <option value="Dalmatian">Dalmatian</option>
              <option value="Doberman">Doberman</option>
              <option value="English Setter">English Setter</option>
              <option value="Doberman">Doberman</option>
              <option value="French Bulldog">French Bulldog</option>
              <option value="Doberman">Doberman</option>
              <option value="German Shepard">German Shepard</option>
              <option value="Doberman">Doberman</option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Great Dane">Great Dane</option>
              <option value="Greyhound">Greyhound</option>
              <option value="Jack Russel Terrier">Jack Russel Terrier</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="Maltese">Maltese</option>
              <option value="maltese poodle">maltese poodle</option>
              <option value="Mutt">Mutt</option>
              <option value="Papillion">Papillion</option>
              <option value="Persian Yellow Mongrel">Persian Yellow Mongrel</option>
              <option value="Pomeranian">Pomeranian</option>
              <option value="Pomsky">Pomsky</option>
              <option value="Poodle">Poodle</option>
              <option value="Pug">Pug</option>
              <option value="Rottweiler">Rottweiler</option>
              <option value="Saint Bernard">Saint Bernard</option>
              <option value="Samoyed">Samoyed</option>
              <option value="Sottish Terrier">Scottish Terrier</option>
              <option value="Shiba Inu">Shiba Inu</option>
              <option value="Shih Tzu">Shih Tzu</option>
              <option value="Siberian Husky">Siberian Husky</option>
            </select>
            <select
              className="size"
              value={this.state.size}
              onChange={this.switchOptions("size")}
            >
              <option value=""> - </option>
              <option value="Smol"> smol </option>
              <option value="Small"> small </option>
              <option value="Median"> Median </option>
              <option value="Large"> Large </option>
              <option value="Big Boi"> Big Boi </option>
            </select>
            <select
              className="activeness"
              value={this.state.activeness}
              onChange={this.switchOptions("activeness")}
            >
              <option value=""> - </option>
              <option value="Lazy">Lazy</option>
              <option value="low">Low</option>
              <option value="Normal"> Normal </option>
              <option value="High"> High </option>
              <option value="Hyperactive"> Hyperactive</option>
            </select>
            <select
              className="personality"
              value={this.state.personality}
              onChange={this.switchOptions("personality")}
            >
              <option value=""> - </option>
              <option value="Lonely"> Lonely </option>
              <option value="Brave"> Brave </option>
              <option value="Adamant"> Adamant </option>
              <option value="Bashful"> Bashful </option>
              <option value="Naughty"> Naughty </option>
              <option value="Bold"> Bold </option>
              <option value="Relaxed"> Relaxed </option>
              <option value="Impish"> Impish </option>
              <option value="Lax"> Lax </option>
              <option value="Timid"> Timid </option>
              <option value="Hasty"> Hasty </option>
              <option value="Jolly"> Jolly </option>
              <option value="Naive"> Naive </option>
              <option value="Modest"> Modest </option>
              <option value="Mild"> Mild </option>
              <option value="Quiet"> Quiet </option>
              <option value="Rash"> Rash </option>
              <option value="Calm"> Calm </option>
              <option value="Gentle"> Gentle </option>
              <option value="Sassy"> Sassy </option>
              <option value="Careful"> Careful </option>
            </select>
          </div>

        <Link to={`/${this.props.currentDogId}/pending_matches`}>View Pending Matches</Link>
        <h1>Find a match for {currentDog.name}</h1>
        {/* <img src={`${currentDog.imageURL}`}/> */}
          <h1 className="dog-search-header">Dogs near you</h1>
        <ul className="dog-index" >
          {compat_dogs.map((dog) => (
            <div className="dog-index-item-container">
              <li className="dog-index-item-sub-container" >
                <ul className="dog-index-item">
                  <img className="match-image" src={`${dog.imageURL}`} />
                  <li>{dog.name}</li>
                  <li>{dog.breed}</li>
                  <li>{dog.description}</li>
                  <li>{dog.birthDate}</li>
                  <li>{dog.size}</li>
                  <li>{ dog.gender }</li>
                  <li>{dog.activeness}</li>
                  
                  <br />
                  <li><button onClick={() => this.handleRequest(dog._id)}> Request Match </button></li>
                  <li><button onClick={() => this.handleReject(dog._id)}> Not interested </button></li>
              </ul>
            </li>
            </div>
          ))}
        </ul>
        <br />
      </div>
    );
  }
}

export default PossibleMatches;



