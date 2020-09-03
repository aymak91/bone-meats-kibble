import React from "react";


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
      newDog: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // componentWillReceiveProps(nextProps) {
    //   this.setState({ newDog: nextProps.newDog.text });
    // }

  componentDidMount() {
    return (
      <div>Dog profile successfully created</div>
    )
  }
  handleSubmit(e) {
    e.preventDefault();

    const dog = Object.assign({}, this.state);
    this.props.createDog(dog);
    this.props.closeModal();
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
