import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

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
      <div className="signup-page">
        <div className="signup-form-container">
          <div className="signup-form">
            <h1 className="logo">Meet your Woofer Today</h1>
            <form onSubmit={this.handleSubmit} className="signup-form-form">
              <div>
                Email
                <br />
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="email-box"
                />
                <br />
                Handle
                <br />
                <input
                  type="text"
                  value={this.state.handle}
                  onChange={this.update("handle")}
                  className="email-box"
                />
                <br />
                Password
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="email-box"
                />
                <br />
                Confirm Password
                <br />
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  className="email-box"
                />
                <br />
                <input
                  type="submit"
                  value="Register"
                  className="login-button"
                />
                {this.renderErrors()}
              </div>
            </form>
            <div className="registration">
              Already registered?
              <Link to={"/login"} className="login-signup-link"> Login</Link>
            </div>
          </div>
        </div>
        <div className="signup-background"> ELLO </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
