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
  }

  //   componentWillReceiveProps(nextProps) {
  //     this.setState({ newDog: nextProps.newDog.text });
  //   }
  componentDidMount() {
    return (
      <div>Dog profile successfully created</div>
    )
  }
  handleSubmit(e) {
    e.preventDefault();
    // const dog = {
    //   breed: this.state.breed,
    //   description: this.state.description,
    //   birthDate: this.state.birthDate,
    //   size: this.state.size,
    //   gender: this.state.gender,
    //   activeness: this.state.activeness,
    //   personality: this.state.personality
    // };
    // const dog = Object.assign({}, this.state);
    // this.props.createDog(dog);

    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('name', this.state.name);
      formData.append('description', this.state.description);
      formData.append('breed', this.state.breed);
      formData.append('birthDate', this.state.birthDate);
      formData.append('size', this.state.size);
      formData.append('gender', this.state.gender);
      formData.append('activeness', this.state.activeness);
      formData.append('personality', this.state.personality);
      formData.append('file', this.state.photoFile);
      axios.post("/api/dogs/", formData,
        // {headers: {
        //   accept: "application/json",
        //   "Accept-Language": "en-US,en;q=0.8",
        //   "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        //   "Access-Control-Allow-Origin": "*",
        // },}
      )
        .then(response => {
          if (response.state === 200) {                         //.state or .status are both okay to use
            console.log(response.data);
          } else {
            this.props.history.push('/profile')
          }
        })
        .catch(errors => this.setState({ errors: errors }));
    };
    
    this.props.closeModal();
  }

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
          <div>
            <input
              type="textarea"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Write your dog name..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Write your dog description..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.breed}
              onChange={this.update("breed")}
              placeholder="Write your dog breed..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.birthDate}
              onChange={this.update("birthDate")}
              placeholder="Write your dog birthdate..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.size}
              onChange={this.update("size")}
              placeholder="Write your dog size..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.gender}
              onChange={this.update("gender")}
              placeholder="Write your dog gender..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.activeness}
              onChange={this.update("activeness")}
              placeholder="Write your dog activeness..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.personality}
              onChange={this.update("personality")}
              placeholder="Write your dog personality..."
            />
            <br />
            <input type="file" onChange={this.handleUpload} />
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

export default DogForm;
