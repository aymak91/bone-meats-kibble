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
    this.handleDemo = this.handleDemo.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/profile");
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

  handleDemo(e) {
    e.preventDefault();
    let email = 'demoUser1@doge.com';
    let password = 'password'

    let interval = 50;
    let login = () => {
      this.props.login(this.state);
      this.props.history.push("/")
    };
    if (this.state.email !== email) {
      let inputEmail = setInterval(() => {
        if (this.state.email !== email) {
          let tempEmail = email.slice(0, this.state.email.length + 1);
          this.setState({ email: tempEmail });
        } else {
          clearInterval(inputEmail);
          fillPassword();
        }
      }, interval);
    }
    let fillPassword = () => {
      let inputPassword = setInterval(() => {
        if (this.state.password !== password) {
          let tempPassword = password.slice(0, this.state.password.length + 1);
          this.setState({ password: tempPassword });
        } else {
          clearInterval(inputPassword);
          login();
        }
      }, interval);
    };
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
                <div className="login-demo-buttons">

                  <input className="login-button" type="submit" value="Login" />
                  <button onClick={this.handleDemo} className="login-button"> Demo Login</button>
                </div>
                {this.renderErrors()}
              </div>
            </form>
            <div className="registration">
              Don't have an account?   
              <Link to={"/signup"} className="login-signup-link">  Signup</Link>
            </div>
          </div>
        </div>
        <div className="login-form-background">
          {/* <span className="motto">
            Happy Birthday Jaron!!
          </span> */}
          
        </div>

      </div>
    );
  }
}

export default withRouter(LoginForm);
