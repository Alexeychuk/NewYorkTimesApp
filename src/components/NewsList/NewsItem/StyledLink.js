import styled from 'styled-components';
import Styledli from './StyledNewsItem';

const StyledLink = styled.a.attrs({
  target: '_blank',
})`
  position: absolute;
  top: 0;
  left: 0;
  color: #ffffff;
  background-color: #0b6460;
  width: 100%;
  height: 20%;
  font-size: 20px;
  line-height: 25px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 0 10px 0 #000000;
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
  border-radius: 5px;
  ${Styledli}:hover & {
    background-color: #334948;
  }
`;

export default StyledLink;
