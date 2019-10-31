import React, { Component } from 'react';
import styles from './SearchForm.module.css';
import SearchBarContainer from '../../../containers/SearchBarContainer';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fetchQuery, setQuery } = this.props;
    const { query } = this.state;
    fetchQuery(query);
    setQuery(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    const { currentQuery } = this.props;
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.search}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            className={styles.search__input}
            placeholder="Something interesting?"
          />
          <button type="submit" className={styles.search__submit}>
            Search!
          </button>
        </form>
        <SearchBarContainer />
        {currentQuery && (
          <p className={styles.results}>
            Results for &quot;{currentQuery}&quot;
          </p>
        )}
      </div>
    );
  }
}
