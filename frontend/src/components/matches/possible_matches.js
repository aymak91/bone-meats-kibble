import React from "react";
import Modal from "react-modal";
// import PendingMatchesContainer from "./pending_matches_container";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Moment from 'moment'
import NavBarContainer from "../nav/navbar_container";
import BackButton from "../back-button/back"

class PossibleMatches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      possibleMatches: [], //returns array of possible match documents (objects) that we need to key into
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
        <NavBarContainer />
        <div className="search-bgd">
        <BackButton />
          <div className="search-bar">
            <div className="search-option-container">
              <label className="select-label"> Gender </label>
              <select
                className="select"
                value={this.state.gender}
                onChange={this.switchOptions("gender")}
              >
                <option value=""> - </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="search-option-container">
              <label className="select-label"> Breed </label>
              <select
                className="select"
                value={this.state.breed}
                onChange={this.switchOptions("breed")}
              >
                <option value=""> - </option>
                <option value="Akita">Akita</option>
                <option value="Alaskan Malamute">Alaskan Malamute</option>
                <option value="American Bulldog">American Bulldog</option>
                <option value="American Pitbull">American Pitbull</option>
                <option value="American Staffordshire Terrier">
                  American Staffordshire Terrier
                </option>
                <option value="Austrialian Sheperd">
                  Austrialian Shepherd
                </option>
                <option value="Beagle">Beagle</option>
                <option value="Blue Heeler Mix">Blue Heeler Mix</option>
                <option value="Border Collie">Border Collie</option>
                <option value="Boxer">Boxer</option>
                <option value="Bulldog">Bulldog</option>
                <option value="Cavalier King Charles Spaniel">
                  Cavalier King Charles Spaniel
                </option>
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
                <option value="Persian Yellow Mongrel">
                  Persian Yellow Mongrel
                </option>
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
            </div>
            <div className="search-option-container">
              <label className="select-label"> Size </label>
              <select
                className="select"
                value={this.state.size}
                onChange={this.switchOptions("size")}
              >
                <option value=""> - </option>
                <option value="Smol"> Smol </option>
                <option value="Small"> Small </option>
                <option value="Medium"> Medium </option>
                <option value="Large"> Large </option>
                <option value="Big Boi"> Big Boi </option>
              </select>
            </div>
            <div className="search-option-container">
              <label className="select-label"> Activeness </label>
              <select
                className="select"
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
            </div>
            <div className="search-option-container">
              <label className="select-label"> Personality </label>
              <select
                className="select"
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
          </div>
          <div className="sub-header">
            <Link to={`/${this.props.currentDogId}/pending_matches`}>
              View Pending Matches
            </Link>
            <h1>Find a match for {currentDog.name}</h1>
            <h1 className="dog-search-header">Dogs near you</h1>
          </div>
          <ul className="dog-index">
            {compat_dogs.map((dog) => (
                <li className="dog-index-item-sub-container">
                  <ul className="dog-index-item">
                    <div className="individual-dog-header" id="idv-dog-header">
                      <div className="dog-container-name"> {dog.name} </div>
                      <div>{dog.breed}</div>
                    </div>
                    {/* <li className="dog-name">
                      {dog.name}
                      <br />
                      Age: {Moment().diff(dog.birthDate, "years")}
                      <br />
                    </li> */}

                    <img className="match-image" src={`${dog.imageURL}`} />
                    <div className="dog-description-container">
                      <li className="dog-attributes-description">
                        <h1>Description: </h1>{" "}
                        <p className="dog-profile-description">{dog.description}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Birth Date:</h1>{" "}
                        <p>
                          {Moment(dog.birthDate).format(
                            "MMM Do YYYY"
                          )}
                        </p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Size:</h1> <p>{dog.size}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Gender:</h1> <p>{dog.gender}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Activeness:</h1> <p>{dog.activeness}</p>
                      </li>
                      <li className="dog-attributes">
                        <h1>Personality:</h1>{" "}
                        <p>{dog.personality}</p>
                      </li>
                    </div>
                    <br />
                    <div className="possible-match-buttons">
                      <span
                        onClick={() => this.handleRequest(dog._id)}
                        class="fas fa-heart"
                      ></span>
                      <span
                        onClick={() => this.handleReject(dog._id)}
                        class="fas fa-times"
                      ></span>
                    </div>
                  </ul>
                </li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    );
  }
}

export default PossibleMatches;



