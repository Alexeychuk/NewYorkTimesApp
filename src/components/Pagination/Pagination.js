import React, { Component } from 'react';
import styles from './Pagination.module.css';

export default class Pagination extends Component {
  state = {
    currentPage: 1,
  };

  handlePagination = e => {
    const { fetchQuery, query } = this.props;
    const { currentPage } = this.state;
    if (e.target.name === 'reset') {
      this.setState(
        () => ({
          currentPage: 1,
        }),
        () => {
          fetchQuery(query, currentPage);
        },
      );
      return;
    }
    const action = e.target.name === 'decrease' ? -1 : 1;

    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + action,
      }),
      () => {
        fetchQuery(query, currentPage);
      },
    );
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className={styles.Pagination}>
        {/* <button
          type="button"
          disabled={currentPage === 1 ? true : false}
          onClick={this.handlePagination}
          name="reset"
        >
          First
        </button> */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={this.handlePagination}
          name="decrease"
        >
          Prev
        </button>
        <p> {currentPage} </p>
        <button type="button" onClick={this.handlePagination} name="increase">
          Next
        </button>
      </div>
    );
  }
}
