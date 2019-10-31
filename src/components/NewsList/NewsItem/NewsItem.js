import React from 'react';
import Styledli from './StyledNewsItem';
import StyledLink from './StyledLink';
import StyledContent from './StyledContent';

const NewsItem = ({ section, title, url, date, multimedia }) => {
  const localDate = new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'long',
  });
  return (
    <Styledli multimedia={multimedia}>
      <StyledLink href={url}>{title}</StyledLink>
      <StyledContent>
        <p>Section: {section}</p>
        <p>{localDate}</p>
      </StyledContent>
    </Styledli>
  );
};

export default NewsItem;
