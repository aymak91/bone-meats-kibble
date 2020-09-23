import React from "react";
import DogBox from "./dog_box";
import axios from 'axios';


class DogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      breed: "",
      birthDate: "",
      size: "",
      gender: "",
      activeness: "",
      personality: "",
      photoFile: null,
      photoURL: null,
      errors: null,
      newDog: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.switchOptions = this.switchOptions.bind(this)

  }

  switchOptions(trait) {
    return e => {
      this.setState({ [trait]: e.currentTarget.value })
    }
  }

    // componentWillReceiveProps(nextProps) {
    //   this.setState({ newDog: nextProps.newDog.text });
    // }

  componentDidMount() {
    return (
      <div>Dog profile successfully created</div>
    )
  }
  
  async handleSubmit(e) {
    e.preventDefault();

    const formData = await new FormData();
    if (await this.state.photoFile) {
      await formData.append('name', this.state.name);
      await formData.append('description', this.state.description);
      await formData.append('breed', this.state.breed);
      await formData.append('birthDate', this.state.birthDate);
      await formData.append('size', this.state.size);
      await formData.append('gender', this.state.gender);
      await formData.append('activeness', this.state.activeness);
      await formData.append('personality', this.state.personality);
      await formData.append('file', this.state.photoFile);
      await axios.post("/api/dogs/", formData)
        // .then(response => {
        //   if (response.state === 200) {                         //.state or .status are both okay to use
        //     console.log(response.data);
        //   } else {
        //     this.props.history.push('/profile')
        //   }
        // })
        // .catch(errors => this.setState({ errors: errors }));
    };
    
    await this.props.fetchUserDogs(this.props.currentUser.id)
    this.props.closeModal();
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // const dog = {
  //   //   breed: this.state.breed,
  //   //   description: this.state.description,
  //   //   birthDate: this.state.birthDate,
  //   //   size: this.state.size,
  //   //   gender: this.state.gender,
  //   //   activeness: this.state.activeness,
  //   //   personality: this.state.personality
  //   // };
  //   // const dog = Object.assign({}, this.state);
  //   // this.props.createDog(dog);

  //   const formData = new FormData();
  //   if (this.state.photoFile) {
  //     formData.append('name', this.state.name);
  //     formData.append('description', this.state.description);
  //     formData.append('breed', this.state.breed);
  //     formData.append('birthDate', this.state.birthDate);
  //     formData.append('size', this.state.size);
  //     formData.append('gender', this.state.gender);
  //     formData.append('activeness', this.state.activeness);
  //     formData.append('personality', this.state.personality);
  //     formData.append('file', this.state.photoFile);
  //     axios.post("/api/dogs/", formData,
  //       // {headers: {
  //       //   accept: "application/json",
  //       //   "Accept-Language": "en-US,en;q=0.8",
  //       //   "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
  //       //   "Access-Control-Allow-Origin": "*",
  //       // },}
  //     )
  //       .then(response => {
  //         if (response.state === 200) {                         //.state or .status are both okay to use
  //           console.log(response.data);
  //         } else {
  //           this.props.history.push('/profile')
  //         }
  //       })
  //       .catch(errors => this.setState({ errors: errors }));
  //   };
    
  //   this.props.closeModal();
  // }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleUpload(e) {
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];
    fileReader.onloadend = () => {
      this.setState({ photoURL: fileReader.result, photoFile: file });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoFile: null, photoUrl: "" });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="create-form-input-container">
            <h1>Create a Dog</h1>
            <br />
            <span>Name</span>
            <br />
            <input
              type="textarea"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Write your dog name..."
            />
            <br />
            <span>Description</span>
            <br />
            <input
              type="textarea"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Write your dog description..."
            />
            <br />
            <span>Breed</span>
            <br />
            <select
              // className="breed"
              value={this.state.breed}
              onChange={this.switchOptions("breed")}
            >
              <option value=""> Breed </option>
              <option value="Akita">Akita</option>
              <option value="Alaskan Malamute">Alaskan Malamute</option>
              <option value="American Bulldog">American Bulldog</option>
              <option value="American Pitbull">American Pitbull</option>
              <option value="American Staffordshire Terrier">
                American Staffordshire Terrier
              </option>
              <option value="Austrialian Sheperd">Austrialian Shepherd</option>
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

            <br />
            <span>Birth Date</span>
            <br />
            <input
              type="textarea"
              value={this.state.birthDate}
              onChange={this.update("birthDate")}
              placeholder="Write your dog birthdate..."
            />
            <br />
            <span>Size</span>
            <br />
            <select
              // className="size"
              value={this.state.size}
              onChange={this.switchOptions("size")}
            >
              <option value=""> Size </option>
              <option value="Smol"> smol </option>
              <option value="Small"> small </option>
              <option value="Medium"> Medium </option>
              <option value="Large"> Large </option>
              <option value="Big Boi"> Big Boi </option>
            </select>
            <br />
            <span>Gender</span>
            <br />
            <select
              className="gender"
              value={this.state.gender}
              onChange={this.switchOptions("gender")}
            >
              <option value=""> Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <br />
            <span>Activeness</span>
            <br />
            <select
              className="activeness"
              value={this.state.activeness}
              onChange={this.switchOptions("activeness")}
            >
              <option value=""> Activeness </option>
              <option value="Lazy">Lazy</option>
              <option value="Low">Low</option>
              <option value="Normal"> Normal </option>
              <option value="High"> High </option>
              <option value="Hyperactive"> Hyperactive</option>
            </select>
            <br />
            {/* <input
              type="textarea"
              value={this.state.personality}
              onChange={this.update("personality")}
              placeholder="Write your dog personality..."
            /> */}
            <span>Personality</span>
            <br />
            <select
              value={this.state.personality}
              onChange={this.switchOptions("personality")}
            >
              <option value=""> Personality </option>
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
            <br />
            <span>Picture</span>
            <br />
            <input type="file" onChange={this.handleUpload} />
            <br />
            <input type="submit" value="Submit" className="create-dog-submit-button"/>
            <br />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default DogForm;
