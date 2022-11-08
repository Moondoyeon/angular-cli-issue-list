import styled from 'styled-components';
import { flexBox } from '../styles/mixin';

function Advertisement() {
  const adURL =
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';
  return (
    <a href="https:www.wanted.co.kr/">
      <Wrapper>
        <span>ad</span>
        <img alt="ad" src={adURL} />
      </Wrapper>
    </a>
  );
}
export default Advertisement;

const Wrapper = styled.div`
  height: 70px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.lightGray};
  ${flexBox('row', 'center', '')}
  position: relative;
  span {
    position: absolute;
    left: 15px;
    top: 10px;
    padding: 3px 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.blue};
    color: white;
    font-size: 14px;
  }
`;
