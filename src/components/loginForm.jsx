import React, { Component } from 'react';

class LoginForm extends Component {
  username = React.createRef();

  componentDidMount() {
    this.username.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();

    // Call the server

    console.log('Submitted');
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
            <small className="form-text text-muted" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
            <small className="form-text text-muted" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
