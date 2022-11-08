/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../styles/mixin';

const CustomHeader = styled.header`
  ${flexBox()};
  height: 80px;
  width: 100vw;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.lightGray};
  background-color: ${({ theme }) => theme.gray};
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Wrapper = styled.div`
  cursor: pointer;
  ${flexBox()};
  font-size: 20px;
  color: ${({ theme }) => theme.blue};
  .repo {
    font-weight: 700;
  }
  span {
    margin: 0 5px;
    color: black;
  }
`;
function Header() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/');
  };
  return (
    <CustomHeader>
      <Wrapper onClick={gotoHome}>
        <div>angular</div>
        <span>/</span>
        <div className="repo">angular-cli</div>
      </Wrapper>
    </CustomHeader>
  );
}
export default Header;
