import React, { Component } from 'react';
import Select from 'react-select';
import styles from './SearchBar.module.css';

const categoryOptions = [
  { value: 'home', label: 'All' },
  { value: 'arts', label: 'Arts' },
  { value: 'automobiles', label: 'Automobiles' },
  { value: 'books', label: 'Books' },
  { value: 'business', label: 'Business' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'food', label: 'Food' },
  { value: 'health', label: 'Health' },
  { value: 'insider', label: 'Insider' },
];

export default class SearchBar extends Component {
  state = {
    categoryFilter: categoryOptions.find(category => {
      // console.log(this.props.category);
      return category.value === this.props.category;
    }),
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.categoryFilter.value !== nextProps.category) {
      this.setState({
        categoryFilter: categoryOptions.find(
          category => category.value === nextProps.category,
        ),
      });
    }
    return true;
  }

  handleChange = (selectedOption, e) => {
    const { fetchCategory, resetQuery } = this.props;
    resetQuery();
    fetchCategory(selectedOption.value).then(() =>
      this.setState({
        [e.name]: categoryOptions.find(
          category => category.value === this.props.category,
        ),
      }),
    );
  };

  render() {
    const { categoryFilter } = this.state;
    return (
      <div className={styles.searchBar}>
        <p className={styles.headline}>Search for category!</p>

        <Select
          value={categoryFilter}
          onChange={this.handleChange}
          options={categoryOptions}
          name="categoryFilter"
        />
      </div>
    );
  }
}
