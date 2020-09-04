import React from 'react';
import SearchIndexItem from '../search/search_index_item'

class SearchIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gender: '',
            breed: '',
            size: '',
            activeness: '',
            personality: '',
            compat_dogs: [],
        }
        
        this.switchOptions = this.switchOptions.bind(this)
    }

    

    async componentDidMount() {
        await this.props.fetchUserDogs(this.props.currentUser);
        await this.props.fetchDogs()

        let all_dogs = this.props.dogs;
        // console.log(all_dogs)
        // let compat_dogs = Object.keys.forE(dog => dog.user !== currentUserId)
        let compat_dogs = [];
        Object.keys(all_dogs).forEach((key) => {
            if (all_dogs[key].user !== this.props.currentUser) {
            compat_dogs.push(all_dogs[key]);
            }
        });
        // console.log(compat_dogs)
        this.setState({ compat_dogs: compat_dogs });
    }


    switchOptions(trait) {
        return e => {
            this.setState( { [trait]: e.currentTarget.value })
        }
    }

    render() {
 
    let filtered_gender = this.state.compat_dogs
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
      
      return (
        <div>
          <div>
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
              <option value="Austrialian Sheperd">Austrialian Shepherd</option>
              <option value="Beagle">Beagle</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Boxer">Boxer</option>
              <option value="Bulldog">Bulldog</option>
              <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Chow Chow">Chow Chow</option>
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
              <option value="bashful"> Bashful </option>
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
          <ul>
            {/* {this.state.compat_dogs.map((dog) => ( */}
            {filtered_personality.map((dog) => {

              return <SearchIndexItem dog={dog} key={dog.id} />;
            })}
          </ul>
        </div>
      );
    }
}

export default SearchIndex