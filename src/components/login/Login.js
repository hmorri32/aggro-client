import React, { Component } from "react";
import TextInput from "../common/TextInput.js";
import sessionApi from "../../api/sessionApi.js";
import LoginContainer from "../../containers/LoginContainer.js";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: { email: "", password: "" },
      error: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  }

  onSave(e) {
    const { user } = this.state;
    const { history } = this.props;
    const { loginSuccess } = this.props.actions;

    e.preventDefault();
    sessionApi.login(user).then(response => {
      if (response.error) {
        this.setState({ error: response.error });
      } else {
        sessionStorage.setItem("jwt", response.auth_token);
        loginSuccess();
        history.push("/map");
      }
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <div className="login-form">
            <form>
              <TextInput
                name="email"
                label="email"
                value={this.state.user.email}
                placeholder="EMAIL"
                onChange={this.onChange}
              />

              <TextInput
                name="password"
                label="password"
                type="password"
                value={this.state.user.password}
                placeholder="PASSWORD"
                onChange={this.onChange}
              />

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSave}
              >
                {" "}
                SUBMIT{" "}
              </button>
              {this.state.error && (
                <h2 className="error">{this.state.error}</h2>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer(Login);
