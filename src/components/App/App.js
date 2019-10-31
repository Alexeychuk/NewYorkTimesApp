import React, { Component } from 'react';

import AppBarContainer from '../../containers/AppBarContainer';
import NewsListContainer from '../../containers/NewsListContainer';
import Footer from '../Footer/Footer';

import styles from './App.module.css';

export default class App extends Component {
  componentDidMount() {
    const { fetchNews } = this.props;
    fetchNews();
  }

  render() {
    return (
      <div className={styles.container}>
        <AppBarContainer />
        <NewsListContainer />
        <Footer />
      </div>
    );
  }
}
