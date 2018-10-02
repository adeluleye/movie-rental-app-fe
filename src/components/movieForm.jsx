import React, { Component } from 'react';

class MovieForm extends Component {
  handleSave = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>MovieForm {match.params.id}</h1>
        <button onClick={this.handleSave} className="btn btn-primary btn-sm">
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
