import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-form-container">
          <div className="login-form">

            <h1 className="logo">BoneMeatsKibble</h1>
            <form className="login-form-form" onSubmit={this.handleSubmit}>
              <div className="form">
                Email
                <br /> 
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="email-box"
                />
                <br />
                Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="password-box"
                />
                <br />
                <input className="login-button" type="submit" value="Login" />
                {this.renderErrors()}
              </div>
            </form>
            <div className="registration">
              Don't have an account?   
              <Link to={"/signup"}>  Signup</Link>
            </div>

          </div>
        </div>
        <div className="login-form-background">
          <span className="motto">
            Happy Birthday Jaron!!
          </span>
          
        </div>

      </div>
    );
  }
}

export default withRouter(LoginForm);
