import React from 'react';

import SearchFormContainer from '../../containers/SearchFormContainer';
import styles from './AppBar.module.css';

const AppBar = ({ fetchNews }) => {
  return (
    <div>
      <h1 className={styles.headline} onClick={fetchNews}>
        New York Times Portal
      </h1>
      <SearchFormContainer />
    </div>
  );
};

export default AppBar;
