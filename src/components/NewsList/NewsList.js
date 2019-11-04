import React from 'react';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import NewsItem from './NewsItem/NewsItem';
import PaginationContainer from '../../containers/PaginationContainer';
import styles from './NewsList.module.css';

const override = css`
  display: block;
  margin: 30px auto 0;
  border-color: #0b6460;
  display: flex;
  justify-content: center;
`;

const NewsList = ({ articles = [], isLoading, isPagination }) => {
  console.log(articles);
  return (
    <>
      {isLoading ? (
        <BeatLoader
          css={override}
          sizeUnit="px"
          size={40}
          color="#0b6460"
          loading={isLoading}
        />
      ) : (
        <>
          <ul className={styles.newsList}>
            {articles === [] ? (
              <p>Loading...</p>
            ) : (
              articles.map(article => (
                <NewsItem {...article} key={article.url} />
              ))
            )}
          </ul>
          {isPagination && articles.length !== 0 && <PaginationContainer />}
        </>
      )}
    </>
  );
};

export default NewsList;
