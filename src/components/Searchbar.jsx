import  { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    this.props.onSubmit(query);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos."
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
