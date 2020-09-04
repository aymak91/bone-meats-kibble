import React from "react";


class UpdateDogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.dog.name,
      description: this.props.dog.description,
      breed: this.props.dog.breed,
      birthDate: this.props.dog.birthDate,
      size: this.props.dog.size,
      gender: this.props.dog.gender,
      activeness: this.props.dog.activeness,
      personality: this.props.dog.personality,
      newDog: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   componentWillReceiveProps(nextProps) {
  //     this.setState({ newDog: nextProps.newDog.text });
  //   }

  handleSubmit(e) {
    e.preventDefault();

    const dog = Object.assign({}, this.state);
    this.props.patchDog(dog, this.props.dogId);
    this.props.closeModal();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    console.log(this.state)
    // console.log(this.props)
    return (
      <div>        
        <form onSubmit={this.handleSubmit} >
          <div>
            <input
              type="textarea"
              value={this.state.name }
              onChange={this.update("name")}
              // placeholder={this.props.dog.name}
            />
            <br />
            <input
              type="textarea"
              value={this.state.description }
              onChange={this.update("description")}
              // placeholder={this.props.dog.description}
            />
            <br />
            <select
              className="breed"
              value={this.state.breed }
              onChange={this.update("breed")}
            >
              <option value={this.props.dog.breed}> {this.props.dog.breed} </option>
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
            <br />
            <input
              type="textarea"
              value={this.state.birthDate }
              onChange={this.update("birthDate")}
              // placeholder={`${this.props.dog.birthDate}`}
            />
            <br />
            <select
              className="size"
              value={this.state.size }
              onChange={this.update("size")}
              >
              <option value={`${this.props.dog.size}`}> {`${this.props.dog.size}`} </option>
              <option value="Smol"> smol </option>
              <option value="Small"> small </option>
              <option value="Medium"> Medium </option>
              <option value="Large"> Large </option>
              <option value="Big Boi"> Big Boi </option>
            </select>            
            <br />
            <select
              className="gender"
              value={this.state.gender}
              onChange={this.update("gender")}
            >
              <option value={this.props}> Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>            
            <br />
            <select
              className="activeness"
              value={this.state.activeness}
              onChange={this.update("activeness")}
            >
              <option value={this.props.dog.activeness}> { this.props.dog.activeness } </option>
              <option value="Lazy">Lazy</option>
              <option value="Low">Low</option>
              <option value="Normal"> Normal </option>
              <option value="High"> High </option>
              <option value="Hyperactive"> Hyperactive</option>
            </select>            
            <br />
            <select
              className="personality"
              value={this.state.personality }
              onChange={this.update("personality")}
            >
              <option value={this.props.dog.personality}> {this.props.dog.personality} </option>
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
            <br />
            <input type="submit" value="Submit" />
            <br />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default UpdateDogForm;
