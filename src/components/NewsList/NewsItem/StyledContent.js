import styled from 'styled-components';
import Styledli from './StyledNewsItem';

const StyledContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #ffffff;
  background-color: #0b6460;
  width: 100%;
  height: 20%;
  font-size: 20px;
  line-height: 25px;
  padding: 5px 10px;
  text-align: center;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.3s;
  opacity: 0;
  ${Styledli}:hover & {
    background-color: #334948;
    box-shadow: 0 0 10px 0 #000000;
    opacity: 1;
  }
`;

export default StyledContent;
