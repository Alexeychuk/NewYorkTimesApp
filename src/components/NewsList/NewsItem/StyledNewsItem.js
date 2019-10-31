import styled from 'styled-components';

const Styledli = styled.li`
  position: relative;
  font-family: 'Alegreya Sans SC', sans-serif;
  border-radius: 5px;
  padding: 10px;
  flex: 0 0 80%;
  height: 300px;
  margin-bottom: 20px;
  background-image: url(${props => {
    let result;
    props.multimedia.length === 0
      ? (result =
          'https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png')
      : (result = props.multimedia[4].url);
    if (result.includes('https')) return result;
    return `https://static01.nyt.com/${result}`;
    // console.log(); //https://static01.nyt.com/
  }});
  background-size: cover;
  background-position: center center;
  object-fit: cover;
  box-shadow: 0 0 16px 0px #000000;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 26px 0px #000000;
    transform: scale(1.03);
  }
  @media (min-width: 768px) {
    flex: 0 0 48%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 32%;
  }
`;

export default Styledli;
