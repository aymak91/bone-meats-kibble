import React from "react";
import DogBox from "./dog_box";

class DogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: "",
      description: "",
      birthDate: "",
      size: "",
      gender: "",
      activeness: "",
      personality: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ newDog: nextProps.newDog.text });
//   }

  handleSubmit(e) {
    e.preventDefault();
    let dog = {
      breed: this.state.breed,
      description: this.state.description,
      birthDate: this.state.birthDate,
      size: this.state.size,
      gender: this.state.gender,
      activeness: this.state.activeness,
      personality: this.state.personality
    };

    this.props.createDog(dog);
    this.setState({ text: "" });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.breed}
              onChange={this.update("breed")}
              placeholder="Write your dog breed..."
            />
            <input
              type="textarea"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Write your dog description..."
            />
            <input
              type="textarea"
              value={this.state.birthDate}
              onChange={this.update("birthDate")}
              placeholder="Write your dog birthdate..."
            />
            <input
              type="textarea"
              value={this.state.size}
              onChange={this.update("size")}
              placeholder="Write your dog size..."
            />
            <input
              type="textarea"
              value={this.state.gender}
              onChange={this.update("gender")}
              placeholder="Write your dog gender..."
            />
            <input
              type="textarea"
              value={this.state.activeness}
              onChange={this.update("activeness")}
              placeholder="Write your dog activeness..."
            />
            <input
              type="textarea"
              value={this.state.personality}
              onChange={this.update("personality")}
              placeholder="Write your dog personality..."
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <DogBox
          breed={this.state.breed}
          description={this.state.description}
          birthDate={this.state.birthDate}
          size={this.state.size}
          gender={this.state.gender}
          activeness={this.state.activeness}
          personality={this.state.personality}
        />
      </div>
    );
  }
}

export default DogForm;
